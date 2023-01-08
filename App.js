import * as React from 'react';

import AppNavigation from './src/navigations/AppNavigation';
import { store } from './store'
import { Provider } from 'react-redux'
import { AuthProvider } from './src/navigations/AuthProvider';
import FlashMessage from 'react-native-flash-message';
export default function App() {

  return (
    <Provider store={store}>
      <AuthProvider>
        <AppNavigation />
        <FlashMessage position="top"/>
      </AuthProvider>
    </Provider>
  );
}