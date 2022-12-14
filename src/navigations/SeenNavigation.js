import { View, } from 'react-native'
import React from 'react'
import {COLORS} from '../../contains'
import { createStackNavigator } from '@react-navigation/stack';
import SeenScreen from '../screens/SeenScreens';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DetailScreen from '../screens/DetailScreens';
const SeenStack = createStackNavigator();
const SeenStackScreen = () => {
    return (
        <SeenStack.Navigator
        screenOptions={{
          headerStyle:{
            backgroundColor:COLORS.bgHeader,
          },
          headerTintColor : COLORS.second
        }}
        >
          <SeenStack.Screen
          name="SeenScreen"
          component={SeenScreen}
          options={{
            title : 'Đã xem',
            headerRight : () => (
                <>
                        <View style={{flexDirection:"row", marginRight:10}}>
                            <Ionicons name="search-outline" style={{ marginRight: 5 }} size={24} color={COLORS.second} />
                            <MaterialCommunityIcons name="dots-vertical" size={24} color={COLORS.second} />
                        </View>
                    </>
            )
          }}
          />
          <SeenStack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{
            title : 'Chi tiết',
            headerRight : () => (
                <>
                        <View style={{flexDirection:"row", marginRight:10}}>
                            <Ionicons name="search-outline" style={{ marginRight: 5 }} size={24} color={COLORS.second} />
                            <MaterialCommunityIcons name="dots-vertical" size={24} color={COLORS.second} />
                        </View>
                    </>
            )
          }}
          />
        </SeenStack.Navigator>
      );
}

export default SeenStackScreen