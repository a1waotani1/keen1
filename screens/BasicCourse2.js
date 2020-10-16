import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import LinearGradient from 'react-native-linear-gradient';

const BasicCourse2Screen = () => {
    const { user } = useContext(AuthContext);
    return (
        <ScrollView>
            <LinearGradient
                colors={['#7DCEA0', '#6D68B1']}
                style={styles.container}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <View style={styles.headerContainer}>
                    <Text style={styles.headerTxt}>Basic Course</Text>
                    <Text style={styles.headerSubTxt}>A way to get things started</Text>
                </View>
            </LinearGradient>
        </ScrollView>
    );
}

export default BasicCourse2Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linearGradient: {

    },
    headerContainer: {
        marginVertical: 60,
        marginHorizontal: 20,
    },
    headerTxt: {
        fontFamily: "Montserrat-Bold",
        letterSpacing: 1,
        fontSize: 24,
        color: "#fff"
    },
    headerSubTxt: {
        fontFamily: "Montserrat-Bold",
        letterSpacing: 1,
    }
})