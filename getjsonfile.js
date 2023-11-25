import React from 'react';
import mahasiswa from './data/mahasiswa.json';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const getjsonfile = () => {
  return (
    <FlatList
      data={mahasiswa}
      renderItem={({item}) => (
        <View style={styles.card}>
          <View style={styles.avatar}>
            <FontAwesome5 name={item.icon} size={50} color={item.color} />
          </View>
          <View style={styles.title}>
            <Text style={styles.cardtitle}>{item.nama}</Text>
            <Text>NIM: {item.nim}</Text>
            <Text>Kelas: {item.kelas}</Text>
            <Text>Gender: {item.jeniskelamin}</Text>
          </View>
        </View>
      )}
    />
  );
};

export default getjsonfile;

const styles = StyleSheet.create({
    title: {
      paddingVertical: 10,
      backgroundColor: '#ffffff',
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    avatar: {
      width: 80,
      paddingTop: 25,
    },
    cardtitle: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    card: {
      flexDirection: 'row',
      padding: 20,
      borderRadius: 10,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 0.20,
      shadowRadius: 1.41,
      elevation: 2,
      marginHorizontal: 20,
      marginVertical: 7
    },
   })
   