import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Portofolio from '../App';
import {Image, Text, View, ScrollView, StyleSheet} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import { WebView } from 'react-native-webview';
import GetJsonFile from '../getjsonfile'

const Tab = createBottomTabNavigator();
const webmap = require('../login/login.html');

function Loginpage() {
  return (
    <WebView
    source={webmap}
  />
  );
}


export default Loginpage;
const styles = StyleSheet.create ({
  image: {
    width:400,
    height:600,
    resizeMode: 'stretch'
  },
  listitems: {
    padding: 20,
    alignItems: 'center',
  },
  caption: {
    fontSize: 14,
    fontWeight: 'bold',
},
});