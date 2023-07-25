import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const EmployeeScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.profileImage} />
        <Text style={styles.fullName}>John Doe</Text>
        <Text style={styles.email}>johndoe@example.com</Text>
      </View>
      <View style={styles.addressContainer}>
        <Text style={styles.addressTitle}>Address</Text>
        <Text style={styles.addressText}>123 Main St</Text>
        <Text style={styles.addressText}>New York</Text>
        <Text style={styles.addressText}>12345</Text>
        <Text style={styles.addressText}>NY</Text>
      </View>
      <View style={styles.phoneContainer}>
        <Text style={styles.phoneTitle}>Phone Number</Text>
        <Text style={styles.phoneText}>123-456-7890</Text>
      </View>
      <View style={styles.jobContainer}>
        <Text style={styles.jobTitle}>Job Description</Text>
        <Text style={styles.jobText}>Software Engineer</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
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
    color: '#888'
  },
  addressContainer: {
    marginBottom: 20
  },
  addressTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  addressText: {
    fontSize: 16,
    marginBottom: 5
  },
  phoneContainer: {
    marginBottom: 20
  },
  phoneTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  phoneText: {
    fontSize: 16
  },
  jobContainer: {
    marginBottom: 20
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  jobText: {
    fontSize: 16
  }
});
export default EmployeeScreen;