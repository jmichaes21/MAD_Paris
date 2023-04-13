/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/button';
import Gap from '../../components/atoms/gap';

const Registration = () => {
  const [Name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignIn = () => {
    const data = {
      Name: Name,
      userName: userName,
      email: email,
      address: address,
      phone: phone,
    };

    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Registration</Text>
      <Gap height={30} />
      <TextInput
        label="Name"
        placeHolder="Masukan nama lengkap anda"
        value={Name}
        onChangeText={e => setName(e)}
      />
      <Gap height={40} />
      <TextInput
        label="Username"
        placeHolder="Masukan username anda"
        value={userName}
        onChangeText={e => setUsername(e)}
      />
      <Gap height={40} />
      <TextInput
        label="Email"
        placeHolder="Masukan email anda"
        value={email}
        onChangeText={e => setEmail(e)}
      />
      <Gap height={40} />
      <TextInput
        label="Address"
        placeHolder="Masukan Alamat anda"
        value={address}
        onChangeText={e => setAddress(e)}
      />
      <Gap height={40} />
      <TextInput
        label="Phone Number"
        placeHolder="Masukan Nomor Telepon anda"
        value={phone}
        onChangeText={e => setPhone(e)}
        keyboardType={'number-pad'}
      />
      <Gap height={40} />
      <Button label="Register" onPress={handleSignIn} />
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  welcome: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
});
