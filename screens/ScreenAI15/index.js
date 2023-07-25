import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, Button, FlatList, TouchableOpacity } from "react-native";

const Screen = () => {
  const navigation = useNavigation();
  const [keyword, setKeyword] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [safetyForms, setSafetyForms] = useState([{
    id: 1,
    title: "Safety Form 1",
    category: "Category 1",
    employee: "John Doe",
    visibleToAdmin: true,
    submissionDate: "2022-01-01"
  }, {
    id: 2,
    title: "Safety Form 2",
    category: "Category 2",
    employee: "Jane Smith",
    visibleToAdmin: false,
    submissionDate: "2022-01-02"
  } // Add more safety forms here
  ]);

  const handleSearch = () => {// Implement search functionality here
  };

  const handleFilter = () => {// Implement filter functionality here
  };

  const renderSafetyForm = ({
    item
  }) => <TouchableOpacity style={styles.safetyFormContainer}>
      <Text style={styles.safetyFormTitle}>{item.title}</Text>
      <Text style={styles.safetyFormCategory}>{item.category}</Text>
      <Text style={styles.safetyFormEmployee}>{item.employee}</Text>
      <Text style={styles.safetyFormVisible}>
        {item.visibleToAdmin ? "Visible to Admin" : "Not Visible to Admin"}
      </Text>
      <Text style={styles.safetyFormDate}>{item.submissionDate}</Text>
      <Button title="View Details" onPress={() => handleViewDetails(item.id)} />
    </TouchableOpacity>;

  const handleViewDetails = () => {// Implement view details functionality here
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Search..." value={keyword} onChangeText={setKeyword} />
        <Button title="Search" onPress={handleSearch} />
      </View>
      <View style={styles.filterContainer}>
        {
        /* Implement filter options and date pickers here */
      }
        <TextInput style={styles.datePicker} placeholder="From" value={fromDate} onChangeText={setFromDate} />
        <TextInput style={styles.datePicker} placeholder="To" value={toDate} onChangeText={setToDate} />
        <Button title="Filter" onPress={handleFilter} />
      </View>
      <View style={styles.categoriesContainer}>
        {
        /* Implement categories here */
      }
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI14");
      }}><Text style={styles.category}>Category 1</Text></Pressable>
        <Text style={styles.category}>Category 2</Text>
        <Text style={styles.category}>Category 3</Text>
      </View>
      <View style={styles.resultsContainer}>
        <Text style={styles.resultsTitle}>Safety Forms</Text>
        <FlatList data={safetyForms} renderItem={renderSafetyForm} keyExtractor={item => item.id.toString()} />
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 8,
    marginRight: 8
  },
  filterContainer: {
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center"
  },
  datePicker: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 8,
    marginRight: 8
  },
  categoriesContainer: {
    marginBottom: 16
  },
  category: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8
  },
  resultsContainer: {
    flex: 1
  },
  resultsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8
  },
  safetyFormContainer: {
    marginBottom: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8
  },
  safetyFormTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8
  },
  safetyFormCategory: {
    fontSize: 14,
    marginBottom: 4
  },
  safetyFormEmployee: {
    fontSize: 14,
    marginBottom: 4
  },
  safetyFormVisible: {
    fontSize: 14,
    marginBottom: 4
  },
  safetyFormDate: {
    fontSize: 14,
    marginBottom: 4
  }
};
export default Screen;