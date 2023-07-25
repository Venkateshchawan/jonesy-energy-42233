import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, SafeAreaView, StyleSheet } from 'react-native';

const SubAdminScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [subAdmins, setSubAdmins] = useState([{
    id: 1,
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    password: '********',
    role: 'Admin'
  }, {
    id: 2,
    fullName: 'Jane Smith',
    email: 'janesmith@example.com',
    password: '********',
    role: 'Sub-Admin'
  }, {
    id: 3,
    fullName: 'Mike Johnson',
    email: 'mikejohnson@example.com',
    password: '********',
    role: 'Sub-Admin'
  }]);

  const handleSearch = text => {
    setSearchText(text);
  };

  const handleSaveChanges = id => {// Save changes logic
  };

  const handleRemoveUser = id => {// Remove user logic
  };

  const renderSubAdminItem = ({
    item
  }) => <View style={styles.subAdminItemContainer}>
      <Text style={styles.fullName}>{item.fullName}</Text>
      <Text style={styles.email}>{item.email}</Text>
      <Text style={styles.password}>{item.password}</Text>
      <Text style={styles.role}>{item.role}</Text>
      <TouchableOpacity style={styles.saveButton} onPress={() => handleSaveChanges(item.id)}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.removeButton} onPress={() => handleRemoveUser(item.id)}>
        <Text style={styles.buttonText}>Remove User</Text>
      </TouchableOpacity>
    </View>;

  const filteredSubAdmins = subAdmins.filter(subAdmin => subAdmin.fullName.toLowerCase().includes(searchText.toLowerCase()));
  return <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search" value={searchText} onChangeText={handleSearch} />
      </View>
      <FlatList data={filteredSubAdmins} keyExtractor={item => item.id.toString()} renderItem={renderSubAdminItem} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16
  },
  searchContainer: {
    marginTop: 16,
    marginBottom: 8
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12
  },
  subAdminItemContainer: {
    marginBottom: 16
  },
  fullName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4
  },
  email: {
    fontSize: 16,
    marginBottom: 4
  },
  password: {
    fontSize: 16,
    marginBottom: 4
  },
  role: {
    fontSize: 16,
    marginBottom: 8
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 4
  },
  removeButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default SubAdminScreen;