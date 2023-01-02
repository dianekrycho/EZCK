import React, {useEffect, useState} from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView,
    Alert
} from 'react-native';
import favorite from "../userDB/favoriteRecipe";

const MealDetailsScreen = ({navigation, route}) => {
    const { nom, image} = route.params;
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    //console.log(data);
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


    const addFavorite = () => {
        if(favorite.map((item) => item.name).includes(nom)){
            Alert.alert(
                "favorite alert",
                "This recipe is already in your favorite list !!",
                [
                    {
                        text: "go to favorite",
                        onPress: () => navigation.navigate('favoriteTab', {
                            screen: 'favorite'
                        })
                    },
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ]
            );
        }
        else{
            navigation.navigate('favoriteTab', {
                screen: 'favorite',
                params: { strMeal: nom, strMealThumb: image },
            })
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.text}> {nom}  </Text>
                    <Image source={{uri :image}} style={{width: 200, height: 200, borderWidth:1, borderRadius:15}}/>
                </View>
                <View>
                    {data.meals && data.meals.map((item)=>
                        <View key="{item}">
                            <TouchableOpacity style={{marginTop:20, flexDirection:"row", alignItems:'center',backgroundColor:'#73C2FB', borderWidth:1, borderRadius:15}} onPress={()=>addFavorite()}>
                                <Image source={require('../bottomTabsIcon/heart.png')} style={{width: 40, height: 40}} />
                                <Text>Add to favorite  </Text>
                            </TouchableOpacity>
                            <View>
                                <Text style={styles.title}>Ingredients </Text>
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
                            <View>
                                <Text style={styles.title}>Instructions </Text>
                                <Text>{item.strInstructions}</Text>
                            </View>
                            <View>
                                <Text style={styles.title}>Youtube video </Text>
                                <Text>{item.strYoutube}</Text>
                            </View>
                            <View>
                                <Text style={styles.title}>Recipe source </Text>
                                <Text>{item.strSource}</Text>
                            </View>
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    )
}

export default MealDetailsScreen;



const styles = StyleSheet.create({
    container: {
        margin:20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column'
    },
    text:{
        fontSize:25,
        fontWeight:'bold',
        textAlign: "center",
        marginBottom:10,
    },
    text2:{
        fontSize:15,
    },
    title:{
        color: "#20232a",
        textAlign: "left",
        fontSize: 20,
        fontWeight: "bold",
        marginTop : 20,
        marginBottom : 10,
    },
});
