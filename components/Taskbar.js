import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { HomeScreen } from './screens/HomePage'
import { FriendsScreen } from './screens/FriendsPage.js'
import { ProfileScreen } from './screens/ProfilePage.js'


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={HomeScreen}
        />
        <Stack.Screen 
            name="Friends" 
            component={FriendsScreen} />
        <Stack.Screen 
            name="Profile" 
            component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;