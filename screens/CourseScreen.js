import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';

const CourseScreen = () => {
    const { user } = useContext(AuthContext);
    const [value] = useState([false, false, false, false])
    return (
        <LinearGradient
            colors={['#7DCEA0', '#6D68B1']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
        >
            <ScrollView>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTxt}>Basic Course</Text>
                    <Text style={styles.headerSubTxt}>A way to get things started</Text>
                    <Text style={styles.headerSubTxt1}>4 steps</Text>
                </View>
                <View style={{ paddingBottom: 10 }}>
                    <Text style={styles.headerSubTxt2}>? completed</Text>
                </View>
                <View>

                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <CheckBox
                            disabled={false}
                            value={value[0]}
                            // onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            tintColor="#333"
                            onCheckColor="#fff"
                            onTintColor="#fff"
                        />
                        <Text style={styles.infoTxt}>wake up at 8 - 9 am everyday</Text>
                    </View>

                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <CheckBox
                            disabled={false}
                            value={value[1]}
                            // onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            tintColor="#333"
                            onCheckColor="#fff"
                            onTintColor="#fff"
                        />
                        <Text style={styles.infoTxt}>go to sleep between 9pm - 12am</Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <CheckBox
                            disabled={false}
                            value={value[2]}
                            // onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            tintColor="#333"
                            onCheckColor="#fff"
                            onTintColor="#fff"
                        />
                        <Text style={styles.infoTxt}>eat 3 meals a day</Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <CheckBox
                            disabled={false}
                            value={value[3]}
                            // onValueChange={(newValue) => setToggleCheckBox(newValue)}
                            tintColor="#333"
                            onCheckColor="#fff"
                            onTintColor="#fff"
                        />
                        <Text style={styles.infoTxt}>drink atleast 2 cups of water</Text>
                    </View>
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

export default CourseScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    headerContainer: {
        marginTop: 100,
    },
    headerTxt: {
        fontFamily: "Montserrat-Bold",
        letterSpacing: 1,
        fontSize: 24,
        color: "#fff"
    },
    headerSubTxt: {
        fontFamily: "Montserrat-SemiBold",
        letterSpacing: 1,
        marginTop: 10,
        fontSize: 18,
    },
    headerSubTxt1: {
        fontFamily: "Montserrat-Medium",
        letterSpacing: 1,
        marginTop: 10,
        fontSize: 16,
    },
    headerSubTxt2: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
    },
    infoTxt: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 18,
        margin: 10,
        marginLeft: 20,
        letterSpacing: 1,
        color: "#fff"
    },

})