import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';


const SettingsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>
          Réglages par l'utilisateurs{"\n"} ex : réglage notifications {"\n"} pk pas choix du thème ou langue
        </Text>
      </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});