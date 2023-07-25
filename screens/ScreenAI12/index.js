import React from 'react';
import { Text, TextInput, Button, SafeAreaView } from 'react-native';

const IncidentReportFormScreen = () => {
  return <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Incident Report Form</Text>

      <Text style={styles.sectionHeading}>Incident Details</Text>
      <TextInput style={styles.input} placeholder="Date" />
      <TextInput style={styles.input} placeholder="Time" />
      <TextInput style={styles.input} placeholder="Location" />
      <TextInput style={styles.input} placeholder="Description" multiline />

      <Text style={styles.sectionHeading}>Injury and Damage Assessment</Text>
      <TextInput style={styles.input} placeholder="Injuries" />
      <TextInput style={styles.input} placeholder="Damage" />

      <Text style={styles.sectionHeading}>Witness Statements</Text>
      <TextInput style={styles.input} placeholder="Witness Statement" multiline />

      <Text style={styles.sectionHeading}>Immediate Actions Taken</Text>
      <TextInput style={styles.input} placeholder="Actions Taken" multiline />

      <Text style={styles.metadata}>Form Metadata</Text>
      <TextInput style={styles.input} placeholder="Date of Submission" />
      <TextInput style={styles.input} placeholder="Full Name" />

      <Button title="Submit" onPress={() => {}} />
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  sectionHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 16
  },
  metadata: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8
  }
};
export default IncidentReportFormScreen;