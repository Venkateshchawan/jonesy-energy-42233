import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const LogbookScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.metadataContainer}>
        <Text style={styles.metadataText}>Logbook Entry ID: 12345</Text>
        <Text style={styles.metadataText}>Submitted on: 01/01/2022</Text>
        <Text style={styles.metadataText}>Submitted by: John Doe</Text>
        <Text style={styles.metadataText}>Last modified by: Jane Smith</Text>
      </View>
      <View style={styles.logbookContainer}>
        <Text style={styles.logbookTitle}>Logbook View</Text>
        {
        /* Render logbook information here */
      }
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16
  },
  metadataContainer: {
    marginBottom: 16
  },
  metadataText: {
    fontSize: 16,
    marginBottom: 8
  },
  logbookContainer: {
    flex: 1
  },
  logbookTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16
  }
});
export default LogbookScreen;