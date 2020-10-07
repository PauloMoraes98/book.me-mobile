import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import EditBook from '../screens/EditBook';
import BookDetails from '../screens/BookDetails';
import MyProfile from '../screens/MyProfile';
import EditUser from '../screens/EditUser';


const MyProfileStack = createStackNavigator();

const MyProfileRoutes = () => (
  <MyProfileStack.Navigator headerMode={"none"}>
    <MyProfileStack.Screen name="MyProfile" component={MyProfile}/>
    <MyProfileStack.Screen name="EditBook" component={EditBook}/>
    <MyProfileStack.Screen name="BookDetails" component={BookDetails}/>
    <MyProfileStack.Screen name="EditUser" component={EditUser}/>
  </MyProfileStack.Navigator>
);

export default MyProfileRoutes;
