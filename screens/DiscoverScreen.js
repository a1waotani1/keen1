import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { AuthContext } from '../navigation/AuthProvider';
import LinearGradient from 'react-native-linear-gradient';
import IonIcons from 'react-native-vector-icons/Ionicons';

const DiscoverScreen = ({ navigation }) => {
    const { user } = useContext(AuthContext);
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <ScrollView style={styles.container}>
            <Modal visible={modalOpen}
                animationType="slide">
                <View>
                    <View styles={styles.headerContainer}>
                        <LinearGradient
                            colors={['#7DCEA0', '#FCD46F']}
                            style={styles.linearGradient2}
                        >
                            <View>
                                <TouchableOpacity style={{ alignSelf: 'flex-end', marginRight: 30, paddingTop: 10 }} onPress={() => setModalOpen(false)} >
                                    <IonIcons name="close-circle" size={30} color="rgba(102,102,102,0.4)" />
                                </TouchableOpacity></View>
                            <View style={styles.headerItems}>
                                <Text style={styles.headerTxt}>
                                    Basic Course
                                 </Text>
                                <Text style={styles.subTxt}>
                                    The basic course was created in order to help get you started
                                    on your new keen journey of a better self. You'll be
                                    able to wake up earlier, stay hydrated and more
                                 </Text>
                                <TouchableOpacity style={{
                                    flexDirection: "row", alignItems: 'center', backgroundColor: "#fff", paddingHorizontal: 20, borderRadius: 30, paddingVertical: 5, alignSelf: 'flex-start',
                                    marginLeft: 20, marginTop: 50,
                                }}>
                                    <IonIcons name="share" size={20} />
                                    <Text style={{ fontFamily: 'Montserrat-SemiBold', fontSize: 14, paddingLeft: 4 }}>Share</Text>
                                </TouchableOpacity>
                            </View>
                        </LinearGradient>
                    </View>
                </View>
            </Modal>
            <View style={styles.headerContainer}>
                <LinearGradient
                    colors={['#7DCEA0', '#FCD46F']}
                    style={styles.linearGradient}>
                    <View style={styles.headerItems}>
                        <Text style={styles.headerTxt}>
                            Basic Course
                    </Text>
                        <Text style={styles.headerTxt2}>
                            A way to get things started
                    </Text>
                        <TouchableOpacity style={styles.StartBtn}
                            onPress={() => setModalOpen(true)}>
                            <Text style={styles.btnTxt}>START NOW
                                </Text>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </View>
            <View style={styles.cardsWrapper}>
                <Text
                    style={{
                        fontSize: 16,
                        fontFamily: 'Montserrat-SemiBold',
                        color: '#333',
                        marginTop: 20,
                        marginLeft: 10,
                        marginBottom: 10,
                    }}>
                    The best courses to start with
              </Text>
            </View>
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <TouchableOpacity>
                    <LinearGradient
                        colors={['#6D68B1', '#6887F3']}
                        style={styles.linearGradient1}
                    >
                        <Text style={styles.titleTxt}>Sleep{"\n"}Course</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity>
                    <LinearGradient
                        colors={['#D95B63', '#FCD46F']}
                        style={styles.linearGradient1}
                    >
                        <Text style={styles.titleTxt}>School Course</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity>
                    <LinearGradient
                        colors={['#D26568', '#9B51E0']}
                        style={styles.linearGradient1}
                    >
                        <Text style={styles.titleTxt}>Zen{"\n"}Course</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </ScrollView>
            <TouchableOpacity>
                <LinearGradient
                    colors={['#FCD071', '#FDA452']}
                    style={styles.linearGradient}>
                    <View style={styles.headerItems}>
                        <Text style={styles.headerTxt}>
                            Fun Fact!
                    </Text>
                        <Text style={styles.headerTxt2}>
                            Did you know? {"\n"}
                        Optimism may help you live longer !
                    </Text>
                    </View>
                </LinearGradient>
            </TouchableOpacity>
        </ScrollView >
    );
}

export default DiscoverScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    linearGradient: {
        height: 200,
        marginTop: 10,
    },
    headerItems: {
        alignItems: 'center',
    },
    headerTxt: {
        fontSize: 22,
        fontFamily: 'Montserrat-SemiBold',
        color: '#333',
        marginTop: 30,
    },
    headerTxt2: {
        fontSize: 18,
        fontFamily: 'Montserrat-SemiBold',
        color: '#333',
        marginTop: 5,
        justifyContent: 'center',
        textAlign: 'center',
    },
    subTxt: {
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        color: '#333',
        marginTop: 15,
        justifyContent: 'center',
        textAlign: 'center',
        lineHeight: 30,
        margin: 20,
    },
    StartBtn: {
        backgroundColor: '#EB9969',
        marginTop: 30,
        borderRadius: 10,
        padding: 10,
    },
    linearGradient1: {
        height: 200,
        margin: 10,
        borderRadius: 20,
        width: 160,
    },
    btnTxt: {
        fontSize: 16,
        fontFamily: 'Montserrat-SemiBold',
        textAlign: 'center',
        letterSpacing: 1,
        color: '#fff',
    },
    titleTxt: {
        fontSize: 22,
        fontFamily: 'Montserrat-SemiBold',
        color: '#fff',
        margin: 20,
    },
    linearGradient2: {
        height: 400,
        paddingTop: 40,
    },
})