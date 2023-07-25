import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

const Screen = () => {
  const navigation = useNavigation();
  const dummyData = [{
    id: 1,
    title: 'Form 1',
    category: 'Category 1',
    date: '2022-01-01'
  }, {
    id: 2,
    title: 'Form 2',
    category: 'Category 1',
    date: '2022-01-02'
  }, {
    id: 3,
    title: 'Form 3',
    category: 'Category 2',
    date: '2022-01-03'
  }];

  const renderSafetyForm = form => {
    return <TouchableOpacity key={form.id} style={styles.formContainer}>
        <Text style={styles.formTitle}>{form.title}</Text>
        <Text style={styles.formCategory}>{form.category}</Text>
        <Text style={styles.formDate}>{form.date}</Text>
        <TouchableOpacity style={styles.viewDetailsButton} onPress={() => {
        navigation.navigate("ScreenAI12");
      }}>
          <Text style={styles.viewDetailsButtonText}>View Details</Text>
        </TouchableOpacity>
      </TouchableOpacity>;
  };

  return <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.newFormButton} onPress={() => {
      navigation.navigate("ScreenAI11");
    }}>
        <Text style={styles.newFormButtonText}>Create a New Safety Form</Text>
      </TouchableOpacity>
      <View style={styles.formCategoriesContainer}>
        <Text style={styles.formCategoriesTitle}>Form Categories</Text>
        {
        /* Render form categories */
      }
      </View>
      <View style={styles.safetyFormsContainer}>
        <Text style={styles.safetyFormsTitle}>Safety Forms</Text>
        {dummyData.map(form => renderSafetyForm(form))}
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16
  },
  newFormButton: {
    backgroundColor: '#42A5F5',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 16
  },
  newFormButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  formCategoriesContainer: {
    marginBottom: 16
  },
  formCategoriesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  safetyFormsContainer: {
    flex: 1
  },
  safetyFormsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  formContainer: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16
  },
  formTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  formCategory: {
    fontSize: 14,
    marginBottom: 4
  },
  formDate: {
    fontSize: 14,
    marginBottom: 8
  },
  viewDetailsButton: {
    backgroundColor: '#42A5F5',
    paddingVertical: 8,
    borderRadius: 4
  },
  viewDetailsButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  }
};
export default Screen;