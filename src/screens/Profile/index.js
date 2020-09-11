import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";
import { useAuth } from '../../contexts/auth';
import { Feather } from '@expo/vector-icons';

import api from '../../services/api';

import styles from './styles';

export default function Profile() {
  const {logout, user } = useAuth();
  const navigation = useNavigation();
  const route = useRoute();
  const [selectedUser, setSelectedUser] = useState([]);

  const routeParams = route.params;

  useEffect(() => {
    async function loadUser() {
      const response = await api.get(`/user/${routeParams.id}`);
      setSelectedUser(response.data);
    }

    loadUser();
  }, []);

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" color="#34cb79" size={20} />
      </TouchableOpacity>
      <Text>Profile {selectedUser.name}</Text>
    </View>
  )
}
