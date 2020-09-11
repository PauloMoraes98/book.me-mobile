import React, { useState, useEffect } from 'react';
import { View, Image, TextInput, Text, KeyboardAvoidingView, TouchableOpacity, Linking } from 'react-native';
import * as Location from 'expo-location';
import { useAuth } from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api/index';

import styles from './styles';

import logoImg from '../../assets/logo/book.me.png';

export default function Register() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phone, setPhone] = useState();
  const [city, setCity] = useState();
  const [uf, setUf] = useState();
  const [userPos, setUserPos] = useState(null);
  const [setErrorMsg] = useState(null);
  const { signed, user, login } = useAuth();
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }
 
  useEffect(() => {
    async function handleLoaction() {
      const { status } = await Location.requestPermissionsAsync();
  
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
  
      const { coords } = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
  
      const { latitude, longitude } = coords;
  
      console.log(`latitude ${latitude}`);
      console.log(`longitude ${longitude}`);
  
      setUserPos({
        latitude,
        longitude,
      });
    }

    handleLoaction();
  }, []);

  async function handleNewRegister() {

    const { latitude, longitude } = userPos;

    const data = {name, email, password, phone, city, uf, latitude, longitude};

    try {
      const newUser = await api.post('/user', data);

      if(newUser)
        await login(email, password);

    }catch(err) {
      console.log(err)
      alert('Erro ao cadastrar usuário, tente novamente.');
    }
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.containerView}>
        <View style={styles.logo}>
          <Image source={logoImg} />    
        </View>

        <TouchableOpacity onPress={() => ImagePicker.launchCamera}>
          <View style={styles.photograph}>
            <Image source={{ uri: "https://jhowendoors.com/wp-content/uploads/2019/03/man-avatar-placeholder.png" }} style={styles.avatar}/> 
          </View>
        </TouchableOpacity>
        
        <View style={styles.formInput}>
          <Text style={styles.textTitle}>Nome </Text>
          <TextInput
            style={styles.textInput}
            placeholder={"Insira seu nome"}
            value={name}
            onChangeText={setName}       
            autoCapitalize={"none"}
            returnKeyType={"next"}  
          />
        </View>

        <View style={styles.formInput}>
          <Text style={styles.textTitle}>Email </Text>
          <TextInput
            style={styles.textInput}
            placeholder={"Insira seu email"}
            value={email}
            onChangeText={setEmail}       
            autoCapitalize={"none"}
            keyboardType={"email-address"}
            returnKeyType={"next"}           
          />
        </View>

        <View style={styles.formInput}>
          <Text style={styles.textTitle}>Senha </Text>
          <TextInput
            style={styles.textInput}
            placeholder={"Insira sua senha"}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}       
            autoCapitalize={"none"}
            returnKeyType={"next"}         
          />
        </View>

        <View style={styles.formInput}>
          <Text style={styles.textTitle}>Celular </Text>
          <TextInput
            style={styles.textInput}
            placeholder={"Insira seu telefone"}
            value={phone}
            onChangeText={setPhone}       
            autoCapitalize={"none"}
            keyboardType={"phone-pad"}
            returnKeyType={"next"}         
          />
        </View>

        <View style={styles.formInputLocation}>
          <View style={styles.formInputCity}>
            <Text style={styles.textTitle}>Cidade </Text>
            <TextInput
              style={styles.textInput}
              placeholder={"Insira sua cidade"}
              value={city}
              onChangeText={setCity}       
              autoCapitalize={"none"}
              returnKeyType={"next"}      
            />
          </View>

          <View style={styles.formInputState}>
            <Text style={styles.textTitle}>UF </Text>
            <TextInput
              style={styles.textInput}
              placeholder={"Estado"}
              value={uf}
              onChangeText={setUf}       
              autoCapitalize={"none"}
              returnKeyType={"next"}    
            />
          </View>
        </View>

        <View style={styles.formButton}>
          <View style={styles.formButtonBack}>
            <TouchableOpacity style={styles.button} onPress={handleBack}>
              <View style={styles.actionBack}> 
                <Text style={styles.actionTextBack}>Voltar</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.formButtonRegister}>
            <TouchableOpacity style={styles.button} onPress={handleNewRegister}>
              <View style={styles.actionRegister}> 
                <Text style={styles.actionTextRegister}>Registrar</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
