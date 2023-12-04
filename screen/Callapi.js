import React from 'react';
import {useState, useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Callapi = () => {
  const jsonUrl =
    'https://script.google.com/macros/s/AKfycbxg-IcRUTe75UjypopCkBXSrRBrgkCuww51BB21x2elQSiwD27YqT-jjtYgehrkxo7C/exec';
  const [isLoading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState({});
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    fetch(jsonUrl)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  function refreshPage() {
    fetch(jsonUrl)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setDataUser(json);
      })
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }

  return (
    <SafeAreaView>
      {isLoading ? (
        <View>
          <Text>Loading...</Text>
        </View>
      ) : (
        <FlatList
          data={dataUser}
          onRefresh={() => {
            refreshPage()
          }}
          refreshing={refresh}
          keyExtractor={({id}, index) => id}
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
      )}
    </SafeAreaView>
  );
};

export default Callapi;
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
   