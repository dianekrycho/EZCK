import React, {useState} from 'react';
import { View, Text, Image,TextInput, onChangeText, Button, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';


const SearchScreen = ({navigation}) => {
    const [text, onChangeText] = React.useState("Rechercher une recette");

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <View style={styles.search}>
                    <Image source={require('../bottomTabsIcon/search.png')}
                           resizeMode='contain'
                           style={styles.icon}/>
                    <TextInput onChangeText={onChangeText} value={text}/>
                </View>
            </View>
            <View>

            </View>
        </View>
    );
};

export default SearchScreen;



const styles = StyleSheet.create({
  container: {
      flexDirection:'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  option:{
    alignItems:'flex-start',
    justifyContent:'center',
  },
  text:{
    marginVertical:20,
    fontSize:20,
    fontWeight:'bold'
  },
  touchableOpacity:{
    backgroundColor:'#73C2FB',
    alignSelf:'stretch',
    paddingHorizontal:20,
    marginHorizontal:20,
  },
    search:{
        borderWidth:1,
        width:350,
        padding:10,
        justifyContent: 'left',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop:120,
    },
    icon: {
        marginRight:5,
        width:15,
        height:15,
    },
});