import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Portofolio from '../App';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import { WebView } from 'react-native-webview';
import Getpoint from '../Getpoint';

const Tab = createBottomTabNavigator();

const forminput = 'https://lungkad.github.io/Web-App/';

const petaweb = 'https://lungkad.github.io/Web-App/map.html';

function HomeScreen() {
  return (
    <View>
      <Text style={styles.title}>Aplikasi Peta Lokasi Objek</Text>
      <View style={styles.container}>
        <Text>Stack: </Text>
        <Text>1. React Native</Text>
        <Text>2. HTML</Text>
        <Text>3. CSS</Text>
        <Text>4. Javascript</Text>
        <Text>5. FontAwesome5</Text>
        <Text>6. App Script</Text>
        <Text>7. Google Sheets</Text>
      </View>
    </View>
  );
}
function MapScreen() {
  return (
      <WebView
        source={{ uri: petaweb}}
      />
  );
}
function AddScreen() {
  return (
      <WebView
        source={{ uri: forminput}}
      />
  );
}
function DataScreen() {
  return (
      <View>
        <Getpoint>

        </Getpoint>
      </View>
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
function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
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

export default MyTabs;
const styles = StyleSheet.create ({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
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
container:{
  marginTop: 20,
  marginHorizontal: 20,
  padding: 20,
}
});