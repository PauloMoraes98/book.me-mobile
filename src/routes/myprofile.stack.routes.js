import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import EditBook from '../screens/EditBook';
import BookDetails from '../screens/BookDetails';
import MyProfile from '../screens/MyProfile';


const MyProfileStack = createStackNavigator();

const MyProfileRoutes = () => (
  <MyProfileStack.Navigator headerMode={"none"}>
    <MyProfileStack.Screen name="MyProfile" component={MyProfile}/>
    <MyProfileStack.Screen name="EditBook" component={EditBook}/>
    <MyProfileStack.Screen name="BookDetails" component={BookDetails}/>
  </MyProfileStack.Navigator>
);

export default MyProfileRoutes;
