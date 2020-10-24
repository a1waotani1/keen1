import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import { ScrollView } from 'react-native-gesture-handler';

const CommunityScreen = () => {
    const { user } = useContext(AuthContext);
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.headerTxt}>Suggested Communities</Text>
            </View>
            <View>
                <Image
                    style={styles.groupImg}
                    source={{
                        uri: 'https://media.istockphoto.com/vectors/day-and-night-vector-id938657526?k=6&m=938657526&s=612x612&w=0&h=eYOb7NJkQS_v-fpZI9BOMasC-7vVGXq7EY4TcxRjsSg=',
                    }}></Image>
            </View>
        </ScrollView>
    );
}

export default CommunityScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        padding: 20,
    },
    headerTxt: {
        fontFamily: 'Montserrat-SemiBold',
        letterSpacing: 1,
        fontSize: 20,
        marginBottom: 20,
        marginTop: 10,
    },
    groupImg: {
        height: 200,
        borderRadius: 32,
    }
})
