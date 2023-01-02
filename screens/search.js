import {useEffect, useState} from "react"
import {View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, TextInput, Button} from "react-native";

import React from "react";
import axios from "axios";

const SearchScreen = ({navigation, route}) => {
    const [text, setText] = useState('');
    const [items, setItems] = useState([]);

    const searchMeals = async (text) => {
        const response = await axios.get(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`
        );

        setItems(response.data.meals);
    };

    useEffect(() => {
        searchMeals(text);
    }, [text]);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setText(text)}
                placeholder='Search Meals...'
                value={text}
            />
            <View style={styles.container}>
                <FlatList
                    data={items}
                    keyExtractor={item => item}
                    horizontal={false}
                    numColumns={1}
                    renderItem={({item}) => (
                        <View key="{items.meal}" style={styles.home}>
                            <TouchableOpacity style={styles.thumbnail} onPress={() => navigation.navigate('mealDetails', {
                                nom: item.strMeal,
                                image: item.strMealThumb
                            })}>
                                <Text style={styles.text}> {item.strMeal} </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}
export default SearchScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    input:{
        backgroundColor:"#fff",
        padding: 10,
        borderRadius: 10,
        color: "#000",
        borderWidth: 1,
        margin:20,
    },
    thumbnail:{
        flexDirection: 'row',
        alignItems:'center'
    },
    home:{
        padding:10,
        borderWidth:1,
        borderRadius:15,
        marginLeft:10,
        marginRight:10,
        marginTop:5
    },
})
