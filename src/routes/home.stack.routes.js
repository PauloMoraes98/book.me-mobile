import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BookDetails from '../screens/BookDetails';
import MainScreen from '../screens/MainScreen';
import Profile from '../screens/Profile';
import CreateBook from '../screens/CreateBook';
import EditBook from '../screens/EditBook';

const HomeStack = createStackNavigator();

const HomeRoutes = () => (
  <HomeStack.Navigator headerMode={"none"}>
    <HomeStack.Screen name="MainScreen" component={MainScreen} />
    <HomeStack.Screen name="CreateBook" component={CreateBook} />
    <HomeStack.Screen name="BookDetails" component={BookDetails}/>
    <HomeStack.Screen name="Profile" component={Profile}/>
    <HomeStack.Screen name="EditBook" component={EditBook}/>
  </HomeStack.Navigator>
);

export default HomeRoutes;
