import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../screens/Profile';

const MapStack = createStackNavigator();

const MapRoutes = () => (
  <MapStack.Navigator headerMode={"none"}>
    <MapStack.Screen name="Profile" component={Profile}/>
  </MapStack.Navigator>
);

export default MapRoutes;
