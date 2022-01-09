import { PRODUITS } from "../constants";
import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from 'react-native';

const FirstPage = ({navigation}) => {
  const [userName, setUserName] = useState('AboutReact');

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList 
            data={PRODUITS}
            renderItem={({item})=>(
            <TouchableOpacity onPress={() => navigation.navigate('Information', { paramProduits: item})}>
                <View style={styles.container}>
                  <Image
                    resizeMode="contain"
                    source={{ uri: item.prodImage }}
                    style={{
                      width: 50,
                      height: 75
                     }}
                  />
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.fournisseur}>{item.fournisseur}</Text>
                  <Text style={styles.prix}>{item.prix}</Text>
                </View>
            </TouchableOpacity>
            )}
            numColumns={2}
        />

    </SafeAreaView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  fournisseur: {
    color: "#6585B7",
    fontSize: 16,
    fontFamily: "HKGrotesk",
    fontWeight: "normal",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  title: {
    color: "#003588",
    fontSize: 16,
    fontFamily: "HKGrotesk",
    fontWeight: "bold",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  prix: {
    color: "#003588",
    fontSize: 28,
    fontFamily: "HKGrotesk",
    fontWeight: "bold",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 1,
    height: 250,
    width: 160,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 2,
    borderRadius: 16,
    marginTop: 17,
    marginLeft: 15,
    padding: 30,
    shadowOpacity: 10,
    shadowRadius: 3,
    shadowColor: "#000029",
  }
});