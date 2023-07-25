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
      }}><Text style={styles.wLELltKP}>{"Bills of Lading Overview"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI24");
      }}><Text style={styles.cbhWkpRc}>{"Invoice Overview screen"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI31");
      }}><Text style={styles.qYbkQYLX}>{"Logbooks"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("ScreenAI32");
      }}><Text style={styles.rLQlvKhl}>{"My Bank account"}</Text></Pressable><Text style={styles.UGpXQgSs}>{"Manage SubAdmin"}</Text><Pressable onPress={() => {
        navigation.navigate("ScreenAI39");
      }}><Text style={styles.wKsCqEla}>{"Account Settings"}</Text></Pressable></ScrollView>
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
  },
  cbhWkpRc: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  qYbkQYLX: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  rLQlvKhl: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  UGpXQgSs: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  wKsCqEla: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled4;