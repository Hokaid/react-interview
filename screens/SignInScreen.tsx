import React, { useState, useEffect } from 'react';
import { View, Pressable, Text, TextInput, StyleSheet, Alert} from 'react-native';
import { useDispatch } from 'react-redux';
import { Login } from '../store/actions';

export default function SignInScreen({navigation}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    //Function to validate if a string have the email format
    const validateEmail = (email: string) => {
      return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    };

    const dispatch = useDispatch();
    const SignIn = () => {
      if (validateEmail(username) && password != '') {
        dispatch(Login(username, password));
        navigation.navigate('Dashboard');
      } else {
        Alert.alert('Error', 'Enter a valid username and password');
      }
    }

    return (
      <View style={styles.center}>
        <TextInput
          style={styles.formInput}
          onChangeText={setUsername}
          value={username}
          placeholder="Enter your email"
        />
        <TextInput
          style={styles.formInput}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter your password"
          secureTextEntry={true}
        />
        <Pressable style={styles.signInButton} onPress={() => SignIn()}>
          <Text style={styles.signInText}>Sign In</Text>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center', 
    justifyContent: 'center',
    paddingTop: 180
  },
  formInput: {
    borderWidth: 1,
    width: 200,
    height: 48,
    borderColor: 'black',
    borderRadius: 8,
    backgroundColor: 'white',
    marginVertical: 10,
    textAlign: 'center'
  },
  signInButton: {
    borderWidth: 1,
    width: 100,
    height: 48,
    borderColor: 'black',
    borderRadius: 8,
    paddingTop: 12,
    backgroundColor: 'white',
    marginTop: 8
  },
  signInText: {
    textAlign: 'center'
  }
});

export const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ) ? true : false;
};

export const SignIn = (username: string, password: string) => {
  if (validateEmail(username) && password != '') {
    return true;
  } else {
    return false;
  }
}