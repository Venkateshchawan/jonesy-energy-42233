import React from 'react';
import { Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Company Name</Text>
      <TextInput style={styles.input} placeholder="Enter company name" />

      <Text style={styles.heading}>Company Address</Text>
      <TextInput style={styles.input} placeholder="Enter street address" />
      <TextInput style={styles.input} placeholder="Enter city" />
      <TextInput style={styles.input} placeholder="Enter ZIP code" />
      <TextInput style={styles.input} placeholder="Enter state" />

      <Text style={styles.heading}>Company Phone Number</Text>
      <TextInput style={styles.input} placeholder="Enter phone number" />

      <Text style={styles.heading}>Company Email Address</Text>
      <TextInput style={styles.input} placeholder="Enter email address" />

      <Text style={styles.heading}>Company Additional Information</Text>
      <TextInput style={styles.textArea} placeholder="Enter additional information" multiline={true} />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add a Client</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
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
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8
  },
  textArea: {
    height: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingTop: 8
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 16
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
};
export default Screen;