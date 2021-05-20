//import liraries
import React, { Component } from 'react';
import { useEffect } from 'react';
import { useState, createContext } from 'react';
import { login, register } from '../api/api';
import AsyncStorage from '@react-native-community/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [loginError, setLoginError] = useState(null);
    const [registerError, setRegisterError] = useState(null);

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                setCurrentUser,
                login: async (email, password) => {
                    setIsLoading(true);
                    const response = await login(email, password);
                    if(response){
                        setCurrentUser(response.currentUser);
                        await AsyncStorage.setItem('currentUser', JSON.stringify(response.currentUser));
                        const token = response.token;
                        if(token != undefined && token != ''){
                            await AsyncStorage.setItem('token', token);
                        }
                    }else{
                        console.log('ERROR: Invalid email or/and password.');
                        setLoginError('Invalid email or/and password.');
                    }
                    setIsLoading(false);
                },
                register: async (fullName, emailAddress, password, confirmPassword) => {
                    setIsLoading(true);
                    const response = await register(fullName, emailAddress, password, confirmPassword);

                    if(response){
                        console.log(response);
                        setCurrentUser(response);
                    }else{
                        setRegisterError('Something went wrong.');
                    }
                    setIsLoading(false);
                },
                logout: async () => {
                    await AsyncStorage.removeItem('currentUser');
                    await AsyncStorage.removeItem('token');
                    setCurrentUser(null);
                },
                isLoading,
                loginError,
                registerError
            }}>
            { children }
        </AuthContext.Provider>
    );
};

