import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {TouchableOpacity} from 'react-native';


const styles = StyleSheet.create ({
  container: {
     
     flexDirection: 'row',
     justifyContent: 'space-between',
     
     height: 600
  },
  redbox: {
   
    flexDirection:'left',
     width: 180,
     height:240,
     backgroundColor: 'white',
     borderWidth: 1,
     borderTopLeftRadius: 20,
     borderTopRightRadius: 20,
     borderBottomLeftRadius: 20,
     borderBottomRightRadius: 20,

  },
  bluebox: {
    flexDirection:'right',
    width: 180,
    height:240,
    backgroundColor: 'white',
    borderWidth: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  blackbox: {
     width: 100,
     height: 100,
     backgroundColor: 'black'

  },
  h4:{
    marginRight: 'auto'
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 140,
    height: 120,
    position: "center"
  },

   navBar: {
      height: 60,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
    close: {
      margin: 5,
      position: "absolute",
      top: 0,
      left: 0,
      width: 25,
      height: 25,
      color: "tomato"
    },
    
  });

const justifyContents = [
  'flex-start',
  'flex-end',
  'center',
  'space-between',
  'space-around',
  'space-evenly',
];
const alignItemsArr = [
  'flex-start',
  'flex-end',
  'center',
  'stretch',
  'baseline',
];

const createPost =() =>{
alert("Alpha")

}
const DisplayAnImage = () => {
  return (


<View style = {styles.container}>
  <View style ={styles.redbox} > 
    
  <TouchableOpacity onPress={()=> createPost()}>
  <p>Voir plus</p>
     <Image
        style={styles.logo}
        resizeMode=""
        source={require('../assets/images/chewingGum.png')}
      />
   </TouchableOpacity>
   <div className="container"><p>Hello, World</p></div>
      
  </View>
  <View style ={styles.bluebox} > 
    
    <TouchableOpacity onPress={()=> createPost()}>
    <p>Voir plus</p>
       <Image
          style={styles.logo}
          resizeMode=""
          source={require('../assets/images/matinBlanc.png')}
        />
     </TouchableOpacity>
     <div className="container"><p>Hello, World</p></div>
        
    </View>
    <View style ={styles.bluebox} > 
    
    <TouchableOpacity onPress={()=> createPost()}>
    <p>Voir plus</p>
       <Image
          style={styles.logo}
          resizeMode=""
          source={require('../assets/images/niveaAntiRespirant.png')}
        />
     </TouchableOpacity>
     <div className="container"><p>Hello, World</p></div>
        
    </View>
    <View style ={styles.bluebox} > 
    
    <TouchableOpacity onPress={()=> createPost()}>
    <p>Voir plus</p>
       <Image
          style={styles.logo}
          resizeMode=""
          source={require('../assets/images/lingettesEvoluderm.png')}
        />
     </TouchableOpacity>
     <div className="container"><p>Hello, World</p></div>
        
    </View>
    <View style ={styles.bluebox} > 
    
    <TouchableOpacity onPress={()=> createPost()}>
    <p>Voir plus</p>
       <Image
          style={styles.logo}
          resizeMode=""
          source={require('../assets/images/Labello.png')}
        />
     </TouchableOpacity>
     <div>
     <p>Stick a lÃ¨vre</p>
     <p>Labello </p>
     <h3>1,50$</h3>
     </div>
        
    </View>
      
  
 </View>
  );
}

export default DisplayAnImage;