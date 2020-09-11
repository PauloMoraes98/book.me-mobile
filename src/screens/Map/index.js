import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api';

import Logo from '../../assets/logo/book.me.svg';

import styles from './styles';

export default function Map() {
  const navigation = useNavigation();
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [users, setUsers] = useState([]);
  const [userCity, setUserCity] = useState('');
  const [userUf, setUserUf] = useState('');
  const ufInput = useRef();

  useEffect(() => {
    
  }, []);

  async function loadUsers() {
    const city = userCity.toUpperCase();
    const uf = userUf.toUpperCase();

    const response = await api.post('/users', {
      city,
      uf
    });

    loadUsersPositions(response.data);
  }

  function handleNavigateToDetail(id) {
    navigation.navigate('Profile', { id: id });
  }

  async function loadUsersPositions(loadedUsers) {
    loadedUsers.map((u, i) => {
      if(i !== 0)
        return;

      setLatitude(u.latitude);
      setLongitude(u.longitude);
    });

    setUsers(loadedUsers);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Logo />
        </View>
        <View style={styles.textContainer}>
          <TextInput 
            style={styles.textInputCity}
            value={userCity}
            onChangeText={setUserCity}
            autoCapitalize={"characters"}
            placeholder={"Cidade"}
            placeholderTextColor="#09A8FA"
            returnKeyType={"next"}
            onSubmitEditing={() => ufInput.current.focus()}
            blurOnSubmit={false}
            maxLength={50}
          />
          <TextInput 
            style={styles.textInputUf}
            value={userUf}
            onChangeText={setUserUf}
            autoCapitalize={"characters"}
            ref={ufInput}
            returnKeyType={"send"}
            placeholder={"UF"}
            placeholderTextColor="#09A8FA"
            onSubmitEditing={loadUsers}
            maxLength={2}
          />
          <TouchableOpacity style={styles.buttonEnter} onPress={loadUsers}>
            <View style={styles.action}> 
              <Feather style={styles.iconSearch} name="search" size={28} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.containerMap}>
          <MapView 
            style={styles.map}
            loadingEnabled={true}
            region={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.014,
              longitudeDelta: 0.014,
            }} 
          >
            {users.map((u) => (
              <Marker
                key={u.id}
                style={styles.mapMarker}
                onPress={() => handleNavigateToDetail(u.id)}
                coordinate={{
                  latitude: u.latitude,
                  longitude: u.longitude,
                }}
              >
                <View style={styles.mapMarkerContainer}>
                  <View style={styles.photograph}>
                    <Feather name="user" size={25} color={'#FFF'} />
                  </View>
                  <Text style={styles.mapMarkerTitle}>{u.name}</Text>
                </View>
              </Marker>
            ))}
          </MapView>
        </View>
      </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}
