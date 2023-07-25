import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Screen = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const templates = [{
    id: 1,
    name: 'Template 1',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: 2,
    name: 'Template 2',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: 3,
    name: 'Template 3',
    image: 'https://tinyurl.com/42evm3m3'
  }];

  const handleTemplateSelection = template => {
    setSelectedTemplate(template);
  };

  const handleSaveDraft = () => {// Save the form as a draft
  };

  const handlePublish = () => {// Publish the form
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Template Selection</Text>
      <View style={styles.templatesContainer}>
        {templates.map(template => <TouchableOpacity key={template.id} style={[styles.templateItem, selectedTemplate === template && styles.selectedTemplate]} onPress={() => handleTemplateSelection(template)}>
            <Image source={{
          uri: template.image
        }} style={styles.templateImage} />
            <Text style={styles.templateName}>{template.name}</Text>
          </TouchableOpacity>)}
      </View>
      {selectedTemplate && <View style={styles.customizationContainer}>
          <Text style={styles.title}>Document Customization</Text>
          {
        /* Add specific details customization */
      }
          <TouchableOpacity style={styles.button} onPress={handleSaveDraft}>
            <Text style={styles.buttonText}>Save as Draft</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePublish}>
            <Text style={styles.buttonText}>Publish</Text>
          </TouchableOpacity>
        </View>}
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  templatesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  templateItem: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginRight: 10
  },
  selectedTemplate: {
    borderColor: 'blue'
  },
  templateImage: {
    width: 100,
    height: 100,
    marginBottom: 10
  },
  templateName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  customizationContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default Screen;