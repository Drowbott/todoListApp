import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import MainLayout from './layouts/MainLayout';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="About" component={AboutScreen} />
            </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;