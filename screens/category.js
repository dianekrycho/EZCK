import React from 'react';
import { View, Text, Button, StyleSheet, SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native';


const CategoryScreen = ({navigation, route}) => {
    const { nom, image, description} = route.params;
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.text}> {nom}  </Text>
                    <Text> {description}  </Text>
                    <Image source={image}/>
                </View>
            </View>
        </View>
    );
};

export default CategoryScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    text:{

        fontSize:20,
        fontWeight:'bold'
    },
});
