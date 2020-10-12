import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const { login } = useContext(AuthContext);
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>keen</Text>
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
                secureTextEntry
            />

            <View style={styles.BtnContainer}>

                <TouchableOpacity style={styles.UsrBtn1}
                    onPress={() => login(email, password)}>
                    <Text style={styles.btnTxt}>ログイン</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.UsrBtn2}
                    onPress={() => navigation.navigate("SignUp")}>
                    <Text style={styles.btnTxt1}>Don't have an account? Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>

    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 40,
        letterSpacing: 2,
        marginBottom: 100,
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
        backgroundColor: '#7DCEA0',
        width: 200,
        padding: 12,
        marginBottom: 40,
        borderRadius: 32,
        marginTop: 50,
    },
    UsrBtn2: {
        marginBottom: 20,
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
    btnTxt1: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,

    }
});
