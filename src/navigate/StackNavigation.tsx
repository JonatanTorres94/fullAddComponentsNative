import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import SplashScreen from '../screens/splasScreen/SplashScreen';
import { HomeScreen } from '../screens/homeScreen/HomeScreen';
import { Animation102 } from '../screens/animations/Animation102';
import { Animation101 } from '../screens/animations/Animation101';
import { SwitchScreen } from '../screens/switchScreen/SwitchScreen';

export type RootStackParams = {
  Splash: undefined,
  Home: undefined,
  Animation101: undefined,
  Animation102: undefined,
  SwitchScreen: undefined,
}

const Stack = createStackNavigator<RootStackParams>();



export const StackNavigation = () => {

  const [isAppReady, setAppReady] = useState(false);


  return (
    <Stack.Navigator initialRouteName={isAppReady ? 'Home' : 'Splash'} screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name='Animation101' component={Animation101} />
      <Stack.Screen name='Animation102' component={Animation102} />
      <Stack.Screen name='SwitchScreen' component={SwitchScreen} /> 
    </Stack.Navigator>
  );
}