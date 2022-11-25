import * as React from 'react';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  adaptNavigationTheme
} from 'react-native-paper';
import Header from './src/components/headerHome';

import AppNavigation from './src/navigations/AppNavigation';


export default function App() {
  
  return (
    <PaperProvider >
      <AppNavigation/>
    </PaperProvider>
  );
}