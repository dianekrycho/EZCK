import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';


const AboutScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Our App :
            </Text>
            <Text style={styles.text}>
                EZCK stands for Easy Cooking !{"\n"}
                The goal of our mobile app is to help you find easy recipes 👅{"\n"}
                everyone can find something to their liking : there are salty 🍝 and sweet 🍰 recipes, but also vegeterian ones 🥗{"\n"}
                No more excuses, you have to cook !
            </Text>
        </View>
    );
};

export default AboutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin:30,

    },
    text :{
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontWeight:'bold',
        fontSize:16,
        marginBottom:10
    }
});