import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView, StatusBar, Image, TouchableOpacity, FlatList, ScrollView} from 'react-native';


const MealDetailsScreen = ({navigation, route}) => {
    const { nom, image} = route.params;
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
    useEffect(() => {
        fetch('https://themealdb.p.rapidapi.com/search.php?s=' + nom, options)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    /*
    const ingredients = []
    while(data.meals.strIngrdient + i !== null){
        ingredients.add(data.meals.strIngrdient + i)
        i++
    }
     */
    //console.log(ingredients)
    return (
        <View style={styles.container}>
            <ScrollView>
                <View>
                    <Text style={styles.text}> {nom}  </Text>
                    <Image/>
                </View>
                <View>
                    <Text style={styles.text2}>   </Text>
                </View>
                <View>
                    {data.meals && data.meals.map((item)=>
                        <View>
                            <Text>Ingredients </Text>
                            <Text>{item.strIngredient1}     {item.strMeasure1}</Text>
                            <Text>{item.strIngredient2}     {item.strMeasure2}</Text>
                            <Text>{item.strIngredient3}     {item.strMeasure3}</Text>
                            <Text>{item.strIngredient4}     {item.strMeasure4}</Text>
                            <Text>{item.strIngredient5}     {item.strMeasure5}</Text>
                            <Text>{item.strIngredient6}     {item.strMeasure6}</Text>
                            <Text>{item.strIngredient7}     {item.strMeasure7}</Text>
                            <Text>{item.strIngredient8}     {item.strMeasure8}</Text>
                            <Text>{item.strIngredient9}     {item.strMeasure9}</Text>
                            <Text>{item.strIngredient10}    {item.strMeasure10}</Text>
                            <Text>{item.strIngredient11}    {item.strMeasure11}</Text>
                            <Text>{item.strIngredient12}    {item.strMeasure12}</Text>
                        </View>
                    )}
                </View>
                <View>
                    {data.meals && data.meals.map((item)=>
                        <View>
                            <View>
                                <Text> instructions </Text>
                                <Text>{item.strInstructions}</Text>
                            </View>
                            <View>
                                <Text> Youtube video </Text>
                                <Text>{item.strYoutube}</Text>
                            </View>
                            <View>
                                <Text> Recipe source </Text>
                                <Text>{item.strSource}</Text>
                            </View>
                        </View>
                    )}
                </View>
            </ScrollView>

        </View>
    );
};

export default MealDetailsScreen;



const styles = StyleSheet.create({
    container: {
        margin:15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column'
    },
    text:{
        fontSize:20,
        fontWeight:'bold'
    },
    text2:{
        fontSize:15,
    },
});
