import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { register } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>create a new account</Text>

            <TextInput style={styles.input}
                placeholder="メール"
                keyboardType="email-address"
                onChangeText={(userEmail) => setEmail(userEmail)}
                autoCapitalize="none"
                autoCorrect={false}
            />

            <TextInput style={styles.input}
                placeholder="パスワード"
                onChangeText={(userPassword) => setPassword(userPassword)}
                secureTextEntry />

            <TextInput style={styles.input}
                placeholder="パスワードの確認"
                onChangeText={(userPassword) => setPassword(userPassword)}
                secureTextEntry />

            <View style={styles.BtnContainer}>

                <TouchableOpacity style={styles.UsrBtn1}
                    onPress={() => register(email, password)}>
                    <Text style={styles.btnTxt}>sign up</Text>
                </TouchableOpacity>

            </View>
        </View>

    );
};

export default RegisterScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 30,
        letterSpacing: 2,
        marginBottom: 80,
    },
    input: {
        width: "90%",
        backgroundColor: '#fff',
        marginBottom: 30,
        borderRadius: 10,
        borderColor: '#B6B6B6',
        borderWidth: 1,
        padding: 15,
    },
    UsrBtn1: {
        backgroundColor: '#FCD46F',
        width: 200,
        padding: 12,
        marginBottom: 60,
        borderRadius: 32,
        marginTop: 50,
    },

    BtnContainer: {
        alignItems: 'center',
    },
    btnTxt: {
        fontFamily: 'Montserrat-SemiBold',
        letterSpacing: 2,
        fontSize: 20,
        textAlign: 'center',
    },
});
