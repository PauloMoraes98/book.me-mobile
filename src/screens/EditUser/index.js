import React, { useState, useEffect } from 'react';
import { View, Image, TextInput, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import * as Location from 'expo-location';
import { useAuth } from '../../contexts/auth';
import { useNavigation, useRoute } from '@react-navigation/native';


import api from '../../services/api/index';

import styles from './styles';

import logoImg from '../../assets/logo/book.me.png';

export default function Register() {
  const [name, setName] = useState();
  const [bio, setBio] = useState();
  const [phone, setPhone] = useState();
  const [city, setCity] = useState();
  const [uf, setUf] = useState();
  const [selectedUser, setSelectedUser] = useState([]);
  const [userPos, setUserPos] = useState(null);
  const [setErrorMsg] = useState(null);
  const { user } = useAuth();
  const navigation = useNavigation();
  const route = useRoute();

  const routeParams = route.params;

  useEffect(() => {
    async function loadUser() {
      setSelectedUser(routeParams.selectedUser);
    }

    loadUser();
    
    setName(selectedUser.name);
    setBio(selectedUser.bio);
    setPhone(selectedUser.phone);
    setCity(selectedUser.city);
    setUf(selectedUser.uf);  
  }, [selectedUser]);

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

  async function handleEdit() {

    const { latitude, longitude } = userPos;

    const data = {name, bio, phone, city, uf, latitude, longitude};

    try {
      const newUser = await api.put('/user', data);

    }catch(err) {
      console.log(err)
      alert('Erro ao atualizar as informações do usuário, tente novamente.');
    }

    navigation.goBack();
    setName('');
    setBio('');
    setPhone('');
    setCity('');
    setUf('');
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
          <Text style={styles.textTitle}>Biografia </Text>
          <TextInput
            style={styles.textInput}
            placeholder={"Insira sua biografia"}
            value={bio}
            onChangeText={setBio}       
            autoCapitalize={"none"}
            returnKeyType={"next"}  
            multiline
            numberOfLines={5}  
            maxLength={220}
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
          <View style={styles.formButtonEdit}>
            <TouchableOpacity style={styles.button} onPress={handleEdit}>
              <View style={styles.actionEdit}> 
                <Text style={styles.actionTextEdit}>Concluir</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}
