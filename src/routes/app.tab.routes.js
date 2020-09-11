import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Feather } from '@expo/vector-icons';

import HomeRoutes from '../routes/home.stack.routes';
import MapRoutes from '../routes/map.stack.routes';

// import Profile from '../screens/Profile';
import MyProfile from '../screens/MyProfile';
import FindBook from '../screens/FindBook';
import CreateBook from '../screens/CreateBook';
import Map from '../screens/Map';


const AppTab = createMaterialBottomTabNavigator();

const AppTabRoutes = () => (
  <AppTab.Navigator
    tabBarOptions={{ showLabel: false }} 
    activeColor="#2180d9"
    inactiveColor="#09A8FA"
    barStyle={{ backgroundColor: '#FFF' }}
  >
    <AppTab.Screen 
      name="HomeRoutes" 
      component={HomeRoutes} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <Feather name="home" size={23} color={color} />
        ),
        tabBarOptions: { showLabel: false }
      }}
    />
    <AppTab.Screen 
      name="FindBook" 
      component={FindBook} 
      options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color }) => (
          <Feather name="search" size={23} color={color} />
        ),
      }}
    />
    <AppTab.Screen 
      name="CreateBook" 
      component={CreateBook}
      options={{
        tabBarLabel: 'Add',
        tabBarIcon: ({ color }) => (
          <Feather name="plus-circle" size={25} color={color} />
        ),
      }}
    />
    <AppTab.Screen 
      name="Map" 
      component={MapRoutes}
      options={{
        tabBarLabel: 'Map',
        tabBarIcon: ({ color }) => (
          <Feather name="map" size={23} color={color} />
        ),
      }}
    />
    <AppTab.Screen 
      name="MyProfile" 
      component={MyProfile} 
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <Feather name="user" size={23} color={color} />
        ),
      }}
    />
  </AppTab.Navigator>
);

export default AppTabRoutes;
