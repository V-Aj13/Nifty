import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { StackNav } from './Stack';
import Information from '../screens/Information';
import Parametre from '../screens/Parametre';
import aPropos from '../screens/aPropos';
import MentionLegale from '../screens/MentionLegale';
import ObtenirAide from '../screens/ObtenirAide';
import Distributeur from '../screens/Distributeur';
import ProduitImage from '../screens/ProduitImage';



export default function DrawerNav(){
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator 
        initialRouteName='Accueil'
        screenOptions={{
            headerShown: false,
        }}
        drawerType="slide" //slider au lieu d'un menu burger
        >   
            <Drawer.Screen name="Accueil" component={StackNav} />
            <Drawer.Screen name="Distributeur" component={Distributeur} />
			<Drawer.Screen name="Information" component={Information} />
            <Drawer.Screen name="ProduitImage" component={ProduitImage} />
            <Drawer.Screen name="Parametre" component={Parametre} />
            <Drawer.Screen name="À propos" component={aPropos} />
            <Drawer.Screen name="Mention légales" component={MentionLegale} />
            <Drawer.Screen name="Obetenir de l'aide" component={ObtenirAide} />
		</Drawer.Navigator>
    )
}