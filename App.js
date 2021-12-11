import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import CustomDrawer from "./app/navigation/drawer";

const Stack = createStackNavigator();

//Bar
export default function App() {
  return (
    <NavigationContainer>
      <CustomDrawer />
    </NavigationContainer>
  );
}
