import React from 'react';
import { View, Button } from 'react-native';
import { useAuth } from '../../contexts/auth';

import styles from './styles';

export default function MyProfile() {
  const {logout, user } = useAuth();

  async function handleLogout() {
    logout();
  }

  return (
    <View style={styles.header}>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  )
}
