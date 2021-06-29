import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './../pages/home';
import Sobre from './../pages/sobre';

const Stack = createStackNavigator();

const RouteStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Sobre" component={Sobre} />
    </Stack.Navigator>
  );
};

export default RouteStack;