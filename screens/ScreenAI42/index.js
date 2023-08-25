import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, SafeAreaView, StyleSheet } from 'react-native';

const Screen = () => {
  const navigation = useNavigation();
  const [keyword, setKeyword] = useState('');
  const [clients, setClients] = useState([{
    id: 1,
    companyName: 'Client 1',
    phoneNumber: '1234567890',
    email: 'client1@example.com'
  }, {
    id: 2,
    companyName: 'Client 2',
    phoneNumber: '9876543210',
    email: 'client2@example.com'
  }, {
    id: 3,
    companyName: 'Client 3',
    phoneNumber: '5555555555',
    email: 'client3@example.com'
  }]);
  const filteredClients = clients.filter(client => client.companyName.toLowerCase().includes(keyword.toLowerCase()));

  const renderClientItem = ({
    item
  }) => <View style={styles.clientItem}>
      <Text style={styles.companyName}>{item.companyName}</Text>
      <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
      <Text style={styles.email}>{item.email}</Text>
      <Button title="See Details" onPress={() => handleSeeDetails(item)} />
    </View>;

  const handleSeeDetails = client => {
    // Handle the action when "See Details" button is pressed
    console.log('See Details:', client);
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Button title="Add a Client" onPress={() => handleAddClient()} />
        <TextInput style={styles.searchBar} placeholder="Search" value={keyword} onChangeText={text => setKeyword(text)} />
      </View>
      <FlatList data={filteredClients} renderItem={renderClientItem} keyExtractor={item => item.id.toString()} />
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI40");
    }}><Text style={styles.nBaNVifw}>{"1"}</Text></Pressable><Pressable onPress={() => {
      navigation.navigate("ScreenAI41");
    }}><Text style={styles.TKxNLrGG}>{"2"}</Text></Pressable></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8
  },
  clientItem: {
    marginBottom: 16
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4
  },
  phoneNumber: {
    fontSize: 16,
    marginBottom: 4
  },
  email: {
    fontSize: 16,
    marginBottom: 8
  },
  nBaNVifw: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 5,
    borderRadius: 0
  },
  TKxNLrGG: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 5,
    borderRadius: 0
  }
});
export default Screen;