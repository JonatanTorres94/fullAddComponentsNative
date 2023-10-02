
import React, { Children } from 'react';
import { StackNavigation } from './src/navigate/StackNavigation';

import 'react-native-gesture-handler';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';


const App = () => {


  return (
    <AppState>
        <StackNavigation />
    </AppState>

  )
}

const AppState = ({ children }: any) => {

  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  )
}


export default App;
