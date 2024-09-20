import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import StackNavigation from './src/Routes/PublicRoutes/Screens';

const App = () => {
  return (
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
  );
};

export default App;