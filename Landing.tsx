import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login/Login';
import { User, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import {Firebase_Auth} from './FirebaseConfig';
import { StyleSheet, Text, View } from 'react-native';

import Countnumber from './screen/Countnumber';

const Stack = createNativeStackNavigator();

const InsideStack = createNativeStackNavigator();

function InsideLayout() {
    return (
        <InsideStack.Navigator>
            <InsideStack.Screen name="Countnumber" component={Countnumber} options={{headerShown: true}} />
        </InsideStack.Navigator>
    )
}

export default function Landing() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        onAuthStateChanged(Firebase_Auth, (user) => {
            console.log('user', user);
            setUser(user);
        })
    }, [])
    
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                 (user ? {
                    <Stack.Screen name="Home" component={InsideLayout} options={{headerShown: true}} />
                } : {
                    <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
                
                }) 
            </Stack.Navigator>
        </NavigationContainer>
    )
}