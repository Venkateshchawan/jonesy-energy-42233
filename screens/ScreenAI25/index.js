import React, { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView } from 'react-native';

const Screen = () => {
  const [jobNumber, setJobNumber] = useState('');
  const [invoiceDetails, setInvoiceDetails] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [isDraft, setIsDraft] = useState(false);

  const handleSaveDraft = () => {
    setIsDraft(true); // Save draft logic here
  };

  const handleSend = () => {// Send invoice logic here
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Upload Client Information</Text>
        <Button title="List of Clients" onPress={() => {}} />
      </View>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Job Number" value={jobNumber} onChangeText={setJobNumber} />
        <TextInput style={styles.input} placeholder="Essential Details" value={invoiceDetails} onChangeText={setInvoiceDetails} />
        <TextInput style={styles.input} placeholder="Total Amount" value={totalAmount} onChangeText={setTotalAmount} />
        <Button title="Save as Draft" onPress={handleSaveDraft} />
        <Button title="Send" onPress={handleSend} />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  form: {
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10
  }
};
export default Screen;