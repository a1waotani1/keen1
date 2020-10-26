import React, { useContext, useState, useEffect, } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert, StatusBar } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import firestore from '@react-native-firebase/firestore';
import { ProgressCircle } from 'react-native-svg-charts';


const HomeScreen = ({ navigation }) => {
    const { user } = useContext(AuthContext);
    const [progress, setProgress] = useState(0);
    const [state, setState] = useState("loading (4 sec)...");

    async function myAsyncEffect() {
        const firebasedata = await firestore().collection('Courses').doc(user.uid).get();
        const count = Object.values(firebasedata.data()).filter(v => v).length * 0.25;
        setProgress(count)
        // Alert.alert(JSON.stringify(count))
    }
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            myAsyncEffect()
        });
        return unsubscribe;
    }, [navigation]);


    return (
        <>
            <StatusBar barStyle="dark-content" />
            <ScrollView style={styles.container}>
                <View>
                    <Text style={styles.headerTxt}>Good job today! Let's take things one day
                    at a time!
                </Text>
                    <Text style={styles.headerTxt1}>Today's Stats</Text>
                    <View>
                        <ProgressCircle
                            style={{ height: 150, marginBottom: 20, }}
                            progress={progress}
                            progressColor={'#7DCEA0'}
                            strokeWidth={10}
                        />
                        <Text style={styles.dataTxt}>{progress * 100}% Done!</Text>
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
        </>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 20,
    },
    ProfileModal: {
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
        fontFamily: 'Montserrat-Bold',
        letterSpacing: 1,
        fontSize: 22,
        marginBottom: 20,
        marginTop: 10,
    },
    headerTxt1: {
        fontFamily: 'Montserrat-SemiBold',
        letterSpacing: 1,
        fontSize: 20,
        marginBottom: 20,
        color: "#828282",
    },
    titleTxt: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        marginBottom: 20,
        letterSpacing: 1,
        color: "#828282",
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
        marginBottom: 20,
        marginRight: 'auto',

    }
});