import React, {useState} from 'react';
import { View, Text, Image,TextInput, onChangeText, Button, StyleSheet, TouchableOpacity, Modal, ScrollView } from 'react-native';


const SearchScreen = ({navigation}) => {
    const [text, onChangeText] = React.useState("Rechercher une recette");

    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <View style={styles.search}>
                    <Image source={require('../bottomTabsIcon/search.png')}
                           resizeMode='contain'
                           style={styles.icon}/>
                    <TextInput onChangeText={onChangeText} value={text}/>
                </View>
            </View>
            <View>
              <View>
                <DropDownMenu/>
                <Text> search page with filter</Text>
              </View>
              <View>

              </View>
            </View>
        </View>
    );
};

export default SearchScreen;

const Options = ['a', 'b', 'c'];

const ModalPicker=(props)=>{

  const onPressItem=(option)=>{
    props.changeModalVisibility(false);
    props.setData(option);
  }
  
  const option = Options.map((item, index)=>{
    return (
      <TouchableOpacity key={index} onPress={()=>onPressItem(item)} style={styles.option}>
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    )
  })
  
  return(
    <TouchableOpacity onPress={()=>props.changeModalVisibility(false)} style={styles.container}>
      <View style={styles.container}>
        <ScrollView>
          {option}
        </ScrollView>
      </View>
    </TouchableOpacity>
  )
}

const DropDownMenu = ()=>{
  const [chooseData, setchooseData] = useState('Select Item...');
  const [isModalVisible, setisModalVisible]=useState(false);

  const changeModalVisibility = (bool)=>{
    setisModalVisible(bool)
  }

  const setData = (option) => {
    setchooseData(option)
  }

  return(
    <View style={styles.containers}>
      <TouchableOpacity onPress={()=>changeModalVisibility(true)}>
        <Text style={styles.text}> {chooseData} </Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType='fade'
        visible={isModalVisible}
        nRequestClose={()=> changeModalVisibility(false)}
      >
        <ModalPicker changeModalVisibility={changeModalVisibility} setData={setData}/>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', 
    justifyContent: 'flex-start'
  },
  option:{
    alignItems:'flex-start',
    justifyContent:'center',
  },
  text:{
    marginVertical:20,
    fontSize:20,
    fontWeight:'bold'
  },
  touchableOpacity:{
    backgroundColor:'#73C2FB',
    alignSelf:'stretch',
    paddingHorizontal:20,
    marginHorizontal:20,
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
});