import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const BillOfLadingScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Auto-Generated Bill of Lading Number</Text>
      <Text style={styles.subtitle}>Upon initiating a new Bill of Lading entry, the application automatically generates a unique identification number for each document to ensure proper tracking and management.</Text>
      <View style={styles.uploadContainer}>
        <Text style={styles.uploadText}>Upload Bill of Lading Form</Text>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.uploadImage} />
        <Text style={styles.uploadInstructions}>Use the Upload Photo/Camera feature</Text>
      </View>
      <View style={styles.fieldsContainer}>
        <Text style={styles.fieldsTitle}>Bill of Lading Form Fields</Text>
        {
        /* Add fields here */
      }
      </View>
      <View style={styles.metadataContainer}>
        <Text style={styles.metadataTitle}>Bill of Lading Metadata</Text>
        {
        /* Display metadata here */
      }
      </View>
      <Button title="Submit" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16
  },
  uploadContainer: {
    marginBottom: 16
  },
  uploadText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  uploadImage: {
    width: 200,
    height: 200,
    marginBottom: 8
  },
  uploadInstructions: {
    fontSize: 16
  },
  fieldsContainer: {
    marginBottom: 16
  },
  fieldsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  metadataContainer: {
    marginBottom: 16
  },
  metadataTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  }
});
export default BillOfLadingScreen;