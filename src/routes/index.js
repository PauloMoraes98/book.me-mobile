import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BookDetails from '../screens/BookDetails/index';
import Login from '../screens/Login/index';
import MainScreen from '../screens/MainScreen/index';
import NewPassword from '../screens/NewPassword/index';
import Profile from '../screens/Profile/index';
import Register from '../screens/Register/index';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Login" component={ Login } />
        <AppStack.Screen name="BookDetails" component={ BookDetails } />
        <AppStack.Screen name="MainScreen" component={ MainScreen } />
        <AppStack.Screen name="NewPassword" component={ NewPassword } />
        <AppStack.Screen name="Profile" component={ Profile } />
        <AppStack.Screen name="Register" component={ Register } />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
