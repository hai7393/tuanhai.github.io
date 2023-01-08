import React, { useContext } from 'react'
import { COLORS } from '../../contains'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStackScreen from './HomeNavigation'
import FavoriteStackScreen from './FavoriteNavigation'
import SeenStackScreen from './SeenNavigation'
import { AuthContext } from './AuthProvider'
import AuthStackScreen from './Auth'
import InfoStackScreen from './Infor'
const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  const { user } = useContext(AuthContext);
  return (
    <Tab.Navigator
      initialRouteName='HomeScreens'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'HomeScreen':
              iconName = focused ? 'home' : 'home-outline';
              break;
            case 'Seen':
              iconName = focused ? 'timer' : 'timer-outline';
              break;
            case 'Favorite':
              iconName = focused ? 'cards-heart' : 'cards-heart-outline';
              break;
            case 'Infor':
              iconName = focused ? 'account-circle' : 'account-circle-outline';
              break;
            case 'Auth':
              iconName = focused ? 'account-circle' : 'account-circle-outline';
              break;
            default:
              break;
          }
          // You can return any component that you like here!
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.second,
        tabBarInactiveTintColor: COLORS.second,
        tabBarStyle: {
          backgroundColor: COLORS.bgFooter,
          height: 65,
          paddingBottom: 10
        },
        tabBarLabelStyle: {
          fontSize: 13
        },
        headerShown: false
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeStackScreen} options={{ title: 'Trang chủ' }} />
      <Tab.Screen name="Seen" component={SeenStackScreen} options={{ title: 'Đã xem' }} />
      <Tab.Screen name="Favorite" component={FavoriteStackScreen} options={{ title: 'Yêu thích' }} />
      {user ? (
        <Tab.Screen name="Infor" component={InfoStackScreen} options={() => ({
          title: user.displayName
        })}
        />
      ) : (
        <Tab.Screen name="Auth" component={AuthStackScreen} options={{ title: 'Đăng nhập' }} />
      )
      }

    </Tab.Navigator>

  )
}

export default TabNavigation