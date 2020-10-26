import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import { ScrollView } from 'react-native-gesture-handler';

const CommunityScreen = () => {
    const { user } = useContext(AuthContext);
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.headerTxt}>Categories</Text>
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={{
                    height: 60,
                    margin: 10,
                    borderRadius: 20,
                    width: 160,
                    backgroundColor: "#E5E5E5",
                    padding: 20,
                    alignItems: "center",
                }}>
                    <Text style={styles.categoryTxt}>Students</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    height: 60,
                    margin: 10,
                    borderRadius: 20,
                    width: 160,
                    backgroundColor: "#6D68B1",
                    padding: 20,
                    alignItems: "center",
                }}>
                    <Text style={styles.categoryTxt}>Gamers</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    height: 60,
                    margin: 10,
                    borderRadius: 20,
                    width: 160,
                    backgroundColor: "#E99368",
                    padding: 20,
                    alignItems: "center",
                }}>
                    <Text style={styles.categoryTxt}>Foodies</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    height: 60,
                    margin: 10,
                    borderRadius: 20,
                    width: 160,
                    backgroundColor: "#68B17C",
                    padding: 20,
                    alignItems: "center",
                }}>
                    <Text style={styles.categoryTxt}>Tech</Text>
                </TouchableOpacity>
                {/* <Image
                    style={styles.groupImg}
                    source={{
                        uri: 'https://media.istockphoto.com/vectors/day-and-night-vector-id938657526?k=6&m=938657526&s=612x612&w=0&h=eYOb7NJkQS_v-fpZI9BOMasC-7vVGXq7EY4TcxRjsSg=',
                    }}></Image> */}
            </ScrollView>
            <View>
                <Text style={styles.headerTxt}>Your Communities</Text>
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View
                    style={{
                        height: 200,
                        margin: 10,
                        borderRadius: 20,
                        width: 160,
                        backgroundColor: "#FDA452",
                        padding: 20,
                        alignItems: "center",
                    }}>
                    <Text style={{
                        fontFamily: "Montserrat-SemiBold",
                        fontSize: 30,
                        color: "#fff",
                        textAlign: "center"
                    }}>Early Risers</Text>
                    <TouchableOpacity style={styles.joinGroupBtn}>
                        <Text style={styles.joinGroupTxt}>Join Group</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        height: 200,
                        margin: 10,
                        borderRadius: 20,
                        width: 160,
                        backgroundColor: "#D95B63",
                        padding: 20,
                        alignItems: "center",
                    }}>
                    <Text style={{
                        fontFamily: "Montserrat-SemiBold",
                        fontSize: 30,
                        color: "#fff",
                        textAlign: "center"
                    }}>Get Fit Group</Text>
                    <TouchableOpacity style={styles.joinGroupBtn}>
                        <Text style={styles.joinGroupTxt}>Join Group</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        height: 200,
                        margin: 10,
                        borderRadius: 20,
                        width: 160,
                        backgroundColor: "#6D68B1",
                        padding: 20,
                        alignItems: "center",
                    }}>
                    <Text style={{
                        fontFamily: "Montserrat-SemiBold",
                        fontSize: 30,
                        color: "#fff",
                        textAlign: "center"
                    }}>Anime Lover</Text>
                    <TouchableOpacity style={styles.joinGroupBtn}>
                        <Text style={styles.joinGroupTxt}>Join Group</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View>
                <Text style={styles.headerTxt}>Suggested Communities</Text>
            </View>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <View
                    style={{
                        height: 200,
                        margin: 10,
                        borderRadius: 20,
                        width: 160,
                        backgroundColor: "#FF9692",
                        padding: 20,
                        alignItems: "center",
                    }}>
                    <Text style={{
                        fontFamily: "Montserrat-SemiBold",
                        fontSize: 30,
                        color: "#fff",
                        textAlign: "center"
                    }}>All Girls Group</Text>
                    <TouchableOpacity style={styles.joinGroupBtn}>
                        <Text style={styles.joinGroupTxt}>Join Group</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        height: 200,
                        margin: 10,
                        borderRadius: 20,
                        width: 160,
                        backgroundColor: "#CFD8DC",
                        padding: 20,
                        alignItems: "center",
                    }}>
                    <Text style={{
                        fontFamily: "Montserrat-SemiBold",
                        fontSize: 30,
                        color: "#fff",
                        textAlign: "center"
                    }}>Kpop Stans</Text>
                    <TouchableOpacity style={styles.joinGroupBtn}>
                        <Text style={styles.joinGroupTxt}>Join Group</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        height: 200,
                        margin: 10,
                        borderRadius: 20,
                        width: 160,
                        backgroundColor: "#EB5757",
                        padding: 20,
                        alignItems: "center",
                    }}>
                    <Text style={{
                        fontFamily: "Montserrat-SemiBold",
                        fontSize: 30,
                        color: "#fff",
                        textAlign: "center"
                    }}>USA TEAM</Text>
                    <TouchableOpacity style={styles.joinGroupBtn}>
                        <Text style={styles.joinGroupTxt}>Join Group</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
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
    },
    categoryCnt: {
        height: 60,
        margin: 10,
        borderRadius: 20,
        width: 160,
        backgroundColor: "#E5E5E5",
        padding: 20,
        alignItems: "center",
    },
    categoryTxt: {
        fontFamily: "Montserrat-Medium",
        fontSize: 20,
    },
    joinGroupBtn: {
        backgroundColor: "#B6B6B6",
        paddingHorizontal: 10,
        borderRadius: 10,
        paddingVertical: 5,
        marginTop: 40
    },
    joinGroupTxt: {
        fontFamily: "Montserrat-Medium",
        fontSize: 20,
    }
})
