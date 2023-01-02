import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image, FlatList,} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from '@react-navigation/native';

const FavoriteScreen = ({navigation}) => {
    const [data, setData] = useState([]);
    const fetchAllFav = async () => {
        try {
            const result = [];
            const keys = await AsyncStorage.getAllKeys();
            for (const key of keys) {
                if(key!="token"){
                    await AsyncStorage.getItem(key)
                        .then(req => JSON.parse(req))
                        .then(json => result.push(json))
                }
            }
            console.log("result : " +JSON.stringify(result))
            setData(result)
        } catch (error) {
            console.log(error, "probleme")
        }
    }
    useFocusEffect(
        React.useCallback(() => {
            fetchAllFav()
        }, [data])
    );
    /*
    useEffect(() => {
        fetchAllFav()
    }, []);*/

    //fetchAllFav()
    return (
      <View style={styles.container}>
          <FlatList
              data={data}
              keyExtractor={item=>item.nom}
              horizontal={false}
              numColumns={1}
              style={{width: 340}}
              renderItem={({item}) => (
                  <View style={styles.home}>
                      <TouchableOpacity style={styles.thumbnail} onPress={()=>navigation.navigate('mealDetails', {nom: item.nom, image: item.image})}>
                          <Image source={{uri :item.image}} style={{width: 40, height: 40, borderWidth:1, borderRadius:15}} />
                          <Text> {item.nom} </Text>
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