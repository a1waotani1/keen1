import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import IonIcons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import firestore from '@react-native-firebase/firestore';

const ProfileScreen = () => {
    const { user, logout } = useContext(AuthContext);
    const [progress, setProgress] = useState(0)

    async function myAsyncEffect() {
        const firebasedata = await firestore().collection('courses').doc(user.uid).get();
        const count = Object.values(firebasedata.data()).filter(v => v).length * 0.25;
        setProgress(count)
        // Alert.alert(JSON.stringify(count))
    }
    useEffect(() => { myAsyncEffect() });

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: "row", alignItems: 'center', marginBottom: 20 }}>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://www.htmlcsscolor.com/preview/gallery/7DCEA0.png',
                    }}></Image>
                <Text style={styles.nameTxt}>{user.email}</Text>
            </View>
            <View>
                <Text style={styles.titleTxt}>Ongoing course</Text>
                <TouchableOpacity>
                    <LinearGradient
                        colors={['#7DCEA0', '#FCD46F']}
                        style={styles.linearGradient}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}>
                        <Text style={styles.courseTxt}>Basic Course</Text>
                        <Text style={styles.courseTxt}>{progress * 100}%</Text>
                    </LinearGradient>

                </TouchableOpacity>
                <Text style={styles.titleTxt}>Amount of courses finished : 1</Text>
            </View>
            <View style={{ flexDirection: "column" }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <IonIcons name="settings-sharp" size={30} color="#333" />
                    <Text style={styles.itemTxt}>settings</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <IonIcons name="help-circle" size={30} color="#333" />
                    <Text style={styles.itemTxt}>help & feedback</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => logout()}
                    style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}
                >
                    <IonIcons name="exit" size={30} color="#333" />
                    <Text style={styles.itemTxt}>logout</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 20,
    },
    tinyLogo: {
        width: 80,
        height: 80,
        borderRadius: 100,
    },
    nameTxt: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        letterSpacing: 1,
        paddingLeft: 20,
    },
    itemTxt: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 20,
        letterSpacing: 1,
        marginLeft: 20,

    },
    linearGradient: {
        height: 80,
        borderRadius: 10,
        marginBottom: 10,
        padding: 10,
    },
    titleTxt: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 16,
        marginBottom: 20,
        letterSpacing: 1,
    },
    courseTxt: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        letterSpacing: 1,
        color: "#fff",
        paddingBottom: 5,
        paddingLeft: 10,
    },
})