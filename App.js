import * as React from 'react';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  adaptNavigationTheme
} from 'react-native-paper';
import Header from './src/components/headerHome';

import AppNavigation from './src/navigations/AppNavigation';
import { store } from './store'
import { Provider } from 'react-redux'

export default function App() {
  
  return (
    <Provider store={store}>
    <PaperProvider >
      <AppNavigation/>
    </PaperProvider>
    </Provider>
  );
}