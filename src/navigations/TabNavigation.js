import { View, Text } from 'react-native'
import React from 'react'
import {COLORS} from '../../contains'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackScreen from './HomeNavigation'
import FavoriteStackScreen from './FavoriteNavigation'
import SeenStackScreen from './SeenNavigation'
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='HomeScreens'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Home':
                iconName = focused ? 'ios-home' : 'ios-home-outline';
                break;
              case 'Seen':
                iconName = focused ? 'ios-timer' : 'ios-timer-outline';
                break;
              case 'Favorite':
                iconName = focused ? 'ios-heart' : 'ios-heart-outline';
                break;
              default:
                break;
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: COLORS.second,
          tabBarInactiveTintColor: COLORS.second,
          tabBarStyle:{
            backgroundColor:COLORS.bgFooter,
            height:65,
            paddingBottom:10
          },
          tabBarLabelStyle:{
            fontSize:13
          },
          headerShown:false
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} options={{title:'Trang chủ'}} />
        <Tab.Screen name="Seen" component={SeenStackScreen} options={{title:'Đã xem'}}/>
        <Tab.Screen name="Favorite" component={FavoriteStackScreen} options={{title:'Yêu thích'}}/>
      </Tab.Navigator>
  )
}

export default TabNavigation