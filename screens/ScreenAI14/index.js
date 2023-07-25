import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const SafetyFormView = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.metadataContainer}>
        <Text style={styles.metadataText}>ID: 123456</Text>
        <Text style={styles.metadataText}>Submitted on: 01/01/2022</Text>
        <Text style={styles.metadataText}>Submitted by: John Doe</Text>
      </View>
      <View style={styles.formContainer}>
        {
        /* Display form data here */
      }
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10
  },
  metadataContainer: {
    marginBottom: 20
  },
  metadataText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export default SafetyFormView;