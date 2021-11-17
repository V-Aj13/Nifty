//Bar en bas de l'application
import * as React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import DistributeurScreen from "./DistributeurScreen";
import ProduitScreen from "./ProduitScreen";

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
            <Image source={require("../icones/Icone Map.svg")} />
          ),
        }}
      />
      <Tab.Screen
        name="Produits"
        component={ProduitScreen}
        options={{
          tabBarLabel: "Produits",
          tabBarIcon: ({ color }) => (
            <Image source={require("../icones/Icone boutique.svg")} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MesOnglets;
