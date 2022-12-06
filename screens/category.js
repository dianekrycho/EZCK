import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, SafeAreaView, StatusBar, Image, TouchableOpacity, FlatList} from 'react-native';


const CategoryScreen = ({navigation, route}) => {
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
        fetch('https://themealdb.p.rapidapi.com/filter.php?c=' + nom, options)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.text}> {nom}  </Text>
                    <Text>  </Text>
                </View>
            </View>
            <FlatList
                data={data.meals}
                keyExtractor={item=>item.idMeal}
                horizontal={false}
                numColumns={1}
                renderItem={({item}) => (
                    <View style={styles.home}>
                        <TouchableOpacity onPress={()=>navigation.navigate('mealDetails', {nom: item.strMeal, image: item.strMealThumb})}>
                            <Text> {item.strMeal} </Text>
                        </TouchableOpacity>
                    </View>
                )}

            />
        </View>
    );
};

export default CategoryScreen;


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
    home:{
        padding:10,
        borderWidth:1,
        borderRadius:15,
        margin:3,
    },
});
