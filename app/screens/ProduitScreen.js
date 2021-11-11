import React from "react";
import { ScrollView, Image, StyleSheet } from "react-native";

fazefefe
function ProduitScreen(props) {
  return (
    //remplacer avec FlatList
    <ScrollView style={styles.produitContainer}>
       <Image
        resizeMode="contain"
        resizeMethod="resize"
        styles={styles.alwaysMaxi}
        source={require("../images/alwaysMaxi.png")}
      />
       <Image
        resizeMode="contain"
        resizeMethod="resize"
        styles={styles.chewingGum}
        source={require("../images/chewingGum.png")}
      />
       <Image
        resizeMode="contain"
        resizeMethod="resize"
        styles={styles.Labello}
        source={require("../images/Labello.png")}
      />
       <Image
        resizeMode="contain"
        resizeMethod="resize"
        styles={styles.lingettesEvoluderm}
        source={require("../images/lingettesEvoluderm.png")}
      />
       <Image
        resizeMode="contain"
        resizeMethod="resize"
        styles={styles.matinBlanc}
        source={require("../images/matinBlanc.png")}
      />
       <Image
        resizeMode="contain"
        resizeMethod="resize"
        styles={styles.niveaAntiRespirant}
        source={require("../images/niveaAntiRespirant.png")}
      />
      <Image
        resizeMode="contain"
        resizeMethod="resize"
        styles={styles.niveaLotion}
        source={require("../images/niveaLotion.png")}
      />
    </ScrollView>
  );
}

export default ProduitScreen;

//Trouver une methode comment appliquer CSS avec FlatList 
const styles = StyleSheet.create({
  produitContainer: {
    position: "absolute",
  },
  alwaysMaxi: {

  },
  chewingGum: {

  },
  Labello: {

  },
  lingettesEvoluderm: {

  },
  matinBlanc: {

  },
  niveaAntiRespirant: {

  }, 
  niveaLotion: {
    position: "absolute",
    
  },
});
