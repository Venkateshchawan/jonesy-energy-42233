import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, Image, StyleSheet } from 'react-native';

const BillOfLadingScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI20");
      }}><Text style={styles.title}>New Bill of Lading Form</Text></Pressable>
        <Button title="Create" onPress={() => {}} />
      </View>
      <View style={styles.library}>
        <Text style={styles.libraryTitle}>Bill of Lading Library</Text>
        <View style={styles.template}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.templateImage} />
          <Pressable onPress={() => {
          navigation.navigate("ScreenAI19");
        }}><Text style={styles.templateName}>Template 1</Text></Pressable>
          <Button title="View Details" onPress={() => {}} />
        </View>
        <View style={styles.template}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.templateImage} />
          <Text style={styles.templateName}>Template 2</Text>
          <Button title="View Details" onPress={() => {}} />
        </View>
        {
        /* Add more templates here */
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  library: {
    flex: 1
  },
  libraryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16
  },
  template: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  templateImage: {
    width: 80,
    height: 80,
    marginRight: 16
  },
  templateName: {
    fontSize: 16,
    flex: 1
  }
});
export default BillOfLadingScreen;