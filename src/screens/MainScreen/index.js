import React from 'react';
import { View, Button } from 'react-native';
import { useAuth } from '../../contexts/auth';

export default function MainScreen() {
  const {logout, user } = useAuth();
  
  async function handleLogout() {
    logout();
  }

  return (
    <View>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
