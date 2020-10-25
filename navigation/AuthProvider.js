import React, { createContext, useState } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [value, setValue] = useState({
        key1: false,
        key2: false,
        key3: false,
        key4: false,
    })
    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password);
                    } catch (e) {
                        console.log(e);
                    }
                },
                register: async (email, password) => {
                    try {
                        // Alert.alert(JSON.stringify(user.uid))
                        await auth().createUserWithEmailAndPassword(email, password);
                        await firestore()
                            .collection('Courses')
                            .doc(user.uid)
                            .set(value);

                    } catch (e) {
                        console.log(e);
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut();
                    } catch (e) {
                        console.log(e);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}