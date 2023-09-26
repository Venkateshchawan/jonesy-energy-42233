from django.contrib import admin
from django.contrib.auth import admin as auth_admin
from django.contrib.auth import get_user_model
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode
from django.utils.encoding import force_bytes
from allauth.account.adapter import get_adapter
from rest_framework import serializers
from allauth.account.models import EmailAddress 
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from django.conf import settings
from rest_framework.authtoken.models import Token


from users.forms import UserChangeForm, UserCreationForm

User = get_user_model()

class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ('email', 'password1', 'password2', 'name')


@admin.register(User)
class UserAdmin(auth_admin.UserAdmin):

    form = UserChangeForm
    add_form = CustomUserCreationForm
    fieldsets = (
        (None, {"fields": ("email", "password")}),
        (("User Info"), {"fields": ("name",)}),
        (("Permissions"), {"fields": ("is_active", "is_staff", "is_superuser")}),
        (("Important dates"), {"fields": ("last_login", "date_joined")}),
    )

    add_fieldsets = (
        (
            None,
            {
                "classes": ("wide",),
                "fields": ("email", "password1", "password2"),
            },
        ),
    )
    list_display = ["username", "name", "is_superuser"]
    search_fields = ["name"]

    def save_model(self, request, obj, form, change):
        email = get_adapter().clean_email(obj.email)
        super().save_model(request, obj, form, change)

        if not change:
            if EmailAddress.objects.filter(email=email).exists():
                raise serializers.ValidationError(
                    ("A user is already registered with this e-mail address."))
        
        email_address, created = EmailAddress.objects.get_or_create(
            user=obj,
            email=email,
            verified=False, 
        )

        base_username = email.split('@')[0] if email else obj.name.lower()
        username = base_username
        counter = 1
        while User.objects.filter(username=username).exclude(id=obj.id).exists():
            username = f"{base_username}{counter}"
            counter += 1
        obj.username = username
        obj.save()


        token, created = Token.objects.get_or_create(user=obj)
        token = default_token_generator.make_token(obj)
        uid = urlsafe_base64_encode(force_bytes(obj.pk))

        if not change:
            subject = 'Welcome to Jonesy Energy'
            message_content = f'Thank you for signing up, {obj.username}!<br><br>'
            message_content += 'This email is sent by the admin to help you log in to your account.<br>'
            message_content += 'To reset your password, please follow these steps:<br><br>'
            message_content += '1. Click the "Reset Password" button below to start the password reset process.<br>'
            message_content += '2. You will be redirected to a page where you can enter your email address.<br>'
            message_content += '3. Enter your email address and click the "Reset Password" button.<br>'
            message_content += '4. Check your email inbox for a password reset link.<br>'
            message_content += '5. Click the link to reset your password and gain access to your account.<br><br>'
            message_content += f'<a href="https://polished-truth-42233.botics.co/api/v1/sendresetpasswordemail/" ' \
                                f'style="background-color:#007BFF;color:#ffffff;display:inline-block;padding:10px ' \
                                f'20px;text-decoration:none;border-radius: 5px;">Reset Password</a>'

            message = Mail(
                from_email=settings.EMAIL_FROM,
                to_emails=obj.email,
                subject=subject,
                html_content=message_content
            )

            try:
                sg = SendGridAPIClient(settings.EMAIL_HOST_PASSWORD)
                response = sg.send(message)
                if response.status_code == 202:
                    print(f"Welcome email sent successfully to {obj.email} via SendGrid.")
                else:
                    print(f"Failed to send welcome email to {obj.email}.")
            except Exception as e:
                print(f"Error sending welcome email to {obj.email}: {str(e)}")

    save_model.short_description = "Save user and send welcome email (on registration)"
  
