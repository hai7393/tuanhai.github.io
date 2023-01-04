import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerContent from '../screens/DrawerContent';
import {
  Provider as PaperProvider,
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme,
  adaptNavigationTheme
} from 'react-native-paper';
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { MD2DarkTheme } from 'react-native-paper';
import { MD2LightTheme } from 'react-native-paper';
import merge from 'deepmerge';
import DetailScreen from '../screens/DetailScreens';
import Notification from '../screens/Notification';
import TabNavigation from './TabNavigation';
const Drawer = createDrawerNavigator();
export default function AppNavigation() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const { LightTheme, DarkTheme } = adaptNavigationTheme({
    light: NavigationDefaultTheme,
    dark: NavigationDarkTheme,
  });

  const CombinedDefaultTheme = merge(MD2DarkTheme, DarkTheme);
  const CombinedDarkTheme = merge(MD2LightTheme, LightTheme);
  let theme = isDarkTheme ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsDarkTheme(!isDarkTheme);
  }, [isDarkTheme]);

  return (
    <NavigationContainer theme={theme}>
      <Drawer.Navigator
        screenOptions={{ headerShown: false }}
        drawerContent={props => <DrawerContent toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} {...props} />}>
        <Drawer.Screen name="HomeScreens" component={TabNavigation} />
        <Drawer.Screen name="DetailScreen" component={DetailScreen} />
        <Drawer.Screen name="Notification" component={Notification} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
}