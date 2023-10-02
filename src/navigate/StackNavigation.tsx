import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext, useEffect, useState } from 'react';
import SplashScreen from '../screens/splasScreen/SplashScreen';
import { HomeScreen } from '../screens/homeScreen/HomeScreen';
import { Animation102 } from '../screens/animations/Animation102';
import { Animation101 } from '../screens/animations/Animation101';
import { SwitchScreen } from '../screens/switchScreen/SwitchScreen';
import { AlertScreen } from '../screens/alertScreen/AlertScreen';
import ModalScreen from '../screens/modalScreen/ModalScreen';
import { TextInputScreen } from '../screens/textInputScreen/TextInputScreen';
import { PullToRefreshScreen } from '../screens/pullToRefreshScreen/PullToRefreshScreen';
import { SectionListScreen } from '../screens/sectionList/SectionListScreen';
import { InfiniteScrollScreen } from '../screens/infiniteScrollScreen/InfiniteScrollScreen';
import { SlidesScreen } from '../screens/slidesScreen/SlidesScreen';
import { ConfigScreen } from '../screens/config/ConfigScreen';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

export type RootStackParams = {
  Splash: undefined,
  Home: undefined,
  Animation101: undefined,
  Animation102: undefined,
  SwitchScreen: undefined,
  AlertScreen: undefined,
  ModalScreen: undefined,
  TextInputScreen: undefined,
  PullToRefresh: undefined,
  SectionList: undefined,
  InfiniteScrollScreen: undefined,
  SlidesScreen: undefined,
  ConfigScreen: undefined
}

const Stack = createStackNavigator<RootStackParams>();



export const StackNavigation = () => {

  const [isAppReady, setAppReady] = useState(false);

  const {theme} = useContext(ThemeContext)

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName={isAppReady ? 'Home' : 'Splash'} screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Animation101' component={Animation101} />
        <Stack.Screen name='Animation102' component={Animation102} />
        <Stack.Screen name='SwitchScreen' component={SwitchScreen} />
        <Stack.Screen name='AlertScreen' component={AlertScreen} />
        <Stack.Screen name='ModalScreen' component={ModalScreen} />
        <Stack.Screen name='TextInputScreen' component={TextInputScreen} />
        <Stack.Screen name='PullToRefresh' component={PullToRefreshScreen} />
        <Stack.Screen name='SectionList' component={SectionListScreen} />
        <Stack.Screen name='InfiniteScrollScreen' component={InfiniteScrollScreen} />
        <Stack.Screen name='SlidesScreen' component={SlidesScreen} />
        <Stack.Screen name='ConfigScreen' component={ConfigScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}