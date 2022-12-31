import React from "react";
import { Text, View, Image, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native';
// import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import HomeScreen from "../screens/home";
import CategoryScreen from "../screens/category";
import MealDetailsScreen from "../screens/mealDetails";
import SearchScreen from "../screens/search";
import MyProfileScreen from "../screens/myProfile";
import FavoriteScreen from "../screens/favorite";
import SettingsScreen from "../screens/settings"



const HomeStack = createStackNavigator()
const HomeStackScreen = ({navigation}) => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name=" "
                component={HomeScreen}
                options={{
                    headerLeft: () => (
                        <View>
                            <TouchableOpacity style={{flexDirection: 'row', justifyContent:'center'}} onPress={()=>navigation.openDrawer()} activeOpacity={0.5} >
                                <Image
                                    source={require('../bottomTabsIcon/logo2.png')}
                                    resizeMode='contain'
                                    style={styles.icon}
                                />
                                <Text style={styles.headerText}> EZcook </Text>
                            </TouchableOpacity>
                        </View>),
                    headerRight:()=>(
                        <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
                            <Image
                                source={require('../bottomTabsIcon/settings.png')}
                                resizeMode='contain'
                                style={styles.settingsIcon}
                            />
                        </TouchableOpacity>
                    ),
                    headerTintColor:"#1134A6",
                    headerStyle:{backgroundColor:"#73C2FB"},
                }}
            />
            <HomeStack.Screen
                name="categories"
                component={CategoryScreen}
                getId={({ params }) => params.id}
                options={({route, navigation}) => ({
                    title: route.params.name,
                })}
            />
            <HomeStack.Screen
                name="mealDetails"
                component={MealDetailsScreen}
                getId={({ params }) => params.id}
                options={({route, navigation}) => ({
                    title: route.params.name,
                })}
            />
            <HomeStack.Screen
                name='Settings'
                component={SettingsScreen}
            />
        </HomeStack.Navigator>
    )
};
export {HomeStackScreen}

const SearchStack = createStackNavigator();
const SearchStackScreen = ({navigation})=>{
    return(
        <SearchStack.Navigator>
            <SearchStack.Screen
                name=" "
                component={SearchScreen}
                options={{
                    headerLeft: () => (
                        <View >
                            <TouchableOpacity style={{flexDirection: 'row',}} onPress={()=>navigation.openDrawer()} activeOpacity={0.5} >
                                <Image
                                    source={require('../bottomTabsIcon/logo2.png')}
                                    resizeMode='contain'
                                    style={styles.icon}
                                />
                                <Text style={styles.headerText}> EZcook </Text>
                            </TouchableOpacity>
                        </View>),
                    headerRight:()=>(
                        <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
                            <Image
                                source={require('../bottomTabsIcon/settings.png')}
                                resizeMode='contain'
                                style={styles.settingsIcon}
                            />
                        </TouchableOpacity>
                    ),
                    headerTintColor:"#1134A6",
                    headerStyle:{backgroundColor:"#73C2FB"}
                }}
            />
            <SearchStack.Screen
                name='Settings'
                component={SettingsScreen}
            />
        </SearchStack.Navigator>
    )
};
export {SearchStackScreen};

const MyProfileStack = createStackNavigator()
const MyProfileStackScreen = ({navigation}) => {
    return(
        <MyProfileStack.Navigator>
            <MyProfileStack.Screen
                name=" "
                component={MyProfileScreen}
                options={{
                    headerLeft: () => (
                        <View >
                            <TouchableOpacity style={{flexDirection: 'row',}} onPress={()=>navigation.openDrawer()} activeOpacity={0.5} >
                                <Image
                                    source={require('../bottomTabsIcon/logo2.png')}
                                    resizeMode='contain'
                                    style={styles.icon}
                                />
                                <Text style={styles.headerText}> EZcook </Text>
                            </TouchableOpacity>
                        </View>),
                    headerRight:()=>(
                        <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
                            <Image
                                source={require('../bottomTabsIcon/settings.png')}
                                resizeMode='contain'
                                style={styles.settingsIcon}
                            />
                        </TouchableOpacity>
                    ),
                    headerTintColor:"#1134A6",
                    headerStyle:{backgroundColor:"#73C2FB"}
                }}
            />
            <MyProfileStack.Screen
                name='Settings'
                component={SettingsScreen}
            />
        </MyProfileStack.Navigator>
    )
}
export {MyProfileStackScreen};

const FavoriteStack = createStackNavigator()
const FavoriteStackScreen = ({navigation}) => {
    return(
        <FavoriteStack.Navigator>
            <FavoriteStack.Screen
                name=" "
                component={FavoriteScreen}
                options={{
                    headerLeft: () =>(
                        <View >
                            <TouchableOpacity style={{flexDirection: 'row',}} onPress={()=>navigation.openDrawer()} activeOpacity={0.5} >
                                <Image
                                    source={require('../bottomTabsIcon/logo2.png')}
                                    resizeMode='contain'
                                    style={styles.icon}
                                />
                                <Text style={styles.headerText}> EZcook </Text>
                            </TouchableOpacity>
                        </View>),
                    headerRight:()=>(
                        <TouchableOpacity onPress={()=>navigation.navigate('Settings')}>
                            <Image
                                source={require('../bottomTabsIcon/settings.png')}
                                resizeMode='contain'
                                style={styles.settingsIcon}
                            />
                        </TouchableOpacity>
                    ),
                    headerTintColor:"#1134A6",
                    headerStyle:{backgroundColor:"#73C2FB"}
                }}
            />
            <FavoriteStack.Screen
                name='Settings'
                component={SettingsScreen}
            />
        </FavoriteStack.Navigator>
    )
}
export {FavoriteStackScreen};


//const SettingsStack = createStackNavigator()


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
    },
    headerText: {
        justifyContent:'center',
        //fontFamily: ' ',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#1134A6',
        letterSpacing: 1.5,
        alignSelf:'center',
    },
    icon: {
        flexDirection: 'row',
        float:'left',
        width:40,
        height:40,
        marginLeft:15,
    },
    settingsIcon: {
        marginRight:15,
        width:25,
        height:25,
        tintColor:'#0080FE',
    }
});