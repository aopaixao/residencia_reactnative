import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Home from './../pages/home';
import Produto from './../pages/produto';

const Tab = createBottomTabNavigator();

const RouteTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" type="ionicon" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Produtos"
        component={Produto}
        options={{
          tabBarLabel: 'Produtos',
          tabBarIcon: ({ color, size }) => (
            <Icon name="cash-outline" type="ionicon" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default RouteTabNavigation;