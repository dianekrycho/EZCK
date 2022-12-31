import 'react-native-gesture-handler'

import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar, View } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native-paper';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import { store } from './store';
import { Init } from './store/actions';
import Tabs from "./navigation/tab";
import AboutScreen from "./screens/about.js";
import LoginScreen from "./screens/LoginScreen";

const Drawer = createDrawerNavigator();
const AppStack = () => {
    return (
        <NavigationContainer>
            <Drawer.Navigator screenOptions={{ headerShown: false }}>
                <Drawer.Screen name="App" component={Tabs} />
                <Drawer.Screen name="About" component={AboutScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

const Stack = createSharedElementStackNavigator()
const AuthStack = () => {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    )
}


const RootNavigation = () => {
    const token = useSelector(state => state.Reducers.authToken);
    console.log(token);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const init = async () => {
        await dispatch(Init());
        setLoading(false);
    }

    useEffect(() => {
        init()
    }, [])

    if (loading) {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <ActivityIndicator size="large" color='blue' />
            </View>
        )
    }

    return (
        <NavigationContainer>
            <StatusBar backgroundColor='black' barStyle="light-content" />
            {
                token === null ?
                    <AuthStack /> : <AppStack />
            }
        </NavigationContainer>
    )
}

const App = () => {
    return (
        <Provider store={store}>
            <RootNavigation />
        </Provider>
    )
}

export default App;