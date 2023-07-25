import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, TextInput, FlatList, Image } from 'react-native';
const data = [{
  id: '1',
  title: 'Document 1',
  category: 'Category 1',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  date: '2022-01-01'
}, {
  id: '2',
  title: 'Document 2',
  category: 'Category 1',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  date: '2022-01-02'
}, {
  id: '3',
  title: 'Document 3',
  category: 'Category 2',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  date: '2022-01-03'
}];

const Screen = () => {
  const navigation = useNavigation();

  const renderItem = ({
    item
  }) => <View style={styles.documentContainer}>
      <Image source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} style={styles.documentImage} />
      <View style={styles.documentDetails}>
        <Text style={styles.documentTitle}>{item.title}</Text>
        <Text style={styles.documentCategory}>{item.category}</Text>
        <Text style={styles.documentDescription}>{item.description}</Text>
        <Text style={styles.documentDate}>{item.date}</Text>
      </View>
    </View>;

  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Safety Forms</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submitted Safety Forms</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.section}>
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI9");
      }}>
          <Text style={styles.buttonText}>Upload New Document</Text>
        </TouchableOpacity>
        <TextInput style={styles.searchBar} placeholder="Search" />
        <Text style={styles.categoryText}>Document Categories:</Text>
      </View>
      <View style={styles.section}>
        <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16
  },
  section: {
    marginBottom: 16
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  searchBar: {
    backgroundColor: '#F2F2F2',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  documentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  documentImage: {
    width: 64,
    height: 64,
    borderRadius: 8,
    marginRight: 16
  },
  documentDetails: {
    flex: 1
  },
  documentTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  documentCategory: {
    fontSize: 14,
    color: '#888',
    marginBottom: 4
  },
  documentDescription: {
    fontSize: 14,
    marginBottom: 4
  },
  documentDate: {
    fontSize: 12,
    color: '#888'
  }
};
export default Screen;