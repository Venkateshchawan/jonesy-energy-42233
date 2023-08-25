import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { StyleSheet } from "react-native";
import React from 'react';
import { SafeAreaView, View, Text, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
const invoices = [{
  id: 1,
  clientName: 'Client A',
  invoiceNumber: 'INV001',
  invoiceDate: '2022-01-01',
  dueDate: '2022-01-31',
  totalAmount: 100
}, {
  id: 2,
  clientName: 'Client B',
  invoiceNumber: 'INV002',
  invoiceDate: '2022-02-01',
  dueDate: '2022-02-28',
  totalAmount: 200
}, {
  id: 3,
  clientName: 'Client C',
  invoiceNumber: 'INV003',
  invoiceDate: '2022-03-01',
  dueDate: '2022-03-31',
  totalAmount: 300
}];

const InvoiceScreen = () => {
  const navigation = useNavigation();

  const renderInvoiceItem = ({
    item
  }) => <TouchableOpacity onPress={() => handleInvoicePress(item)}>
      <View style={styles.invoiceItem}>
        <Text style={styles.invoiceItemText}>{item.clientName}</Text>
        <Text style={styles.invoiceItemText}>{item.invoiceNumber}</Text>
        <Text style={styles.invoiceItemText}>{item.invoiceDate}</Text>
        <Text style={styles.invoiceItemText}>{item.dueDate}</Text>
        <Text style={styles.invoiceItemText}>{item.totalAmount}</Text>
      </View>
    </TouchableOpacity>;

  const handleInvoicePress = () => {// Navigate to invoice details screen
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <TextInput style={styles.searchBar} placeholder="Search" />
        <Button title="Filter" onPress={() => handleFilter()} />
      </View>
      <FlatList data={invoices} keyExtractor={item => item.id.toString()} renderItem={renderInvoiceItem} />
      <Button title="Create new Invoice" onPress={() => handleCreateInvoice()} />
    <Pressable onPress={() => {
      navigation.navigate("ScreenAI27");
    }}><Text style={_styles.eZwFFbHB}>{"1"}</Text></Pressable><Pressable onPress={() => {
      navigation.navigate("ScreenAI25");
    }}><Text style={_styles.XFBJGJZD}>{"2"}</Text></Pressable></SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff'
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: 8,
    marginRight: 8
  },
  invoiceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  invoiceItemText: {
    flex: 1,
    marginRight: 8
  }
};
export default InvoiceScreen;

const _styles = StyleSheet.create({
  eZwFFbHB: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 5,
    borderRadius: 0
  },
  XFBJGJZD: {
    width: 50,
    height: 10,
    lineHeight: 14,
    fontSize: 5,
    borderRadius: 0,
    top: 0,
    left: 0,
    transform: [{
      rotate: "0deg"
    }]
  }
});