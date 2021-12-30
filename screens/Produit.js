import React from "react";
import { 
  FlatList, 
  View, 
  Text, 
  StyleSheet, 
  Image } from "react-native";

import { PRODUITS } from "../data/listProduit";

const Item = ({ title, prodImage, prix }) => (
  <View style={styles.container}>
     <Image
      resizeMode="contain"
      source={{ uri: prodImage }}
      style={{
        width: 200,
        height: 200
      }}
    />
    <Text style={styles.title}>{title}</Text>
   
    <Text>{prix}</Text>
  </View>
);

export default function Produit(props) {
  const renderItem = ({ item }) => (
    <Item title={item.title} prodImage={item.prodImage} prix={item.prix} />
  );
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={PRODUITS}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{
          flexGrow:1,
        }}
      />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 66,
    height: 58,
  },
});

/*
import { PRODUITS } from '../data/listProduit';
import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
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
            <TouchableOpacity onPress={() => navigation.navigate('produitInfo', { paramProduits: item})}>
                <View style={styles.container}>
                  <Image
                    resizeMode="contain"
                    source={{ uri: item.prodImage }}
                    style={{
                      width: 200,
                      height: 200
                     }}
                  />
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.fournisseur}>{item.fournisseur}</Text>
                  <Text>{item.prix}</Text>
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
    fontWeight: "medium",
    alignItems: "left",
    justifyContent: "left",
  },
  title: {
    color: "#003588",
    fontSize: 16,
    fontFamily: "HKGrotesk",
    fontWeight: "bold",
    alignItems: "left",
    justifyContent: "left",
  },
  prix: {
    color: "#003588",
    fontSize: 28,
    fontFamily: "HKGrotesk",
    fontWeight: "bold",
    alignItems: "left",
    justifyContent: "left",
  },
  container: {
    flexDirection: 'center',
    justifyContent: 'space-between',
    flex: 1,
    height: 250,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 2,
    borderRadius: 16,
    marginBottom: 35,
    padding: 30,
    shadowOpacity: 10,
    shadowRadius: 3,
    shadowColor: "#000029",
  }
});
*/