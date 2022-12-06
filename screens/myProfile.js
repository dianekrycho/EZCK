import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, FlatList, TouchableOpacity, Image } from 'react-native';

const User = [
  {
    id: '1',
    image: require('../bottomTabsIcon/profile.png'),
    email:"micheline.martin@gmail.com",
    gender:'Women',
    name:"Micheline",
    allergies:"peanuts"
  },
]

const MyProfileScreen = ({navigation}) => {
  return (
      <FlatList
          data={User}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
          <View style={styles.container}>
            <View >
              <Image source={item.image} resizeMode='contain' style={styles.icon}/>
            </View>
            <View style={styles.profil}>
              <Text style={styles.title}> My informations :</Text>
              <Text> Username : {item.name} </Text>
              <Text> Email : {item.email} </Text>
              <Text> Allergies : {item.allergies} </Text>
            </View>
          </View>
          )}
      />
  );
};

export default MyProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  p:{
    float :'left',
    width:60,
    height:60,
    borderWidth:2,
    borderRadius:50,
    marginTop:40,
  },
  title:{
    fontSize:20,
  },
  profil:{
    borderWidth:2,
    borderRadius:15,
    //alignItems: 'center',
    justifyContent: 'center',
    margin:30,
    marginBottom:300,
    padding:15,
    backgroundColor:'#bde2fd',
    resizeMode:'contain',
    flexDirection:'column',
  },
  icon:{
    marginTop:50,
    width:200,
    height:200,
    borderWidth:2,
    borderRadius:100,
    padding:10,
  },
  button:{
    width:100,
    height:100,
  },
});