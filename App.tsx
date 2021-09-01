import React from 'react';
import {ThemeProvider} from 'styled-components';
import AppLoading from 'expo-app-loading';

import {
  useFonts, 
  Poppins_400Regular, 
  Poppins_700Bold, 
  Poppins_500Medium
} from '@expo-google-fonts/poppins';

import {Dashboard} from './src/pages/Dashboard'

import theme from './src/global/styles/theme';

export default function App() {
  const [fontsCarregados] = useFonts({
    Poppins_400Regular, 
    Poppins_700Bold, 
    Poppins_500Medium
  });
  if (!fontsCarregados){
    return <AppLoading/>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
   
  );
}


