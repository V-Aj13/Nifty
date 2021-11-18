//Bar en bas de l'application
import { Image } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import DistributeurScreen from "./DistributeurScreen";
import ProduitScreen from "./ProduitScreen";

const Tab = createMaterialBottomTabNavigator();

function MesOnglets() {
  return (
    <Tab.Navigator 
    initialRouteName="Home" 
    activeColor="#9666a8"
    inactiveColor="#fff"
    barStyle={{backgroundColor: "#fff"}}
    >
      <Tab.Screen
        name="Distributeurs"
        component={DistributeurScreen}
        options={{
          tabBarLabel: "Distributeurs",
          
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
          activeColor: "9666a8",
          inactiveColor: "#0000FF",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="shopping-outline"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MesOnglets;
