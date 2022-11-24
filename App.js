import 'react-native-gesture-handler'

import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator, HeaderTitle } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";


import Tabs from "./navigation/tab";
import AboutScreen from "./screens/about.js";


const Drawer = createDrawerNavigator();

export default function App() {
  return(
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
          <Drawer.Screen name="App" component={Tabs} />
          <Drawer.Screen name="About" component={AboutScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
  );
}
