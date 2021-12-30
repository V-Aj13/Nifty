import React from 'react';

import { createStackNavigator } from "@react-navigation/stack";
import { bottomTabs } from './Tab';


const Stack = createStackNavigator();
const InfoStack = createStackNavigator();

export function StackNav(props) {
    return (
       
			<Stack.Navigator
			screenOptions={{
			  headerShown: false,
			}}
			>
				<Stack.Screen name="Tabs" component={bottomTabs} />
			</Stack.Navigator>
    );
}

