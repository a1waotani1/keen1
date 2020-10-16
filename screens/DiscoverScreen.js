import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import LinearGradient from 'react-native-linear-gradient';

const DiscoverScreen = ({ navigation }) => {
    const { user } = useContext(AuthContext);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <LinearGradient
                    colors={['#7DCEA0', '#FCD46F']}
                    style={styles.linearGradient}>
                    <View style={styles.headerItems}>
                        <Text style={styles.headerTxt}>
                            Basic Course
                    </Text>
                        <Text style={styles.headerTxt2}>
                            A way to get things started
                    </Text>
                        <TouchableOpacity style={styles.StartBtn}
                            onPress={() => navigation.navigate("Basic")}>
                            <Text style={styles.btnTxt}
                            >
                                START NOW
                                </Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
            <View style={styles.cardsWrapper}>
                <Text
                    style={{
                        fontSize: 16,
                        fontFamily: 'Montserrat-SemiBold',
                        color: '#333',
                        marginTop: 20,
                        marginLeft: 10,
                        marginBottom: 10,
                    }}>
                    The best courses to start with
              </Text>
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <TouchableOpacity>
                    <LinearGradient
                        colors={['#6D68B1', '#6887F3']}
                        style={styles.linearGradient1}
                    >
                        <Text style={styles.titleTxt}>Sleep{"\n"}Course</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity>
                    <LinearGradient
                        colors={['#D95B63', '#FCD46F']}
                        style={styles.linearGradient1}
                    >
                        <Text style={styles.titleTxt}>School Course</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity>
                    <LinearGradient
                        colors={['#D26568', '#9B51E0']}
                        style={styles.linearGradient1}
                    >
                        <Text style={styles.titleTxt}>Zen{"\n"}Course</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </ScrollView>

        </ScrollView>
    );
}

export default DiscoverScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    linearGradient: {
        height: 200,
        marginTop: 10,
    },
    headerItems: {
        alignItems: 'center',
    },
    headerTxt: {
        fontSize: 22,
        fontFamily: 'Montserrat-SemiBold',
        color: '#333',
        marginTop: 30,
    },
    headerTxt2: {
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',
        color: '#333',
        marginTop: 5,
    },
    StartBtn: {
        backgroundColor: '#EB9969',
        marginTop: 30,
        borderRadius: 10,
        padding: 10,
    },
    linearGradient1: {
        height: 200,
        margin: 10,
        borderRadius: 20,
        width: 180,
    },
    btnTxt: {
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        letterSpacing: 1,
        color: '#fff',
    },
    titleTxt: {
        fontSize: 22,
        fontFamily: 'Montserrat-SemiBold',
        color: '#fff',
        margin: 20,
    }
})