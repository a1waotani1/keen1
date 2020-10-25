import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import firestore from '@react-native-firebase/firestore';


const CourseScreen = () => {
    const { user } = useContext(AuthContext);
    const [value, setValue] = useState({
        key1: false,
        key2: false,
        key3: false,
        key4: false,
    })

    useEffect(() => { myAsyncEffect() });
    async function myAsyncEffect() {
        const firebasedata = await firestore().collection('Courses').doc(user.uid).get()
        // Alert.alert(JSON.stringify(firebasedata.data().key1))
        const hoge = firebasedata.data() ? true : false
        if (hoge == false) {
            await firestore()
                .collection('Courses')
                .doc(user.uid)
                .set(value);
        } else {
            setValue(firebasedata.data());

            // Alert.alert('error')
        }

    }

    const toggleComplete = async (key) => {
        let tempValue = value;
        tempValue[key] = !tempValue[key];
        setValue(tempValue);

        await firestore()
            .collection('Courses')
            .doc(user.uid)
            .update(value);
    }


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
                            value={value.key1}
                            onValueChange={() => toggleComplete("key1")}
                            tintColor="#333"
                            onCheckColor="#fff"
                            onTintColor="#fff"
                        />
                        <Text style={styles.infoTxt}>wake up at 8 - 9 am everyday</Text>
                    </View>

                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <CheckBox
                            disabled={false}
                            value={value.key2}
                            onValueChange={() => toggleComplete("key2")}
                            // onValueChange={() => setValue(!value[key1, key2, key3, key4])}
                            tintColor="#333"
                            onCheckColor="#fff"
                            onTintColor="#fff"
                        />
                        <Text style={styles.infoTxt}>go to sleep between 9pm - 12am</Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <CheckBox
                            disabled={false}
                            value={value.key3}
                            onValueChange={() => toggleComplete("key3")}
                            tintColor="#333"
                            onCheckColor="#fff"
                            onTintColor="#fff"
                        />
                        <Text style={styles.infoTxt}>eat 3 meals a day</Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: 10 }}>
                        <CheckBox
                            disabled={false}
                            value={value.key4}
                            onValueChange={() => toggleComplete("key4")}
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