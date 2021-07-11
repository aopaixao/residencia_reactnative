import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Badge, Icon, withBadge } from 'react-native-elements';
import Home from './../pages/home';
import Sobre from './../pages/sobre';
import Carrinho from '../pages/carrinho';
import ListagemProdutos from '../pages/produto/listagem';
import CarrinhoContext from '../context/CarrinhoContext';

const Stack = createStackNavigator();
const RouteStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Sobre" component={Sobre} />
      <Stack.Screen name="Carrinho" component={Carrinho} />
      <Stack.Screen name="ListagemProdutos" component={ListagemProdutos} />
    </Stack.Navigator>
  );
};

const TabBottomNav = createBottomTabNavigator();
const BNavigation = () => {

  const context = useContext(CarrinhoContext);
  const BadgedIcon = withBadge(context.produtos.length)(Icon);

  return (
    <TabBottomNav.Navigator>
      <TabBottomNav.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" type="ionicon" size={size} color={color} />
          ),
        }}
      />
      <TabBottomNav.Screen
        name="Sobre"
        component={Sobre}
        options={{
          tabBarLabel: 'Sobre',
          tabBarIcon: ({ color, size }) => (
            <Icon name="information-circle-outline" type="ionicon" size={size} color={color} />
          ),
        }}
      />
      <TabBottomNav.Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          tabBarLabel: 'Carrinho',
          tabBarColor: '#009387',
          tabBarIcon: ({ color, size }) => (
            <BadgedIcon name="cart-outline" type="ionicon" size={size} color={color} />
          ),
        }}
      />
      <TabBottomNav.Screen
        name="ListagemProdutos"
        component={ListagemProdutos}
        options={{
          tabBarLabel: 'Produtos',
          tabBarIcon: ({ color, size }) => (
            <Icon name="list-outline" type="ionicon" size={size} color={color} />
          ),
        }}
      />
    </TabBottomNav.Navigator>
  );
};

export default BNavigation;