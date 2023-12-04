import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Portofolio from '../App';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import {WebView} from 'react-native-webview';
import Getpoint from '../screen/Getpoint';

const Tab = createBottomTabNavigator();

const webmap = require('../peta/map.html');

const forminput = 'http://10.0.2.2:5500/index.html';

const petaweb = 'http://10.0.2.2:5500/map.html';

const homescreen = require('../login/home.html');

function HomeScreen() {
  return (
    <WebView
      source={homescreen}/>
  );
}
function MapScreen() {
  return <Text>Loginpage</Text>;
}
function AddScreen() {
  return <Text>Loginpage</Text>;
}
function DataScreen() {
  return <Text>Loginpage</Text>;
}
function ProfileScreen() {
  return (
    <View>
      <Portofolio></Portofolio>
    </View>
  );
}
function AppTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapScreen}
          options={{
            tabBarLabel: 'Map',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="map" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Add Data"
          component={AddScreen}
          options={{
            tabBarLabel: 'Add',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="plus" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Data Lokasi"
          component={DataScreen}
          options={{
            tabBarLabel: 'Data Lokasi',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="map-pin" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppTabs;
const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  image: {
    width: 400,
    height: 600,
    resizeMode: 'stretch',
  },
  listitems: {
    padding: 20,
    alignItems: 'center',
  },
  caption: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    padding: 20,
  },
});
