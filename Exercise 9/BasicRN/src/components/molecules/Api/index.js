/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import axios from 'axios';
import Gap from '../../atoms/gap';

const DataList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View>
      <Gap height={30} />
      {users.map(user => (
        <View key={user.id} style={styles.container}>
          <Text style={styles.textStyle}>Name: {user.name}</Text>
          <Text style={styles.textStyle}>Username: {user.username}</Text>
          <Text style={styles.textStyle}>Email: {user.email}</Text>
          <Text style={styles.textStyle}>
            Address: {user.address.street}, {user.address.suite},{' '}
            {user.address.city}, {user.address.zipcode}, {user.address.city}
          </Text>
          <Text style={styles.textStyle}>Phone: {user.phone}</Text>
        </View>
      ))}
    </View>
  );
};

export default DataList;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 30,
    marginHorizontal: 10,
    padding: 20,
  },
  textStyle: {
    color: 'black',
    paddingLeft: 20,
  },
});
