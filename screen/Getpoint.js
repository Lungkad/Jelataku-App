import React from 'react';
import {useState, useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Getpoint = () => {
  const jsonUrl =
    'https://script.google.com/macros/s/AKfycbzccYbGkOSfdI-51878MA_jYPYhB3DJm080j1nbjjJyogRnRf00Ml9giQ7atIrXjYmh/exec';
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
            refreshPage();
          }}
          refreshing={refresh}
          keyExtractor={({id}, index) => id}
          renderItem={({item}) => (
            <View>
              <TouchableOpacity onPress={() =>
                    {Linking.openURL(`google.navigation:q=${item.latitude}, ${item.longitude}`);}
                  }>
                <View style={styles.card}>
                  <View style={styles.title}>
                    <Text style={styles.cardtitle}>{item.nama}</Text>
                    <Text>{item.deskripsi}</Text>
                    <Text>
                      {item.latitude}, {item.longitude}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                    }}>
                    <FontAwesome5 name={'chevron-right'} size={20} />
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Getpoint;
const styles = StyleSheet.create({
  title: {
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
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
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 20,
    marginVertical: 7,
  },
  form: {
    paddingHorizontal: 20,
    paddingBottom: 10,
  },
});
