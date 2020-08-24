import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Register from '../screens/Register';
import NewPassword from '../screens/NewPassword';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator headerMode={"none"}>
    <AuthStack.Screen name="Login" component={Login}/>
    <AuthStack.Screen name="Register" component={Register}/>
    <AuthStack.Screen name="NewPassword" component={NewPassword}/>
  </AuthStack.Navigator>
);

export default AuthRoutes;
