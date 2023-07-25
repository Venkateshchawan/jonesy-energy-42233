import React, { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, StyleSheet } from 'react-native';

const EmployeeScreen = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  const handleSearch = () => {// Perform search logic here
  };

  const handleAddEmployee = () => {// Perform add employee logic here
  };

  const handleSeeDetails = employeeId => {// Perform see details logic here
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Employee Management</Text>
        <Button title="Add Employee" onPress={handleAddEmployee} />
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search by keyword" value={searchKeyword} onChangeText={setSearchKeyword} />
        <Button title="Search" onPress={handleSearch} />
      </View>
      <View style={styles.employeeContainer}>
        {
        /* Display summarized overview of all employees */
      }
        {
        /* Replace with actual employee data */
      }
        <View style={styles.employeeCard}>
          <Text style={styles.employeeName}>John Doe</Text>
          <Text style={styles.employeePhone}>123-456-7890</Text>
          <Text style={styles.employeeEmail}>john.doe@example.com</Text>
          <Button title="See Details" onPress={() => handleSeeDetails(1)} />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginRight: 8
  },
  employeeContainer: {
    flex: 1
  },
  employeeCard: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16
  },
  employeeName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  employeePhone: {
    fontSize: 16,
    marginBottom: 8
  },
  employeeEmail: {
    fontSize: 16,
    marginBottom: 8
  }
});
export default EmployeeScreen;