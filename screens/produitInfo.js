// SecondScreen.js
/*import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const SecondScreen = props => {
return (
   <View style={styles.container}>
    <Button color='black' 
            title='Show Modal on Main Screen' 
            onPress={ () => props.navigation.navigate('Produit')} />
    
   </View>
  );
};






const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'gray',
      alignItems: 'center', justifyContent: 'center' 
  }
});
export default SecondScreen;
*/

// React Native Pass Value From One Screen to Another Using React Navigation
// https://aboutreact.com/react-native-pass-value-from-one-screen-to-another-using-react-navigation/

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image,Button} from 'react-native';
 
const SecondPage = ({route}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image
          resizeMode="contain"
          source={{ uri: route.params.paramProduits.prodImage }}
          style={styles.image}
        />
        <Text
          style={styles.title}>
          {route.params.paramProduits.title}
        </Text>
        <Text style={styles.fournisseur}> {route.params.paramProduits.fournisseur}</Text>
      <Button title="Learn More"
  color="#841584"></Button>
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
    alignItems: "left",
    justifyContent: "flex-end",
  },
  title: {
    color: "#003588",
    fontSize: 16,
    fontFamily: "HKGrotesk",
    fontWeight: "bold",
    alignItems: "left",
    justifyContent: "flex-end",
  },
  prix: {
    color: "#003588",
    fontSize: 28,
    fontFamily: "HKGrotesk",
    fontWeight: "bold",
    alignItems: "left",
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