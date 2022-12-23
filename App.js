import * as React from 'react';
import {
  Provider as PaperProvider,
} from 'react-native-paper';

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