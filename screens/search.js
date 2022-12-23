import {useEffect, useState} from "react"
import {View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator, TextInput} from "react-native";

//import SearchBar from "./search2"
import React from "react";
//import filter from 'lodash.filter';
// https://blog.jscrambler.com/add-a-search-bar-using-hooks-and-flatlist-in-react-native

const SearchScreen = () => {
    const [searchText,setSearchText] = useState("");
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    console.log(data);


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd5f8dc3a4emsha9e8365a7f93f49p18090cjsn331adb360d2e',
            'X-RapidAPI-Host': 'themealdb.p.rapidapi.com'
        }
    };
    // filter by multiple ingredients
    function searchMeals(){
        if(searchText){
            searchText.replace(" ", "%");
            console.log(searchText)
            useEffect(() => {
                setLoading(true);
                fetch('https://themealdb.p.rapidapi.com/search.php?s=' + searchText, options)
                    .then((response) => response.json())
                    .then((json) => {
                        setData(json)
                        //setFullData(json.meals);
                        setLoading(false)
                    })
                    .catch((error) => {
                        console.error(error)
                        setError(error);
                    })
                    .finally(() => setLoading(false));
            }, []);
        }
    }

    function renderHeader() {
        return (
            <View
                style={{
                    backgroundColor: '#fff',
                    padding: 10,
                    marginVertical: 10,
                    borderRadius: 20
                }}
            >
                <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    value={searchText}
                    onChangeText={(text)=>setSearchText(text)}
                    onSubmitEditing={()=>searchMeals()}
                    //onChangeText={queryText => handleSearch(queryText)}
                    placeholder="Search"
                    style={styles.input}
                />
            </View>
        );
    }

    if (isLoading){
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#73C2FB" />
            </View>
        );
    }
    if(error){
        return(
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 18}}>
                    Error fetching data... Check your network connection!
                </Text>
            </View>
        );
    }
    return (
        <View style={styles.container}>
            <FlatList
                ListHeaderComponent={renderHeader}
                data={data}
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
    );
}
/*
<SearchBar searchText={searchText} setSearchText={setSearchText} onSubmit={searchMeals()}/>
 */
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
        borderWidth: 1
    }
})
