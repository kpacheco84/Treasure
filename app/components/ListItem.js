import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import AppText from '../components/AppText';
import colors from '../config/colors';


function ListItem({title,subTitle,image, IconComponent, onPress, renderRightActions}) {

    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight 
        underlayColor={colors.lightgrey}
        onPress={onPress}>
        <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image}/>}
            <View style = {styles.detailsContainer}>
                <AppText styles={styles.title}>{title}</AppText>
                {subTitle && <AppText styles={styles.subTitle}>{subTitle}</AppText>}
            </View>
        </View>
        </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        padding: 15,
        backgroundColor:colors.white
    },
    detailsContainer:{
        marginLeft:10,
        justifyContent:'center'

    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        
    },
    title:{
        fontWeight:'500'
    },
    subTitle:{
        color: colors.medium
    }
})

export default ListItem;