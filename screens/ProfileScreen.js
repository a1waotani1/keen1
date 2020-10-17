import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

const ProfileScreen = () => {
    const { user, logout } = useContext(AuthContext);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Welcome {user.email}</Text>
            <Text> This is my profile screen </Text>
            <TouchableOpacity
                onPress={() => logout()}><Text>LOGOUT</Text>
            </TouchableOpacity>
        </View>
    );
}

export default ProfileScreen;