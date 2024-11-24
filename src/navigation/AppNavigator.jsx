import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MenuScreen from '../screens/MenuScreen';
import GraduationScreen from '../screens/GraduationScreen';
import KataScreen from '../screens/KataScreen';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: '' }} />
      <Stack.Screen name="Menu" component={MenuScreen} options={{ title: 'Menu' }} />
      <Stack.Screen name="Graduation" component={GraduationScreen} options={{ title: 'Graduações' }}/>
      <Stack.Screen name="Katas" component={KataScreen} options={{ title: 'Katas' }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
