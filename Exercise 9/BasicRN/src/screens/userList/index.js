/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import DataList from '../../components/molecules/Api';
import Gap from '../../components/atoms/gap';

const UserList = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Users List</Text>
      <View>
        <DataList />
        <Gap height={30} />
      </View>
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  welcome: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingTop: 15,
  },
});
