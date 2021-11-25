import React from 'react';
import { NavigationContainer } from "@react-navigation/native";

import { createDrawerNavigator } from "@react-navigation/drawer";

import MesOnglets from "./app/screens/MesOnglets";
import InformationScreen from "./app/screens/InformationScreen";
import ParametreScreen from "./app/screens/ParametreScreen";
import aProposScreen from "./app/screens/aProposScreen";
import MentionLegaleScreen from "./app/screens/MentionLegaleScreen";
import ObetnirAideScreen from "./app/screens/ObtenirAideScreen";

const Drawer = createDrawerNavigator();

//Bar
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Acceuil">
        <Drawer.Screen name="Accueil" component={MesOnglets} />
        <Drawer.Screen name="Informations" component={InformationScreen} />
        <Drawer.Screen name="Paramètres" component={ParametreScreen} />
        <Drawer.Screen name="À Propos" component={aProposScreen} />
        <Drawer.Screen name="Mention Légales" component={MentionLegaleScreen} />
        <Drawer.Screen
          name="Obetenir de l'Aide"
          component={ObetnirAideScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
