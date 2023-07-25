import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, Image, SafeAreaView, StyleSheet } from 'react-native';

const Screen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [uploadedDocument, setUploadedDocument] = useState(null);

  const handleUploadDocument = () => {// Logic to upload document
  };

  const handleAddDocument = () => {// Logic to add document
  };

  const handleCancel = () => {// Logic to cancel
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Document Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Enter document title" />

      <Text style={styles.title}>Document Description</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} placeholder="Enter document description" />

      <Text style={styles.title}>Document Categories</Text>
      <TextInput style={styles.input} value={category} onChangeText={setCategory} placeholder="Select document category" />

      <Text style={styles.title}>Current Date</Text>
      <Text style={styles.date}>{new Date().toDateString()}</Text>

      <TouchableOpacity style={styles.button} onPress={handleUploadDocument}>
        <Text style={styles.buttonText}>Upload Document</Text>
      </TouchableOpacity>

      {uploadedDocument && <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.uploadedImage} />}

      <TouchableOpacity style={styles.button} onPress={handleAddDocument}>
        <Text style={styles.buttonText}>Add Document</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleCancel}>
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8
  },
  date: {
    marginBottom: 16
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 16
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  uploadedImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16
  }
});
export default Screen;