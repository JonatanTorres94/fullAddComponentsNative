
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StackNavigation } from './src/navigate/StackNavigation';
import { HomeScreen } from './src/screens/homeScreen/HomeScreen';

import 'react-native-gesture-handler';


const App = () => {


  return (
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  )
}



export default App;
