import React from 'react';
import { Image, ImageBackground, StyleSheet,Text,View } from 'react-native';
import AppButton from '../components/AppButton';


function WelcomeScreen(props) {
    return (
        <ImageBackground 
        blurRadius={2}
        source ={require('../assets/background.jpg')}
        style={styles.background}
        >
            <View style={styles.logoContainer}>
            <Image  style={styles.logo} source={require("../assets/logo-red.png")}/>
        <Text styles={styles.tagline}>One mans trash is another mans treasure!</Text>
         </View>
        <View style={styles.buttonsContainer}>
        <AppButton title='Login' color='primary'/>
        <AppButton title="Register" color='secondary'/>
        </View>
        
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center'
    },
    logo:{
        width:100,
        height:100,

        
        },
        logoContainer:{
        position:'absolute',
        top:70,
        alignItems:'center'
        },
        buttonsContainer:{
          padding:20,  
          width:'100%'
        },
        tagline:{
            fontSize:25,
            fontWeight:'600',
            paddingVertical:20,
        }
        
})

export default WelcomeScreen;