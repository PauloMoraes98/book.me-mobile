import React, { useState, useRef } from 'react';
import { Feather } from '@expo/vector-icons';
import { KeyboardAvoidingView, Keyboard, View, TextInput, TouchableWithoutFeedback, Text, Image, Linking, TouchableOpacity } from 'react-native';
import { useAuth } from '../../contexts/auth';


import logoImg from '../../assets/logo/bigLogo.png';

import styles from './styles';

export default function Login() {
  const { signed, user, login } = useAuth();

  console.log(signed);
  console.log(user);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordInput = useRef();


  async function handleLogin()   {
    await login(email, password);
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
