import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

const BillOfLadingsScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI22");
      }}><Text style={styles.title}>Bill of Ladings Forms</Text></Pressable>
        <Button title="Submit a Bill of Landing" onPress={() => {}} style={_styles.MywGBScO} />
      </View>
      <View style={styles.section}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI18");
      }}><Text style={styles.title}>Section 1</Text></Pressable>
        <View style={styles.row}>
          <Text style={styles.label}>Search option</Text>
          <Text style={styles.label}>Filter option</Text>
        </View>
        <Text style={styles.label}>The Admin user can apply filters to narrow down the Bill of Ladings based on dates and/or Employee full name</Text>
      </View>
      <View style={styles.section}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI23");
      }}><Text style={styles.title}>Section 2</Text></Pressable>
        <Text style={styles.label}>Bill of Lading List</Text>
        <Text style={styles.label}>The screen displays a list of all the Bill of Lading documents in a tabular format.</Text>
        <Button title="View Document Details" onPress={() => {}} />
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  section: {
    marginBottom: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8
  },
  label: {
    fontSize: 16,
    marginBottom: 8
  }
};
export default BillOfLadingsScreen;

const _styles = StyleSheet.create({
  MywGBScO: {
    position: "relative"
  }
});