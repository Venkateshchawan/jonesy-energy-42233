import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

const EditFormScreen = () => {
  const [drivingHours, setDrivingHours] = useState('');
  const [restBreaks, setRestBreaks] = useState('');
  const [distance, setDistance] = useState('');

  const handleSaveChanges = () => {// Save changes logic
  };

  const handleCancelEditing = () => {// Cancel editing logic
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Edit Form Fields</Text>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Driving Hours</Text>
        <TextInput style={styles.input} value={drivingHours} onChangeText={setDrivingHours} placeholder="Enter driving hours" />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Rest Breaks</Text>
        <TextInput style={styles.input} value={restBreaks} onChangeText={setRestBreaks} placeholder="Enter rest breaks" />
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Distance</Text>
        <TextInput style={styles.input} value={distance} onChangeText={setDistance} placeholder="Enter distance" />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSaveChanges}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleCancelEditing}>
        <Text style={styles.buttonText}>Cancel Editing</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  fieldContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 18,
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default EditFormScreen;