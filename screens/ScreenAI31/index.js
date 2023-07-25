import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList } from 'react-native';

const LogbookScreen = () => {
  const logbookData = [{
    id: 1,
    entryNumber: 'Entry #1',
    startDate: '2022-01-01',
    endDate: '2022-01-02'
  }, {
    id: 2,
    entryNumber: 'Entry #2',
    startDate: '2022-01-03',
    endDate: '2022-01-04'
  }, {
    id: 3,
    entryNumber: 'Entry #3',
    startDate: '2022-01-05',
    endDate: '2022-01-06'
  }];

  const renderLogbookItem = ({
    item
  }) => <View style={styles.logbookItemContainer}>
      <Text style={styles.logbookItemText}>{item.entryNumber}</Text>
      <Text style={styles.logbookItemText}>
        {item.startDate} - {item.endDate}
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>View Document Details</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>;

  return <SafeAreaView style={styles.container}>
      <View style={styles.section1}>
        {
        /* Search and Filter options */
      }
      </View>
      <View style={styles.section2}>
        <FlatList data={logbookData} renderItem={renderLogbookItem} keyExtractor={item => item.id.toString()} />
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16
  },
  section1: {
    marginBottom: 16 // Add styles for Search and Filter options

  },
  section2: {
    flex: 1
  },
  logbookItemContainer: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 8
  },
  logbookItemText: {
    fontSize: 16,
    marginBottom: 8
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 8
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center'
  }
};
export default LogbookScreen;