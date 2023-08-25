import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const Screen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI33");
      }}><Text style={styles.title}>Section 1</Text></Pressable>
        <Text style={styles.label}>Bank Name</Text>
        <Text style={styles.value}>Bank ABC</Text>
        <Text style={styles.label}>Account Name</Text>
        <Text style={styles.value}>John Doe</Text>
        <Text style={styles.label}>Account Number</Text>
        <Text style={styles.value}>1234567890</Text>
        <Text style={styles.label}>Routing Number</Text>
        <Text style={styles.value}>9876543210</Text>
        <Text style={styles.label}>IBAN</Text>
        <Text style={styles.value}>GB12ABCD34567890</Text>
        <Text style={styles.label}>SWIFT</Text>
        <Text style={styles.value}>SWFT1234</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>Section 2</Text>
        <Text style={styles.subtitle}>Display Received Payments</Text>
        <View style={styles.paymentContainer}>
          <View style={styles.payment}>
            <Text style={styles.paymentTitle}>Payment 1</Text>
            <Text style={styles.paymentInfo}>Date: 01/01/2022</Text>
            <Text style={styles.paymentInfo}>Amount: $100</Text>
            <Text style={styles.paymentInfo}>Account Number: 1234567890</Text>
          </View>
          {
          /* Add more payment components here */
        }
        </View>
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
  section: {
    marginBottom: 24
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  value: {
    fontSize: 16,
    marginBottom: 16
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16
  },
  paymentContainer: {
    flexDirection: 'column'
  },
  payment: {
    backgroundColor: '#f2f2f2',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  paymentInfo: {
    fontSize: 16,
    marginBottom: 4
  }
});
export default Screen;