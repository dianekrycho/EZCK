import React from 'react';
import {View, Text, Button, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, FlatList} from 'react-native';


const HomeScreen = ({navigation}) => {
  return (
      <View style={styles.container}>
        <Text> home screen </Text>
        <Button
          title="clique pour afficher une pop up"
          onPress={() => alert ('je suis la pop up')}
        />
        <FlatList
            //data={Recipe}
            //renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
            //keyExtractor={(item) => item.id}
        />
      </View>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',

  },
});
