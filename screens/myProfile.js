import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar, FlatList, TouchableOpacity, Image } from 'react-native';
import {Logout} from "../store/actions";
import {useDispatch, useSelector} from 'react-redux';

const MyProfileScreen = ({navigation}) => {
  const token = useSelector(state => state.Reducers.authToken);
  const userInfo = token.split("+")
  console.log(userInfo[0]+'  '+userInfo[1])
  const dispatch = useDispatch();
  const submit = () => {
    dispatch(Logout())
  }
  return (
      <View style={styles.container} key="{item}">
        <View style={styles.icon}>
          <Image source={require('../bottomTabsIcon/profile.png')} resizeMode='contain' style={styles.image}/>
        </View>
        <View style={styles.profil}>
          <Text style={styles.title}> My informations :</Text>
          <Text> Username : {userInfo[0]} </Text>
          <Text> Email :  {userInfo[0]}@gmail.com </Text>
          <Text> Allergies : none </Text>
        </View>
        <View style={styles.profil}>
          <Button
              mode="contained"
              color='black'
              onPress={submit}
              title='Log Out'
          />
        </View>
      </View>
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
    //marginBottom:300,
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
    alignItems:'center',
  },
  image:{
    width:150,
    height:150,

  },
});