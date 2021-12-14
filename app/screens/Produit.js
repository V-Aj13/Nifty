import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

import { PRODUITS } from "../constants";

const Item = ({ title, prodImage, prix }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Image
      resizeMode="contain"
      resizeMethod="resize"
      source={{ prodImage }}
      style={styles.logo}
    />
    <Text>{prix}</Text>
  </View>
);

export default function Produit(props) {
  const renderItem = ({ item }) => (
    <Item title={item.title} prodImage={item.prodImage} prix={item.prix} />
  );
  return (
    <View>
      <FlatList
        data={PRODUITS}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
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
