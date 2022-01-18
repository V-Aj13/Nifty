import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image,Button} from 'react-native';
 
const ThirdPage = ({route, navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>T'es grave pas bo</Text>
        <Button title="go back"
  color="#841584"
  onPress={() => navigation.goBack()}></Button>
      </View> 

    </SafeAreaView>
  );
};

export default ThirdPage;

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
      height: 220 },
      description: {
        color: "#003588",
        fontSize: 16,
        fontFamily: "HKGrotesk",
        fontWeight: "bold",
        alignItems: "flex-start",
        justifyContent: "flex-start",
      }

  });