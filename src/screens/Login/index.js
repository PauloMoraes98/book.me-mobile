import React, { useState, useRef } from 'react';
import { Feather } from '@expo/vector-icons';
import { AsyncStorage, KeyboardAvoidingView, Keyboard, View, TextInput, TouchableWithoutFeedback, Text, Image, Linking, TouchableOpacity } from 'react-native';

import api from '../../services/api';

import logoImg from '../../assets/logo/bigLogo.png';

import styles from './styles';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordInput = useRef();


  async function handleLogin()   {
    try {
      const response = await api.post('/login', {
        email,
        password
      });

      await AsyncStorage.setItem('email', response.data.email);
      await AsyncStorage.setItem('name', response.data.name);
      await AsyncStorage.setItem('token', response.data.token);

      console.log(response.data.email);
      console.log(response.data.name);
      console.log(response.data.token);
    } catch (e) {
      alert('Servidor indisponível, tente novamente!');
      console.log(e);
    }
  }
  
  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={styles.header}>
            <Image source={logoImg} />    
          </View>

          <View style={styles.body}>

            <Text style={styles.textTitle}>Login </Text>
            <View style={styles.formLogin}>
              <TextInput
                style={styles.textInputUser}
                value={email}
                onChangeText={setEmail}
                autoCapitalize={"none"}
                keyboardType={"email-address"}
                returnKeyType={"next"}
                onSubmitEditing={() => passwordInput.current.focus()}
                blurOnSubmit={false}
              />
              <Feather style={styles.iconLogin} name="user" size={28} color="#FFFFFF" />
            </View>

            <Text style={styles.textPassword}>Senha </Text>
            <View style={styles.formPassword}>
              <TextInput
                style={styles.textInputPassword}
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
                autoCorrect={false}
                ref={passwordInput}
                returnKeyType={"send"}
                onSubmitEditing={handleLogin}
              />
              <Feather style={styles.iconLogin} name="lock" size={28} color="#FFFFFF" />
            </View>

            <View style={styles.RememberPassword}> 
              <Text style={styles.textRememberPassword} onPress={() => Linking.openURL('#')}>
                Esqueci minha senha 
              </Text>
            </View>
            
            <TouchableOpacity style={styles.buttonEnter}>
              <View style={styles.action}> 
                <Text style={styles.actionText} onPress={handleLogin}>Entrar</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.register}> 
              <Feather style={styles.iconRegister} name="log-in" size={24} color="#FFFFFF" />
              <Text style={styles.textRegister} onPress={() => {}}>
                Não tenho cadastro
              </Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
