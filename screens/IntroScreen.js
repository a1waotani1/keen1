import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
} from 'react-native';

import { Dimensions } from 'react-native';

const IntroScreen = ({ navigation }) => {
    const { width, height } = Dimensions.get('window');
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView
                    style={{ flex: 1 }}
                    horizontal={true}
                    scrollEventThrottle={16}
                    pagingEnabled={true}
                >
                    <View style={{ width, height }}>
                        <View style={styles.wrapper}>
                            <Text style={styles.header}>Welcome to {"\n"}keen</Text>

                        </View>
                    </View>
                    <View style={{ width, height }}>
                        <View style={styles.wrapper}>
                            <Text style={styles.header}>keen is an app made{"\n"}to make your life{"\n"}a little bit easier</Text>
                        </View>
                    </View>
                    <View style={{ width, height }}>
                        <View style={styles.wrapper}>
                            <Text style={styles.header}>INTRESTED? {"\n"}let’s get started</Text>
                            <TouchableOpacity style={styles.StartBtn} onPress={() => navigation.navigate("Login")}><Text style={styles.btnTxt}>GET STARTED</Text></TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};
export default IntroScreen;

const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 200,
        margin: 20,
    },
    header: {
        fontFamily: "Montserrat-SemiBold",
        fontSize: 35,
        letterSpacing: 2,

    },
    StartBtn: {
        backgroundColor: '#7DCEA0',
        padding: 20,
        borderRadius: 32,
        marginTop: 200,
    },
    btnTxt: {
        textAlign: 'center',
        fontSize: 20,
        fontFamily: "Montserrat-SemiBold",
    },
});
