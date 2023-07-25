import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';

const BillOfLadingScreen = () => {
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Bill of Lading Form</Text>
      </View>
      <View style={styles.content}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.description}>
          Based on the Bill of Lading form (selected template of the Bill of Lading form) the Admin user will be able to modify the content of the Bill of Lading form
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Document Preview and Save</Text>
        <Text style={styles.footerText}>
          The admin can preview the form to ensure all modifications are accurately reflected.
        </Text>
        <Text style={styles.footerText}>
          The admin can save any changes made to the Bill of Lading form
        </Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555'
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  footerText: {
    fontSize: 16,
    marginBottom: 10
  }
});
export default BillOfLadingScreen;