import React, { useContext } from 'react';
import { createStackNavigator, createBottomTabNavigator } from '@react-navigation/stack';

import { View, Text, StyleSheet, TouchableOpacity, } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

const HomeScreen = () => {
    const { user, logout } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome {user.uid}</Text>
            <TouchableOpacity
                style={styles.LogoutBtn}
                onPress={() => logout()}><Text style={styles.btnTxt}>LOGOUT</Text></TouchableOpacity>
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    text: {
        fontSize: 20,
        color: '#333333'
    },
    LogoutBtn: {
        backgroundColor: '#7DCEA0',
        width: 150,
        padding: 12,
        marginBottom: 60,
        borderRadius: 32,
    },
    btnTxt: {
        fontFamily: 'Montserrat-SemiBold',
        letterSpacing: 2,
        fontSize: 18,
        textAlign: 'center',
    }
});