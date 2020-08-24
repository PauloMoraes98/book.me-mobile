import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/api';

const AuthContext = createContext({user: {}, loading: false, login: Promise, logout: Function});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      setLoading(true);

      const storagedEmail = await AsyncStorage.getItem('@BookmeAuth:email');
      const storagedName = await AsyncStorage.getItem('@BookmeAuth:name');
      const storagedToken = await AsyncStorage.getItem('@BookmeAuth:token');

      if(storagedEmail && storagedName && storagedToken) {
        setUser({
          email: storagedEmail,
          name: storagedName
        });

        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);
  
  async function login(email, password) {
    try {
      setLoading(true);

      const response = await api.post('/login', {
        email,
        password
      });

      setUser({
        name: response.data.name,
        email: response.data.email
      });
      
      
      await AsyncStorage.setItem('@BookmeAuth:email', response.data.email);
      await AsyncStorage.setItem('@BookmeAuth:name', response.data.name);
      await AsyncStorage.setItem('@BookmeAuth:token', response.data.token);

      api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

      setLoading(false);
    } catch (e) {
      alert('Não foi possível Realiar o login. Verifique seu usuário e senha e tente novamente!');
      console.log(e);
    }
  }

  function logout() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }
  
  return (
    <AuthContext.Provider value={{signed: !!user, user, loading, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
