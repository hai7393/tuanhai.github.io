import React, { createContext, useState } from 'react'
import { auth } from '../../firebase';
import { useNavigation } from '@react-navigation/native';
import {showNotice} from '../../lib'
import {MESSAGE} from '../../contains'
export const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
    //const navigation   = useNavigation();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    // const nextLogin = () => {
    //     navigation.navigate('LoginScreen')
    //   }
    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                register: async (email, password) => {
                    setLoading(true);
                    await auth.createUserWithEmailAndPassword(email, password)
                        .then((userCredential) => {
                            // Signed in 
                            var user = userCredential.user;
                            //nextLogin()
                            showNotice(MESSAGE.registerSuccess)
                            // ...
                        })
                        .catch((error) => {
                            showNotice(error.message,true)
                            // ..
                        });
                    setLoading(false);
                },
                login: async (email, password) => {
                    setLoading(true);
                    await auth.signInWithEmailAndPassword(email, password)
                        .then((userCredential) => {
                            // Signed in
                            var user = userCredential.user;
                            setUser(user);
                            // ...
                        })
                        .catch((error) => {
                            showNotice(error.message,true)
                        });
                    setLoading(false);

                },
                logout: async () => {
                    setLoading(true);
                  await  auth.signOut().then(() => {
                        setUser(null)
                      }).catch((error) => {
                        showNotice(error.message,true);
                      });
                    setLoading(false);

                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

