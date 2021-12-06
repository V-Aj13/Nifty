import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Tabs from "./tabs";
import Distributeur from "../screens/Distributeur";
import Produit from "../screens/Produit";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Accueil"}
    >
      <Stack.Screen name="Accueil" component={Tabs} />
      <Stack.Screen name="Distributeur" component={Distributeur} />
      <Stack.Screen name="Product" component={Produit} />
    </Stack.Navigator>
  );
};

export { MainStackNavigator };
