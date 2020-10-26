import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import { ScrollView } from 'react-native-gesture-handler';
import IonIcons from 'react-native-vector-icons/Ionicons';

const SettingScreen = () => {
    const { user } = useContext(AuthContext);
    return (
        <ScrollView style={styles.container}>
            <View>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
                    <IonIcons name="notifications" size={30} color="#333" />
                    <Text style={styles.itemTxt}>Notifications</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
                    <IonIcons name="lock-closed" size={30} color="#333" />
                    <Text style={styles.itemTxt}>Privacy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
                    <IonIcons name="person-circle" size={30} color="#333" />
                    <Text style={styles.itemTxt}>Account</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
                    <IonIcons name="language" size={30} color="#333" />
                    <Text style={styles.itemTxt}>Language</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
                    <IonIcons name="information-circle" size={30} color="#333" />
                    <Text style={styles.itemTxt}>About</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 30 }}>
                    <IonIcons name="person-add" size={30} color="#333" />
                    <Text style={styles.itemTxt}>Invite Friends</Text>
                </TouchableOpacity>
                <View style={{ alignItems: "center", fontFamily: "Montserrat-Regular", }}>
                    <Text style={{ marginBottom: 10, fontSize: 18 }}>Logged in as</Text>
                    <Text style={{ marginBottom: 10, fontSize: 18 }}>{user.email}</Text>
                    <Text style={{ marginBottom: 10, fontSize: 18 }}>version 0.0.1</Text>
                </View>

            </View>
        </ScrollView>
    );
}

export default SettingScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 20,
    },
    itemTxt: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 18,
        letterSpacing: 1,
        marginLeft: 20,
    },
})