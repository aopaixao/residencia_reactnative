import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './pages/Home';
import CadastroUsuario from './pages/User/Cadastro';
import ListagemUsuario from './pages/User/Listagem';

const App = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
  ListagemUsuario: {
    screen: ListagemUsuario,
    navigationOptions: {
      title: 'Listagem de Usuários',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
  CadastroUsuario: {
    screen: CadastroUsuario,
    navigationOptions: {
      title: 'Cadastro de Usuários',
      headerStyle: { backgroundColor: '#3a59b7' },
      headerTintColor: '#ffffff',
    },
  },
});
export default createAppContainer(App);
