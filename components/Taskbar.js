import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomePage.js'
import FriendsScreen from './screens/FriendsPage.js'
import ProfileScreen from './screens/ProfilePage.js'


const Tab = createBottomTabNavigator();

const TabBar = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator 
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;
            
                        if (rn === "Home") {
                            iconName = focused ? 'leaf' : 'leaf-outline';
                        } else if (rn === "Friends") {
                            iconName = focused ? 'people' : 'people-outline';
                        } else if (rn === "Profile") {
                            iconName = focused ? 'person' : 'person-outline';
                        }
                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                        },
                    })}
                tabBarOptions={{
                    activeTintColor: '#7FFF00',
                    inactiveTintColor: 'grey',
                    labelStyle: { paddingBottom: 10, fontSize: 10 },
                    style: { padding: 10, height: 70}
                }}>
                <Tab.Screen 
                    name="Home" 
                    component={HomeScreen} />
                <Tab.Screen 
                    name="Friends" 
                    component={FriendsScreen} />
                <Tab.Screen 
                    name="Profile" 
                    component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default TabBar;