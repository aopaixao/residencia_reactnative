import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import Home from './screens/home';
import Cadastro from './screens/cadastro';
import Informacoes from './screens/informacoes';

const NavegacaoHomeCadastroStack = createStackNavigator();
function DefaultStackNavigation() {
  return (
    <NavegacaoHomeCadastroStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#999999",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}>
      <NavegacaoHomeCadastroStack.Screen
        options={{ headerShown: true }}
        name="Home"
        component={Home}
      />
      <NavegacaoHomeCadastroStack.Screen
        options={{ headerShown: true }}
        name="Cadastro"
        component={Cadastro}
      />
    </NavegacaoHomeCadastroStack.Navigator>
  );
}

const InformacoesStack = createStackNavigator();
function InfoStackNavigation() {
  return (
    <InformacoesStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#999999",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}>
      <InformacoesStack.Screen
        options={{ headerShown: true }}
        name="Informações"
        component={Informacoes}
      />
    </InformacoesStack.Navigator>
  );
}

const NavegacaoTab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <NavegacaoTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <NavegacaoTab.Screen
        name="Home"
        component={DefaultStackNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" type="ionicon" size={size} color={color} />
          ),
        }}
      />
      <NavegacaoTab.Screen
        name="Informações"
        component={InfoStackNavigation}
        options={{
          tabBarLabel: 'Informações',
          tabBarIcon: ({ color, size }) => (
            <Icon name="information-circle-outline" type="ionicon" size={size} color={color} />
          ),
        }}
      />
    </NavegacaoTab.Navigator>
  );
}

const NavegacaoDrawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <NavegacaoDrawer.Navigator>
      <NavegacaoDrawer.Screen name="Home" component={TabNavigation} />
      <NavegacaoDrawer.Screen name="Informações" component={InfoStackNavigation} />
    </NavegacaoDrawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}

export default App;
