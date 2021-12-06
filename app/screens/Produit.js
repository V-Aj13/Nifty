import React from "react";
import { ScrollView, Image, StyleSheet } from "react-native";
import { images } from "../constants";

function Produit(props) {
  return (
    //remplacer avec FlatList
    <ScrollView style={styles.produitContainer}>
      <Image
        resizeMode="contain"
        resizeMethod="resize"
        styles={styles.alwaysMaxi}
        source={images.alwaysMaxi}
      />
      <Image
        resizeMode="contain"
        resizeMethod="resize"
        styles={styles.chewingGum}
        source={images.chewingGum}
      />
      <Image
        resizeMode="contain"
        resizeMethod="resize"
        styles={styles.Labello}
        source={images.Labello}
      />
      <Image
        resizeMode="contain"
        resizeMethod="resize"
        styles={styles.lingettesEvoluderm}
        source={images.lingettesEvoluderm}
      />
      <Image
        resizeMode="contain"
        resizeMethod="resize"
        styles={styles.matinBlanc}
        source={images.matinBlanc}
      />
      <Image
        resizeMode="contain"
        resizeMethod="resize"
        styles={styles.niveaAntiRespirant}
        source={images.niveaAntiRespirant}
      />
      <Image
        resizeMode="contain"
        resizeMethod="resize"
        styles={styles.niveaLotion}
        source={images.niveaLotion}
      />
    </ScrollView>
  );
}

export default Produit;

//Trouver une methode comment appliquer CSS avec FlatList
const styles = StyleSheet.create({
  produitContainer: {
    position: "absolute",
  },
  alwaysMaxi: {},
  chewingGum: {},
  Labello: {},
  lingettesEvoluderm: {},
  matinBlanc: {},
  niveaAntiRespirant: {},
  niveaLotion: {
    position: "absolute",
  },
});
