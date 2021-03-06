import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image,Button, TouchableOpacity} from 'react-native';


const SecondPage = ({route, navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('ProduitImage')}>
        <Image
          resizeMode="contain"
          source={{ uri: route.params.paramProduits.prodImage }}
          style={styles.image}
        />
        </TouchableOpacity>

        <Text style={styles.title}> {route.params.paramProduits.title}</Text>
        <Text style={styles.fournisseur}> {route.params.paramProduits.fournisseur}</Text>
        <Text style={styles.description}> {route.params.paramProduits.description}</Text>
        
      <Button title="Trouver un distributeur"
  color="#841584"
  onPress={() => navigation.navigate('Distributeur')}></Button>
      </View> 

    </SafeAreaView>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  fournisseur: {
    color: "#6585B7",
    fontSize: 16,
    fontFamily: "HKGrotesk",
    fontWeight: "normal",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  title: {
    color: "#003588",
    fontSize: 16,
    fontFamily: "HKGrotesk",
    fontWeight: "bold",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  prix: {
    color: "#003588",
    fontSize: 28,
    fontFamily: "HKGrotesk",
    fontWeight: "bold",
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  container: {
    flex: 1,
    height: 2,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center', 
    marginBottom: 5,
    padding: 30,
    shadowOpacity: 10,
    shadowRadius: 3,
    shadowColor: "#000029",
  },
  image: {
   
    width: 200,
    height: 220 }
});