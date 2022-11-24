import React from 'react';
import { StyleSheet,Text, View, Image, TouchableOpacity } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { HomeStackScreen } from './stack';
import { SearchStackScreen } from './stack';
import { MyProfileStackScreen } from './stack';
import { FavoriteStackScreen } from './stack';



const Tab = createBottomTabNavigator();

function Tabs() {
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                style:{
                    position: 'absolute',
                    bottom: 25,
                    left:20,
                    right:20,
                    elevation: 0,
                    backgroundColor: '#73C2FB',
                    borderRadius: 15,
                    height: 90,
                    //...styles.shadow
                }
            }}
        >
            <Tab.Screen name='homeTab' component={HomeStackScreen} options={{
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                        <Image
                            source={require('../bottomTabsIcon/home.png')}
                            resizeMode='contain'
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused?'#1134A6' : '#0080FE',
                                //opacity:0.5
                            }}
                        />
                    </View>
                )
            }}/>
            <Tab.Screen name='searchTab' component={SearchStackScreen} options={{
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                        <Image
                            source={require('../bottomTabsIcon/search.png')}
                            resizeMode='contain'
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused?'#1134A6' : '#0080FE'
                            }}
                        />
                    </View>
                )
            }}/>
            <Tab.Screen name='favoriteTab' component={FavoriteStackScreen} options={{
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                        <Image
                            source={require('../bottomTabsIcon/heart.png')}
                            resizeMode='contain'
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused?'#1134A6' : '#0080FE'
                            }}
                        />
                    </View>
                )
            }}/>
            <Tab.Screen name='myProfileTab' component={MyProfileStackScreen}  options={{
                tabBarIcon: ({focused})=>(
                    <View style={{alignItems:'center', justifyContent:'center', top:10}}>
                        <Image
                            source={require('../bottomTabsIcon/profile.png')}
                            resizeMode='contain'
                            style={{
                                width:25,
                                height:25,
                                tintColor: focused?'#1134A6' : '#0080FE'
                            }}
                        />
                    </View>
                )
            }}/>

        </Tab.Navigator>
    );
}

export default Tabs;