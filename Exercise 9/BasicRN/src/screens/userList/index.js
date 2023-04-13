/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const UserList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>User List</Text>
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
});
