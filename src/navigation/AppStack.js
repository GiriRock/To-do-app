import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomePage from '../todo/homepage'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import Profile from '../todo/Profile';



const AppStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={HomePage}
        options = {{
          tabBarLabel : 'Home',
          tabBarIcon: ({ focused, color, size }) => {            
              return (
                <FontAwesome5Icon
                  name='home'
                  size={size}
                  color={color}
                />
              );
          }          
        }} />
        <Tab.Screen name="Profile" component={Profile} 
        options = {{
          tabBarLabel : 'Profile',
          tabBarIcon: ({ focused, color, size }) => {            
              return (
                <FontAwesome5Icon
                  name='user-circle'
                  size={size}
                  color={color}
                />
              );
          }          
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppStack

const styles = StyleSheet.create({})