import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';


const AboutScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>
                about
            </Text>
        </View>
    );
};

export default AboutScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});