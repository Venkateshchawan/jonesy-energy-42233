import { useNavigation } from "@react-navigation/native";
import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';

const Screen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.calendarContainer}>
        <Text style={styles.calendarTitle}>Calendar</Text>
        <View style={styles.calendar}>
          <Text style={styles.calendarText}>Year</Text>
          <Text style={styles.calendarText}>Month</Text>
          <Text style={styles.calendarText}>Day</Text>
          <TouchableOpacity style={styles.addTaskButton} onPress={() => {
          navigation.navigate("ScreenAI7");
        }}>
            <Text style={styles.addTaskButtonText}>Add Task</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.taskContainer}>
          <Text style={styles.taskTitle}>Task</Text>
          <View style={styles.task}>
            <Text style={styles.taskName}>Task Name</Text>
            <Text style={styles.taskDescription}>Task Description</Text>
            <TouchableOpacity style={styles.detailsButton}>
              <Text style={styles.detailsButtonText}>See Details</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.taskSectionContainer}>
        <TouchableOpacity style={styles.seeTasksButton}>
          <Text style={styles.seeTasksButtonText}>See Tasks</Text>
        </TouchableOpacity>
        <View style={styles.taskContainer}>
          <Text style={styles.taskTitle}>Task</Text>
          <View style={styles.task}>
            <Text style={styles.taskName}>Task Name</Text>
            <Text style={styles.taskDescription}>Task Description</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20
  },
  calendarContainer: {
    marginTop: 20
  },
  calendarTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  calendar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20
  },
  calendarText: {
    fontSize: 18
  },
  addTaskButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5
  },
  addTaskButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  taskContainer: {
    marginBottom: 20
  },
  taskTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },
  task: {
    backgroundColor: '#F2F2F2',
    padding: 10,
    borderRadius: 5
  },
  taskName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5
  },
  taskDescription: {
    fontSize: 16
  },
  detailsButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: 10
  },
  detailsButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  },
  taskSectionContainer: {
    marginTop: 20
  },
  seeTasksButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10
  },
  seeTasksButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
};
export default Screen;