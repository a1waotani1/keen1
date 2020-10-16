import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';

import HomeScreen from '../screens/HomeScreen';
import CourseScreen from '../screens/CourseScreen';
import CommunityScreen from '../screens/CommunityScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MainStack from '../screens/MainStack';
import SearchScreen from '../screens/SearchScreen';

const HomeStack = createStackNavigator();
const CourseStack = createStackNavigator();
const CommunityStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();


const AppStack = () => {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="HomeDrawer" component={MainStack} />
        </Drawer.Navigator>
    )
};

export default AppStack;