import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';

import HomeScreen from '../screens/HomeScreen';
import CourseScreen from '../screens/CourseScreen';
import CommunityScreen from '../screens/CommunityScreen';

const HomeStack = createStackNavigator();
const CourseStack = createStackNavigator();
const CommunityStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const AppStack = () => (
    <Tab.Navigator
        tabBarOptions={{
            activeTintColor: '#7DCEA0',
            inactiveTintColor: '#000000',

        }}>
        <Tab.Screen
            name="ホーム"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'ホーム',
                tabBarIcon: ({ color, size }) => (
                    <Icons name="home-variant" color={color} size={30} />
                ),
            }}
        />
        <Tab.Screen
            name="コース"
            component={CourseStackScreen}
            options={{
                tabBarLabel: 'コース',
                tabBarIcon: ({ color, size }) => (
                    <Icons name="map" color={color} size={30} />
                ),
            }}
        />
        <Tab.Screen
            name="コミュニティ"
            component={CommunityStackScreen}
            options={{
                tabBarLabel: 'コミュニティ',
                tabBarIcon: ({ color, size }) => (
                    <MaterialIcons name="group" color={color} size={30} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default AppStack;

const HomeStackScreen = ({ navigation }) => (

    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#fff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen
            name=" "
            component={HomeScreen}
            options={{
                title: 'Home',
                headerRight: () => (
                    <FeatherIcons.Button name="search" size={30} backgroundColor="#fff" color="#000000" />
                )
            }}
        />

    </HomeStack.Navigator >
);

const CourseStackScreen = () => (
    <CourseStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#fff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <CourseStack.Screen
            name="Course"
            component={CourseScreen}
            options={{
                headerRight: () => (
                    <FeatherIcons.Button name="search" size={30} backgroundColor="#fff" color="#000000" />
                )
            }}
        />
    </CourseStack.Navigator>
);

const CommunityStackScreen = () => (
    <CommunityStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#fff',
            shadowColor: '#fff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <CommunityStack.Screen
            name="Community"
            component={CommunityScreen}
            options={{
                headerRight: () => (
                    <FeatherIcons.Button name="search" size={30} backgroundColor="#fff" color="#000000" />
                )
            }}
        />
    </CommunityStack.Navigator>
);

