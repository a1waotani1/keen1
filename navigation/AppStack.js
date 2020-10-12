import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import HomeScreen from '../screens/HomeScreen';
import CourseScreen from '../screens/CourseScreen';
import CommunityScreens from '../screens/CommunityScreens';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AppStack = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#000000',
            }}>
            <Tab.Screen
                name="ホーム"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'ホーム',
                    tabBarIcon: ({ color, size }) => (
                        <Icons name="home-variant" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="コース"
                component={CourseScreen}
                options={{
                    tabBarLabel: 'コース',
                    tabBarIcon: ({ color, size }) => (
                        <Icons name="map" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="コミュニティ"
                component={CommunityScreens}
                options={{
                    tabBarLabel: 'コミュニティ',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="group" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
export default AppStack;