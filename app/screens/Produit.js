import React from "react";
import {
  FlatList,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import { PRODUITS } from "../constants";

function Produit(props) {
  return (
    <SafeAreaView>
      <FlatList
        data={PRODUITS}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={({ item }) => (
          <View
            style={{
              margin: 10,
            }}
          >
            <Text> {item.title} </Text>
            <Image
              resizeMode="contain"
              resizeMethod="resize"
              source={item.prodImage}
            />
            <Text> {item.prix} </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

export default Produit;
