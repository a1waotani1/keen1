import React, { useContext, useEffect } from 'react';
import { createStackNavigator, createBottomTabNavigator } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import { ProgressCircle } from 'react-native-svg-charts';
import firestore from '@react-native-firebase/firestore';

const HomeScreen = () => {
    const { user } = useContext(AuthContext);
    const firebasedocuid = firestore().collection('courses').doc(user.uid).get()

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.headerTxt}>Today's Stats</Text>
                <View>
                    <ProgressCircle
                        style={{ height: 150, marginBottom: 20, }}
                        progress={0.50}
                        progressColor={'#7DCEA0'}
                        strokeWidth={10}
                    />
                    <Text style={styles.dataTxt}>50%{"\n"}complete</Text>
                </View>
                <Text style={styles.titleTxt}>Your Ongoing Course</Text>
                <TouchableOpacity>
                    <LinearGradient
                        colors={['#7DCEA0', '#FCD46F']}
                        style={styles.linearGradient}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}>
                        <Text style={styles.courseTxt}>Basic Course</Text>
                    </LinearGradient>

                </TouchableOpacity>

            </View>
        </ScrollView >
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
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
    },
    headerTxt: {
        fontFamily: 'Montserrat-SemiBold',
        letterSpacing: 1,
        fontSize: 20,
        marginBottom: 20,
    },
    titleTxt: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        marginBottom: 20,
        letterSpacing: 1,
    },
    linearGradient: {
        height: 80,
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
    },
    courseTxt: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        letterSpacing: 1,
        color: "#fff",
        paddingTop: 15,
        paddingLeft: 10,
    },
    dataTxt: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 30,
        letterSpacing: 2,
        marginTop: 20

    }
});