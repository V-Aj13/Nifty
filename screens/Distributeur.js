import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import Map from '../components/Map'

function Distributeur(props) {
  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Map />
    </SafeAreaView>
  );
}

export default Distributeur;
