import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

const EmployeeScreen = () => {
  const [fullName, setFullName] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [email, setEmail] = useState('');
  const [tempPassword, setTempPassword] = useState('');

  const generateTempPassword = () => {
    // Call backend API to generate temporary password
    // Set the generated password to tempPassword state
    setTempPassword('GeneratedPassword123');
  };

  const sendLinkAndAddUser = () => {// Call backend API to send link and add user
    // Display success message or handle error
  };

  const cancel = () => {// Handle cancel action
  };

  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder="Employee Full Name" value={fullName} onChangeText={setFullName} />
      <TextInput style={styles.textArea} placeholder="Employee Job Description" multiline numberOfLines={4} value={jobDescription} onChangeText={setJobDescription} />
      <TextInput style={styles.input} placeholder="Employee Email Address" value={email} onChangeText={setEmail} />
      <TouchableOpacity style={styles.button} onPress={generateTempPassword}>
        <Text style={styles.buttonText}>Generate Temporary Password</Text>
      </TouchableOpacity>
      {tempPassword ? <Text style={styles.tempPasswordText}>Temporary Password: {tempPassword}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={sendLinkAndAddUser}>
        <Text style={styles.buttonText}>Send Link and Add User</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={cancel}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16
  },
  textArea: {
    height: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    textAlignVertical: 'top'
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  tempPasswordText: {
    fontSize: 16,
    marginBottom: 16
  }
};
export default EmployeeScreen;