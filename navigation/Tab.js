import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Distributeur from "../screens/Distributeur";
import Produit from "../screens/Produit";

export function bottomTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Près de vous" // nom du screen
        component={Distributeur} // utiliser le screen de la fonction Distributeur
        options={{
          //à l'interieur de 'options' on peut customiser
          tabBarLabel: "Distributeur", // label en bas de l'icon
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons //icon du screen
              name="map-marker-outline"
              size={26} // taille de l'icon
              style={{
                color: focused ? "#9666a8" : "#0b3f8b", // si l'icon est active  "#9666a8" sinon "#0b3f8b"
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Nos Produits"
        component={Produit}
        options={{
          tabBarLabel: "Produits",
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="shopping-outline"
              size={26}
              style={{
                color: focused ? "#9666a8" : "#0b3f8b",
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
