import React from 'react';
import { Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
const clients = [{
  id: 1,
  companyName: 'ABC Company',
  phoneNumber: '123-456-7890',
  email: 'abc@example.com'
}, {
  id: 2,
  companyName: 'XYZ Company',
  phoneNumber: '987-654-3210',
  email: 'xyz@example.com'
} // Add more client data here
];

const ClientScreen = () => {
  const renderClientItem = ({
    item
  }) => <TouchableOpacity style={styles.clientItemContainer}>
      <Text style={styles.companyName}>{item.companyName}</Text>
      <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </TouchableOpacity>;

  return <SafeAreaView style={styles.container}>
      <Text style={styles.title}>All Clients</Text>
      <FlatList data={clients} renderItem={renderClientItem} keyExtractor={item => item.id.toString()} />
      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add Client Information</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  clientItemContainer: {
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 5
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  phoneNumber: {
    fontSize: 16,
    marginBottom: 5
  },
  email: {
    fontSize: 16
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
};
export default ClientScreen;