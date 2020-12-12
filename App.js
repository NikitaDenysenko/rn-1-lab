import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';

import * as firebase from 'firebase';

import { NavigationContainer } from '@react-navigation/native'; //main file for nav
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import LoginScreen from './components/auth/Login';
import HomeScreen from './components/auth/HomeScreen';

const firebaseConfig = {
    apiKey: 'AIzaSyC1QXOGUs4Gj0KSkiHGykzVgBsaVUEEABU',
    authDomain: 'rn-first-lab-ae32a.firebaseapp.com',
    databaseURL: 'https://rn-first-lab-ae32a.firebaseio.com',
    projectId: 'rn-first-lab-ae32a',
    storageBucket: 'rn-first-lab-ae32a.appspot.com',
    messagingSenderId: '707763683500',
    appId: '1:707763683500:web:17a87cbce93da3f337df09',
};

if (firebase.apps.length === 0) {
    // if we are not running any firebase instant
    firebase.initializeApp(firebaseConfig); //firebase initialize
}

const Stack = createStackNavigator(); //screens,routes

class App extends Component {
    state = {
        loaded: false,
    };

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Landing'>
                    <Stack.Screen
                        name='Landing'
                        component={LandingScreen}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name='Register' component={RegisterScreen} />
                    <Stack.Screen name='Login' component={LoginScreen} />
                    <Stack.Screen name='Home' component={HomeScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default App;