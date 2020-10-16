import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import IonIcons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import CourseScreen from '../screens/CourseScreen';
import CommunityScreen from '../screens/CommunityScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SearchScreen from '../screens/SearchScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import BasicCourse1Screen from '../screens/BasicCourse1';
import BasicCourse2Screen from '../screens/BasicCourse2';

const HomeStack = createStackNavigator();
const CourseStack = createStackNavigator();
const CommunityStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SearchStack = createStackNavigator();
const DiscoverStack = createStackNavigator();
const BasicCourse1Stack = createStackNavigator();
const BasicCourse2Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainStack = () => (
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
        <Tab.Screen
            name="探す"
            component={DiscoverStackScreen}
            options={{
                tabBarLabel: '見つける',
                tabBarIcon: ({ color, size }) => (
                    <FeatherIcons name="server" color={color} size={30} />
                ),
            }}
        />
    </Tab.Navigator>

);

export default MainStack;

const HomeStackScreen = ({ navigation }) => (

    <HomeStack.Navigator>
        <HomeStack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerRight: () => (
                    <View style={{ marginRight: 10 }}>
                        <FeatherIcons.Button
                            name="search"
                            size={30}
                            backgroundColor="#fff"
                            color="#000000"
                            onPress={() => navigation.navigate('Search')}
                        />
                    </View>
                ),
                headerLeft: () => (
                    <View style={{ marginLeft: 10 }}>
                        <TouchableOpacity>
                            <FeatherIcons.Button
                                name="user"
                                size={30}
                                backgroundColor="#fff"
                                color="#000000"
                                onPress={() => navigation.navigate('Profile')}
                            />
                        </TouchableOpacity>
                    </View>
                ),
            }}
        />
        <ProfileStack.Screen
            name="Profile"
            options={{
                title: 'Profile Screen',
            }}
            component={ProfileScreen}
        />
        <SearchStack.Screen
            name="Search"
            component={SearchScreen}
            options={() => ({
                title: '',
                headerStyle: {
                    backgroundColor: '#fff',
                    shadowColor: '#fff',
                    elevation: 0,
                },
            })}
        />
    </HomeStack.Navigator >
);

const CourseStackScreen = () => (
    <CourseStack.Navigator>
        <CourseStack.Screen
            name="Course"
            component={CourseScreen}
        />
        <BasicCourse2Stack.Screen
            name="Basic2"
            component={BasicCourse2Screen}
            options={{ header: () => null }}
        />
    </CourseStack.Navigator>
);

const CommunityStackScreen = () => (
    <CommunityStack.Navigator>
        <CommunityStack.Screen
            name="Community"
            component={CommunityScreen}
            options={{
                headerRight: () => (
                    <View style={{ marginRight: 10 }}>
                        <FeatherIcons.Button
                            name="search"
                            size={30}
                            backgroundColor="#fff"
                            color="#000000"
                        />
                    </View>
                ),
                headerLeft: () => (
                    <View style={{ marginLeft: 10 }}>
                        <FeatherIcons.Button
                            name="user"
                            size={30}
                            backgroundColor="#fff"
                            color="#000000"
                        />
                    </View>
                ),
            }}
        />
    </CommunityStack.Navigator>
);

const DiscoverStackScreen = ({ navigation }) => (
    <DiscoverStack.Navigator
        options={{
            headerStyle: () => ({
                shadowColor: '#fff',
            }
            )
        }}>
        <DiscoverStack.Screen
            name="Discover"
            component={DiscoverScreen}
        />
        <BasicCourse1Stack.Screen
            name="Basic"
            component={BasicCourse1Screen}
            options={() => ({
                title: '',
                headerStyle: {
                    backgroundColor: '#fff',
                    shadowColor: '#fff',

                },
                headerLeft: () => (
                    <View style={{ marginLeft: 10 }}>
                        <IonIcons.Button
                            name="chevron-back-outline"
                            size={30}
                            backgroundColor="#fff"
                            color="#333"
                            onPress={() => navigation.navigate('Discover')}
                        />
                    </View>
                )
            })}
        />
        <BasicCourse2Stack.Screen
            name="Basic2"
            component={BasicCourse2Screen}
            options={{ header: () => null }}
        />
    </DiscoverStack.Navigator>
);



