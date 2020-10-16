import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

const CourseScreen = () => {
    const { user } = useContext(AuthContext);
    return (
        <ScrollView style={style.container}>

        </ScrollView>
    );
}

export default CourseScreen;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})