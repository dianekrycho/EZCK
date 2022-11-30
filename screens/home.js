import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Button,
    StyleSheet,
    StatusBar,
    Image,
    TouchableOpacity,
    ScrollView,
    FlatList,
    TextInput, Alert
} from 'react-native';


const HomeScreen = ({navigation}) => {
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
        fetch('https://themealdb.p.rapidapi.com/categories.php', options)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);

  return (
      <View style={styles.container}>
        <View>
            <FlatList
                data={data.categories}
                keyExtractor={item=>item.idCategory}
                horizontal={false}
                numColumns={1}
                renderItem={({item}) => (
                    <View style={styles.home}>
                        <TouchableOpacity onPress={()=>navigation.navigate('categories', {nom: item.strCategory, image: item.strCategoryThumb, description: item.strCategoryDescription})}>
                            <Text style={styles.text}> {item.strCategory} </Text>
                        </TouchableOpacity>
                    </View>
                )}

            />
        </View>
      </View>
  );
};
export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
    //justifyContent: 'flex-start',
      flexDirection:'column',
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
    home:{
        padding:10,
        borderWidth:1,
        borderRadius:15,
        margin:3,
    },
});
