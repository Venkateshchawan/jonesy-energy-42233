import React from 'react';
import { Text, TextInput, Button, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

const Screen = () => {
  const [taskTitle, setTaskTitle] = React.useState('');
  const [taskDescription, setTaskDescription] = React.useState('');
  const [employees, setEmployees] = React.useState([]);

  const addEmployee = () => {// Add logic to add employee to the employees array
  };

  const renderEmployee = ({
    item
  }) => <TouchableOpacity>
      <Text>{item.fullName}</Text>
    </TouchableOpacity>;

  const addTask = () => {// Add logic to add task
  };

  const cancel = () => {// Add logic to cancel
  };

  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder="Task Title" value={taskTitle} onChangeText={setTaskTitle} />
      <TextInput style={styles.input} placeholder="Task Description" value={taskDescription} onChangeText={setTaskDescription} />
      <Button title="Add Employee" onPress={addEmployee} />
      <FlatList data={employees} renderItem={renderEmployee} keyExtractor={item => item.id.toString()} />
      <Button title="Add Task" onPress={addTask} />
      <Button title="Cancel" onPress={cancel} />
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 16,
    paddingHorizontal: 8
  }
};
export default Screen;