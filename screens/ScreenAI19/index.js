import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity } from 'react-native';

const BillOfLadingScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bill of Lading Form Fields</Text>
      </View>

      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Shipment Date</Text>
        <TextInput style={styles.input} placeholder="Enter shipment date" />

        <Text style={styles.label}>Sender Details</Text>
        <TextInput style={styles.input} placeholder="Enter sender details" />

        <Text style={styles.label}>Receiver Details</Text>
        <TextInput style={styles.input} placeholder="Enter receiver details" />

        <Text style={styles.label}>Description of Goods</Text>
        <TextInput style={styles.input} placeholder="Enter description of goods" />

        <Text style={styles.label}>Quantity</Text>
        <TextInput style={styles.input} placeholder="Enter quantity" />

        <Text style={styles.label}>Weight</Text>
        <TextInput style={styles.input} placeholder="Enter weight" />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {
        navigation.navigate("ScreenAI21");
      }}>
          <Text style={styles.buttonText}>Edit Bill of Lading Template</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Delete Bill of Lading Template</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Use Bill of Lading Template</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  header: {
    alignItems: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  fieldContainer: {
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#007bff',
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
};
export default BillOfLadingScreen;