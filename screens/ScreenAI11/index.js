import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';

const TemplateSelectionScreen = () => {
  const templates = [{
    id: 1,
    name: 'Safety Template 1',
    category: 'Category 1',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: 2,
    name: 'Safety Template 2',
    category: 'Category 2',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: 3,
    name: 'Safety Template 3',
    category: 'Category 3',
    image: 'https://tinyurl.com/42evm3m3'
  }];

  const handleTemplateSelection = template => {// Handle template selection logic
  };

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Template Selection</Text>
      <View style={styles.templateList}>
        {templates.map(template => <TouchableOpacity key={template.id} style={styles.templateItem} onPress={() => handleTemplateSelection(template)}>
            <Image source={{
          uri: template.image
        }} style={styles.templateImage} />
            <Text style={styles.templateName}>{template.name}</Text>
            <Text style={styles.templateCategory}>{template.category}</Text>
          </TouchableOpacity>)}
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  templateList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  templateItem: {
    width: '48%',
    marginBottom: 20,
    borderRadius: 8,
    backgroundColor: '#f2f2f2',
    padding: 10,
    alignItems: 'center'
  },
  templateImage: {
    width: '100%',
    height: 150,
    marginBottom: 10,
    borderRadius: 8
  },
  templateName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  templateCategory: {
    fontSize: 14,
    color: '#888'
  }
};
export default TemplateSelectionScreen;