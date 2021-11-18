//Bar en bas de l'application
import * as React from "react";
import { Image } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import DistributeurScreen from "./DistributeurScreen";
import ProduitScreen from "./ProduitScreen";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialBottomTabNavigator();

function MesOnglets() {
  return (
    <Tab.Navigator initialRouteName="Feed" activeColor="#9666a8">
      <Tab.Screen
        name="Distributeurs"
        component={DistributeurScreen}
        options={{
          tabBarLabel: "Distributeurs",
          tabBarColor: "#fff",
          tabBarIcon: ({ color }) => (
            <Image
              source={require("../icones/Icone Map.svg")}
              style={{ width: 26, height: 26, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Produits"
        component={ProduitScreen}
        options={{
          tabBarLabel: "Produits",
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../icones/Icone boutique.svg")}
              style={{ width: 26, height: 26, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MesOnglets;
