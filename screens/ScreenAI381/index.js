import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const EmployeeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.profileImage} />
        <Text style={styles.fullName}>John Doe</Text>
        <Text style={styles.email}>johndoe@example.com</Text>
        <View style={styles.addressContainer}>
          <Text style={styles.addressLabel}>Address:</Text>
          <Text style={styles.addressText}>123 Main St</Text>
          <Text style={styles.addressText}>New York, NY 12345</Text>
        </View>
        <Text style={styles.phoneNumber}>Phone: 123-456-7890</Text>
        <Text style={styles.jobDescription}>Job Description: Software Engineer</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Remove</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10
  },
  fullName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5
  },
  email: {
    fontSize: 16,
    marginBottom: 10
  },
  addressContainer: {
    alignItems: 'center',
    marginBottom: 10
  },
  addressLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  addressText: {
    fontSize: 14,
    marginBottom: 2
  },
  phoneNumber: {
    fontSize: 16,
    marginBottom: 10
  },
  jobDescription: {
    fontSize: 16,
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default EmployeeScreen;