import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Username" placeholderTextColor="#999" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#999" secureTextEntry />
      </View>
      <TouchableOpacity style={styles.loginButton} onPress={() => {
      navigation.navigate("Untitled4");
    }}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPasswordButton} onPress={() => {
      navigation.navigate("ScreenAI3");
    }}>
        <Text style={styles.forgotPasswordButtonText}>Forgot Password?</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10
  },
  loginButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  forgotPasswordButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  forgotPasswordButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default LoginScreen;