import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Portofolio from '../App';
import {Text, View, ScrollView, StyleSheet} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Getdata from '../Getdata';
import Editdata from '../Editdata';
import Tambahdata from '../Createdata';

const Tab = createBottomTabNavigator();
const webmap = require('../peta/map.html');

function DataMahasiswa() {
  return (
    <View>
<Getdata>

</Getdata>
    </View>
  );
}
function TambahData() {
  return (
      <Tambahdata></Tambahdata>
  );
}
function EditData() {
  return (
    <View>
      <Editdata></Editdata>
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
      <Tab.Navigator>
        <Tab.Screen
          name="Data Mahasiswa"
          component={DataMahasiswa}
          options={{
            tabBarLabel: 'Data',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="users" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Tambah Data"
          component={TambahData}
          options={{
            tabBarLabel: 'Tambah',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="user-plus" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Edit Data"
          component={EditData}
          options={{
            tabBarLabel: 'Edit',
            tabBarIcon: ({color, size}) => (
              <Fontawesome5 name="pen" color={color} size={size} />
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