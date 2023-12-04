import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, ActivityIndicator, Alert, KeyboardAvoidingView} from 'react-native';
import {Firebase_Auth} from '../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = Firebase_Auth;

  const signIn = async () => {
    setLoading(true);
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        console.log(response);
    } catch (error) {
        console.log(error);
        alert('Login failed: ' + error.message);
    } finally {
        setLoading(false);
    }
  }

  const signUp = async () => {
    setLoading(true);
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password);
        console.log(response);
    } catch (error) {
        console.log(error);
        alert('Registration failed: ' + error.message);
    } finally {
        setLoading(false);
    }
  }
  return (
    <KeyboardAvoidingView behavior='10'>
    <View style={styles.container}>
      <TextInput value={email} style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={(text) => setEmail(text)}></TextInput>
      <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder="Password" autoCapitalize="none" onChangeText={(text) => setPassword(text)}></TextInput>

        {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
        ) : (
            <>
            <Button title='Login' onPress={signIn} />
            <Button title='Register' onPress={signUp} />
            </>
        )}
    </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff',
  },
});
