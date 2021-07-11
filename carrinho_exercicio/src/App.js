import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RouteStack from './routes';
import BNavigation from './routes';
import CarrinhoProvider from './context/CarrinhoProvider';

const App = () => {
  return (
    <CarrinhoProvider>
      <NavigationContainer>
        <BNavigation />
      </NavigationContainer>
    </CarrinhoProvider>
  );
};

export default App;