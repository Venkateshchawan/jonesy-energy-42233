import React from 'react';
import { SafeAreaView, View, FlatList, Text, Image, StyleSheet } from 'react-native';

const NotificationListScreen = () => {
  const notifications = [{
    id: 1,
    title: 'New Message',
    message: 'You have a new message from John Doe',
    time: '10:30 AM',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: 2,
    title: 'New Friend Request',
    message: 'You have a new friend request from Jane Smith',
    time: 'Yesterday',
    image: 'https://tinyurl.com/42evm3m3'
  }, {
    id: 3,
    title: 'New Event Reminder',
    message: 'You have an upcoming event tomorrow',
    time: '2 days ago',
    image: 'https://tinyurl.com/42evm3m3'
  }];

  const renderNotificationItem = ({
    item
  }) => <View style={styles.notificationItem}>
      <Image source={{
      uri: item.image
    }} style={styles.notificationImage} />
      <View style={styles.notificationContent}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        <Text style={styles.notificationMessage}>{item.message}</Text>
        <Text style={styles.notificationTime}>{item.time}</Text>
      </View>
    </View>;

  return <SafeAreaView style={styles.container}>
      <FlatList data={notifications} renderItem={renderNotificationItem} keyExtractor={item => item.id.toString()} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  notificationImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 16
  },
  notificationContent: {
    flex: 1
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  notificationMessage: {
    fontSize: 14,
    marginBottom: 4
  },
  notificationTime: {
    fontSize: 12,
    color: '#888'
  }
});
export default NotificationListScreen;