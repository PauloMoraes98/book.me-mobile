import React from 'react';
import {View, ActivityIndicator } from 'react-native';

import { useAuth } from '../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

export default function Routes() {
  const { signed, loading } = useAuth();

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#09A8FA" />
      </View>
    )
  }

  return signed ? <AppRoutes /> : <AuthRoutes />;
}
