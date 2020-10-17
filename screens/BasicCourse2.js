import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import LinearGradient from 'react-native-linear-gradient';

const BasicCourse2Screen = () => {
    const { user } = useContext(AuthContext);
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
                <View>
                    <Text>? completed</Text>
                </View>
                <View>
                    <Text style={styles.infoTxt}>wake up at 8 - 9 am everyday</Text>
                    <Text style={styles.infoTxt}>go to sleep between 9pm - 12am</Text>
                    <Text style={styles.infoTxt}>eat 3 meals a day</Text>
                    <Text style={styles.infoTxt}>drink atleast 2 cups of water</Text>
                </View>
            </ScrollView>
        </LinearGradient>
    );
}

export default BasicCourse2Screen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        marginVertical: 100,
        marginHorizontal: 20,
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
    infoTxt: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 18,
        margin: 10,
        marginLeft: 20,
        letterSpacing: 1,
        color: "#fff"
    },
})