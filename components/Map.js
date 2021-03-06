import React, { useState, useEffect } from 'react';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import {StyleSheet,
        Dimensions,
        Image, 
        View,
        Text,
      TouchableWithoutFeedback,
      ActivityIndicator } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';


// Position Initial de la carte = Mairie de Paris
const initialState = {
  latitude: 48.856614,
  longitude: 2.3522219,
  latitudeDelta: 0.015,
  longitudeDelta: 0.0121
}

const INITIAL_MARKER = [  //Liste des Markers avec leur attribues personnells
  {
    id: 1,
    region: { latitude: 48.868574, longitude: 2.380539 },
    title: 'Nifty Oberkampf',
    desc: '89 Boulevard de Belleville',
    Postal: '75018 Paris'
  },
  {
    id: 2,
    region: { latitude: 48.868574, longitude:  2.400539 },
    title: 'Test 1',
    desc: 'La rue du Test 1',
    Postal: '75018 Paris'
  },
  {
    id: 3,
    region: { latitude: 48.82548, longitude:  2.37568 },
    title: 'Test 3',
    desc: 'La rue du Test 3',
    Postal: '75018 Paris'
  },
  {
    id: 4,
    region: { latitude: 48.90548, longitude:  2.40568 },
    title: 'Test 4',
    desc: 'La rue du Test 4',
    Postal: '75018 Paris'
  },
];


//Foncion principal de la Map
const Map = () => {
  let myMap;
  const [curentPosition, setCurentPosition] = useState(initialState); //Definie la position selon l'initial
  const [marker, setMarker] = useState({});                           //setter pour afficher les infos de chaque marker

  /*useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
      const { longitude, latitude} = [48.856614, 2.3522219];//position.coords;
      setCurentPosition({
        ...curentPosition,
        latitude,
        longitude,
      })
    },
  error => alert(error.message),
  {timeout: 2000, maximumAge: 1000}
  )
},[])*/


// Affiche la liste des marker
const renderMarker = () => {
  return INITIAL_MARKER.map(_marker => (
    <Marker
      key={_marker['id']}
      coordinate={_marker['region']}
      title={_marker['title']}
      description={_marker['desc']}
      onPress={() => {                                                  //OnPress = selectionn??
        setMarker(_marker);                                             // _marker indique les infos du marker cr???? depuis liste
        //getJarak(_marker);
        //alert(JSON.stringify(marker));
        myMap.fitToCoordinates([_marker['region']], {                   //Recentrage sur le Marker
            edgePadding: { top: 10, bottom: 10, left: 10, right: 10 },
            animated: true                                              //Zoom sur le Marker
        });
        //setTimeout( getJarak, 1000);
      }}
    />
  ));
}

const renderSearchBar = () => {
  return(
    <View>
      <TextInput 
        style={{
          borderWidth: 1,
          borderColor: 'E8E8E8',
          borederRadius: 25,
          height:40,
        }}
      >

      </TextInput>
    </View>
  );
}

const renderDetailMarker = () => (        //Affiche la balise d'information
  <View                                   //Vue general
    style={{
      position:'absolute',
      bottom:153,
      paddingLeft: 5,
      paddingRight: 5,
      left: 24,
      right: 24,
      flexDirection:'row',
      backgroundColor:'#FFFFFF',
      height: (154/854)*height,
      borderRadius: 16,
      shadowRadius: 3,
      shadowOpacity: 10,
      shadowColor: "#000029",
    }}
  >
    <View                                                                 //Vue du texte
      style={{ flex:1, paddingLeft: 17, flexDirection:'column',}}
    >
      <Text style={{fontSize: (28/854)*height, paddingTop: (22/854)*height }}>{ marker['title'] }</Text>
      <Text style={styles.Text} allowFontScaling={false}>{ marker['desc'] }</Text>
      <Text style={styles.Text} allowFontScaling={false}>{ marker['Postal'] }</Text>
      <TouchableOpacity>
        <Text style={styles.Text, {color: '#D62C2C', textAlign: "center"}}>Signaler un Probl??me</Text>
    </TouchableOpacity>
    </View>
  </View>
)

return curentPosition.latitude ? (
  <View style={styles.map}>
    { renderSearchBar() }
    <MapView
    ref={ref => myMap = ref}
  //provider={PROVIDER_GOOGLE}
      style={styles.map}
     loadingEnabled={true}
  //showsUserLocation
    initialRegion={curentPosition}
    > 
      { renderMarker() }
                            
    {/*<MapView.Marker
          coordinate={{
            latitude: 48.868574,
            longitude: 2.380539,
          }}
          title={"Title 1"}
          description={"Description"}
          onPress={() => {
            myMap.fitToCoordinates([{
            latitude: 48.868574,
            longitude: 2.380539,
            }], {
              edgePadding: { top: 10, bottom: 10, left: 10, right: 10 },
              animated: true
            })
          }}
        />*/}
    </MapView>
    {marker.hasOwnProperty('id') && renderDetailMarker()}                      
  </View>                                                   // selectionner le marqueur affiche les informations

):<ActivityIndicator style={{ flex: 1 }} animating size="large" />

};

//Dimension de l'??cran
const height = Dimensions.get('window').height 
const width = Dimensions.get('window').width

const styles = StyleSheet.create({                         //Balise de style "styles" appell?? plus haut
  map: {
    height
  },
  Text: {
    fontSize: (19/854)*height,
  },
  card: {
    backgroundColor: '#fff',
    height: 120,
    width: width -20,
    position: "absolute",
    overflow: "hidden",
    margin: 10,
    bottom: 50,
    textShadowRadius: 20,
    borderRadius: 8
  },
  description: {
    
  }
})

export default Map