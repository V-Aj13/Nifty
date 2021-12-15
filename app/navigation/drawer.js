import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from "@react-navigation/drawer";

import { MainStackNavigator } from "./stackTab";
import aPropos from "../screens/aPropos";
import Information from "../screens/Information";
import MentionLegale from "../screens/MentionLegale";
import ObtenirAide from "../screens/ObtenirAide";
import Parametre from "../screens/Parametre";
import { COLORS, FONTS, icons, SIZES, screens } from "../constants";

const Drawer = createDrawerNavigator();

const CustomDrawerItem = ({ label }) => {
  return (
    <TouchableOpacity
      styles={{
        flexDirection: "row",
        height: 40,
        marginBottom: SIZES.base,
        alignItems: "center",
        paddingLeft: SIZES.radiusDrawer,
        borderRadius: SIZES.base,
        //backgroundColor
      }}
      //onPress
    >
      <Image
        source={icons}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.primary,
        }}
      />
      <Text
        styles={{
          marginLeft: 15,
          color: COLORS.black,
          ...FONTS.h3,
        }}
      />
    </TouchableOpacity>
  );
};

const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.radiusDrawer,
        }}
      >
        {/*retour boutton */}
        <View
          style={{
            alignItems: "flex-start",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => navigation.closeDrawer()}
          >
            <Image
              resizeMode="contain"
              source={icons.retour}
              style={{
                height: 15,
                width: 15,
                tintColor: COLORS.primary,
              }}
            />
          </TouchableOpacity>
        </View>

        {/*Dans le cas de Profile utilisateur*/}

        {/*Drawer items*/}
        <View
          style={{
            flex: 1,
            marginTop: SIZES.paddingDrawer,
          }}
        >
          
          <CustomDrawerItem
            label={screens.accueil}
            //icon={icons.home}
          />
          <CustomDrawerItem
            label={screens.aPropos}

            //icon={icons.home}
          />
          <CustomDrawerItem
            label={screens.information}
            //icon={icons.home}
          />
          <CustomDrawerItem
            label={screens.mentionLegale}
            //icon={icons.home}
          />
          <CustomDrawerItem
            label={screens.obtenirAide}
            //icon={icons.home}
          />
          <CustomDrawerItem
            label={screens.parametre}
            //icon={icons.home}
          />
         
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
      }}
    >
      <Drawer.Navigator
        drawerType="slide"
        overlayColor="transparent"
        drawerStyle={{
          flex: 1,
          width: "65%",
          paddingRight: 20,
          backgroundColor: "transparent",
        }}
        sceneContainerStyle={{
          backgroundColor: "transparent",
        }}
        initaleRouteName="Accueil"
        drawerContent={(props) => {
          return <CustomDrawerContent navigation={props.navigation} />;
        }}
      >
        <Drawer.Screen name="Accueil">
          {(props) => <MainStackNavigator {...props} />}
        </Drawer.Screen>

        <Drawer.Screen name="aPropos">
          {(props) => <aPropos {...props} />}
        </Drawer.Screen>

        <Drawer.Screen name="Information">
          {(props) => <Information {...props} />}
        </Drawer.Screen>

        <Drawer.Screen name="Mention Legale">
          {(props) => <MentionLegale {...props} />}
        </Drawer.Screen>

        <Drawer.Screen name="Obetenir Aide">
          {(props) => <ObtenirAide {...props} />}
        </Drawer.Screen>

        <Drawer.Screen name="Paramètre">
          {(props) => <Parametre {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;
