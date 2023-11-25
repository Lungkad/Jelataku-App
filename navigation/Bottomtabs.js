import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Portofolio from '../App';
import {Image, Text, View, ScrollView, StyleSheet} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import { WebView } from 'react-native-webview';
import GetJsonFile from '../getjsonfile'

const Tab = createBottomTabNavigator();
const webmap = require('../peta/map.html');

function HomeScreen() {
  return (
    <ScrollView>
      <View>
      <Image 
      source={require('../img/peta/peta2.png')}
      style={{ 
            width: '100%',
            height: 550,
            resizeMode: 'stretch',
            }} />
      <Text>Peta Penggunaan Lahan Pacitan</Text>
      </View>
      <View>
      <Image 
      source={require('../img/peta/peta2.png')}
      style={{ 
            width: '100%',
            height: 550,
            resizeMode: 'stretch',
            }} />
      <Text>Peta Penggunaan Lahan Pacitan</Text>
      </View>
      <View>
      <Image 
      source={require('../img/peta/peta2.png')}
      style={{ 
            width: '100%',
            height: 550,
            resizeMode: 'stretch',
            }} />
      <Text>Peta Penggunaan Lahan Pacitan</Text>
      </View>
    </ScrollView>
    
  );
}
function MapScreen() {
  return (
      <WebView
        source={webmap}
      />
  );
}
function ProfileScreen() {
  return (
    <View>
      <Portofolio>
        
      </Portofolio>
    </View> 
  );
}
function MahasiwaScreen() {
  return (
    <View>
      <GetJsonFile>
        
      </GetJsonFile>
    </View> 
  );
}
function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
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
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="user" color={color} size={size} />
            ),
          }}
        />
         <Tab.Screen
          name="Data Mahasiswa"
          component={MahasiwaScreen}
          options={{
            tabBarLabel: 'Data',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="users" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
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