import react, {useEffect, useState} from "react"
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";

import SearchBar from "./search2"
import React from "react";

const SearchScreen = () => {
    const [searchText,setSearchText] = useState("");

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    console.log(data);
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd5f8dc3a4emsha9e8365a7f93f49p18090cjsn331adb360d2e',
            'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
        }
    };
    // filter by multiple ingredients
    searchText.replace(" ", "%");
    useEffect(() => {
        fetch('https://themealdb.p.rapidapi.com/filter.php?i=' + searchText, options)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);


    return (
        <View style={styles.container}>
            <SearchBar searchText={searchText} setSearchText={setSearchText} onSubmit={data.meals}/>
            <FlatList
                data={data.meals}
                keyExtractor={item=>item}
                horizontal={false}
                numColumns={1}
                renderItem={({item}) => (
                    <View>
                        <TouchableOpacity onPress={()=>navigation.navigate('mealDetails', {nom: item.strMeal, image: item.strMealThumb})}>
                            <Text style={styles.text}> {item.strMeal} </Text>
                        </TouchableOpacity>
                    </View>
                )}

            />
        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    }
})
