import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image, FlatList,} from 'react-native';
import favorite from "../userDB/favoriteRecipe";
//favorite = extract list of favorite meal from db


const FavoriteScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
          <FlatList
              data={favorite}
              keyExtractor={item=>item.id}
              horizontal={false}
              numColumns={1}
              style={{width: 340,}}
              renderItem={({item}) => (
                  <View style={styles.home}>
                      <TouchableOpacity style={styles.thumbnail} onPress={()=>navigation.navigate('mealDetails', {nom: item.name, image: item.image})}>
                          <Image source={{uri :item.image}} style={{width: 40, height: 40, borderWidth:1, borderRadius:15}} />
                          <Text> {item.name} </Text>
                      </TouchableOpacity>
                  </View>
              )}

          />
      </View>
    );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
    container: {
        margin:15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
    },
    text:{

        fontSize:20,
        fontWeight:'bold'
    },
    home:{
        padding:10,
        borderWidth:1,
        borderRadius:15,
        margin:3,
    },
    thumbnail:{
        flexDirection: 'row',
        alignItems:'center'
    },
});