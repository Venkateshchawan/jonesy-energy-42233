import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled4 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("ScreenAI5");
      }}><Text style={styles.qxwiKxMc}>{"Notification"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI6");
      }}><Text style={styles.rKLLQCAO}>{"Tasks and Reminders"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI8");
      }}><Text style={styles.mtGWqcOX}>{"Safety Documents Library screen"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI16");
      }}><Text style={styles.wLELltKP}>{"Bills of Lading Overview"}</Text></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  qxwiKxMc: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  rKLLQCAO: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  mtGWqcOX: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  wLELltKP: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled4;