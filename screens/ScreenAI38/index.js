import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';

const ChangePasswordScreen = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleOldPasswordChange = text => {
    setOldPassword(text);
  };

  const handleNewPasswordChange = text => {
    setNewPassword(text);
  };

  const handlePasswordChange = () => {
    // Handle password change logic here
    console.log('Old Password:', oldPassword);
    console.log('New Password:', newPassword);
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Old Password" secureTextEntry value={oldPassword} onChangeText={handleOldPasswordChange} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="New Password" secureTextEntry value={newPassword} onChangeText={handleNewPasswordChange} />
      </View>
      <Button title="Change Password" onPress={handlePasswordChange} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10
  }
});
export default ChangePasswordScreen;