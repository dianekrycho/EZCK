import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';


const MyProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text> mon profile </Text>
    </View>
  );
};

export default MyProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  text: {
    fontSize:14,
    justifyContent:'center',
    color:'black',
  }
});