import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RouteTabNavigation from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <RouteTabNavigation />
    </NavigationContainer>
  );
};

export default App;