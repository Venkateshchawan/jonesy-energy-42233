import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';

const InvoiceScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Client Information</Text>
        <Text style={styles.label}>Job number:</Text>
        <Text style={styles.value}>123456</Text>
        <Text style={styles.label}>Essential Details:</Text>
        <Text style={styles.value}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo ac nunc tincidunt aliquet. Nulla facilisi. Sed euismod, nunc id aliquam tincidunt, nunc nunc tincidunt urna, id aliquam nunc nunc id nunc.</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Total Amount</Text>
        <Text style={styles.totalAmount}>$500.00</Text>
        <TouchableOpacity style={styles.recordButton}>
          <Text style={styles.recordButtonText}>Record Payments</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadButtonText}>Download</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  section: {
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  value: {
    fontSize: 16,
    marginBottom: 10
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  recordButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  recordButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  downloadButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center'
  },
  downloadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default InvoiceScreen;