import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BookDetails from '../screens/BookDetails';
import MainScreen from '../screens/MainScreen';
import Profile from '../screens/Profile';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="MainScreen" component={MainScreen}/>
    <AppStack.Screen name="BookDetails" component={BookDetails}/>
    <AppStack.Screen name="Profile" component={Profile}/>
  </AppStack.Navigator>
);

export default AppRoutes;
