import React from 'react';
import { Image, ImageBackground, StyleSheet, View,  } from 'react-native';


function AcceuilScreen(props) {
    return (
        <ImageBackground 
            resizeMode = 'contain'
            style = {styles.backgroud}
            //Les "deux point" permet acceder Nifty puis app
            //source = {require("../assets/testBackground.jpg")}
            >
                <View style={styles.logoContainer}>
                    <Image resizeMode = 'contain'
                    style={styles.logo} 
                    /*source = {require('../assets/Logo_Nifty.jpg')}*//> 
                </View>
            </ImageBackground>
                
    );
}

const styles = StyleSheet.create({
    backgroud: {
        //L'image prend tout l'écran
        flex: 1,
        //Mettre les buttons en bas
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        position: 'absolute',
        top: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
});

export default AcceuilScreen;