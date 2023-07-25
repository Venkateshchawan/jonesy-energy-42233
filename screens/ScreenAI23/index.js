import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

const BillOfLadingViewScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.metadataContainer}>
        <Text style={styles.metadataText}>Bill of Lading Metadata:</Text>
        <Text style={styles.metadataText}>ID: 123456</Text>
        <Text style={styles.metadataText}>Submitted on: 2022-01-01</Text>
        <Text style={styles.metadataText}>Submitted by: John Doe</Text>
        <Text style={styles.metadataText}>Last modified by: Jane Smith</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.contentText}>Shipment Date: 2022-01-01</Text>
        <Text style={styles.contentText}>Sender: John Doe</Text>
        <Text style={styles.contentText}>Receiver: Jane Smith</Text>
        <Text style={styles.contentText}>Goods Description: Lorem ipsum dolor sit amet</Text>
        <Text style={styles.contentText}>Quantity: 10</Text>
        <Text style={styles.contentText}>Weight: 100 kg</Text>
      </View>
      <TouchableOpacity style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Download</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 24
  },
  metadataContainer: {
    marginBottom: 24
  },
  metadataText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  contentContainer: {
    marginBottom: 24
  },
  contentText: {
    fontSize: 16,
    marginBottom: 8
  },
  buttonContainer: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default BillOfLadingViewScreen;