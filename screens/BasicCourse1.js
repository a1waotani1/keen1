import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Button } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import LinearGradient from 'react-native-linear-gradient';
import IonIcons from 'react-native-vector-icons/Ionicons';
import CheckBox from '@react-native-community/checkbox';



const BasicCourse = ({ navigation }) => {

    const { user } = useContext(AuthContext);
    return (
        <ScrollView style={styles.container}>

            <View>
                <Text style={styles.titleTxt}>steps</Text>
            </View>
            <View >
                <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text style={styles.infoTxt}>wake up at 8 - 9 am everyday</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text style={styles.infoTxt}>go to sleep between 9pm - 12am</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text style={styles.infoTxt}>eat 3 meals a day</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <CheckBox
                        disabled={false}
                        value={toggleCheckBox}
                        onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    />
                    <Text style={styles.infoTxt}>drink atleast 2 cups of water</Text>
                </View>
            </View>
        </ScrollView>
    );
}

export default BasicCourse;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    linearGradient: {
        height: 200,
        marginBottom: 20,
        marginTop: 20
    },
    headerItems: {
        alignItems: 'center'
    },
    headerTxt: {
        fontSize: 22,
        fontFamily: 'Montserrat-SemiBold',
        color: '#333',
        marginTop: 30
    },
    headerTxt2: {
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        color: '#333',
        marginTop: 5,
        textAlign: "center",
    },
    titleTxt: {
        fontSize: 22,
        fontFamily: 'Montserrat-SemiBold',
        color: '#333',
        paddingHorizontal: 20,
        letterSpacing: 1,
    },
    infoTxt: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 18,
        margin: 10,
        marginLeft: 20,
        letterSpacing: 1,
    }
})