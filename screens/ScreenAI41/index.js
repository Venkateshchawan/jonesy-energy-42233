import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet } from 'react-native';

const ClientDetailsScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Client Details</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.label}>Company Name:</Text>
        <Text style={styles.text}>ABC Company</Text>

        <Text style={styles.label}>Company Address:</Text>
        <Text style={styles.text}>123 Main St</Text>

        <Text style={styles.label}>Street Address:</Text>
        <Text style={styles.text}>456 Elm St</Text>

        <Text style={styles.label}>City:</Text>
        <Text style={styles.text}>New York</Text>

        <Text style={styles.label}>ZIP Code:</Text>
        <Text style={styles.text}>10001</Text>

        <Text style={styles.label}>State:</Text>
        <Text style={styles.text}>NY</Text>

        <Text style={styles.label}>Company Phone Number:</Text>
        <Text style={styles.text}>123-456-7890</Text>

        <Text style={styles.label}>Company Email Address:</Text>
        <Text style={styles.text}>info@abc.com</Text>

        <Text style={styles.label}>Company Additional Information:</Text>
        <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>

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
    backgroundColor: '#fff'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10
  },
  text: {
    fontSize: 16,
    marginBottom: 10
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default ClientDetailsScreen;