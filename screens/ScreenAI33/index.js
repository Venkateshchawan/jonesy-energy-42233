import React from 'react';
import { TextInput, Button, SafeAreaView } from 'react-native';

const Screen = () => {
  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} placeholder="Account name" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <Button title="Submit" onPress={() => console.log('Submit button pressed')} />
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10
  }
};
export default Screen;