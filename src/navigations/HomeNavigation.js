import { View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DetailScreen from '../screens/DetailScreens';
import Notification from '../screens/Notification'
import HomeScreens from '../screens/HomeScreens'
import SearchScreen from '../screens/SearchScreens'
import IconHeader from '../components/iconHeader'
import IconHeaderRight from '../components/iconHeader/iconHeaderRight'
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../../contains'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import LoginScreen from '../screens/Login';
import SignUpScreen from '../screens/SignUp';
const Stack = createStackNavigator();
const HomeStackScreen = () => {
    const navigation = useNavigation()
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.bgHeader
                },
                headerTintColor: COLORS.second

            }}
        >
            <Stack.Screen name="Home" component={HomeScreens}
                options={{
                    title: 'Trang chủ',
                    headerBackTitleVisible: false,
                    headerLeft: () => (
                        <IconHeader />
                    ),
                    headerRight: () => (
                        <IconHeaderRight />
                    )
                }}
            />
            <Stack.Screen name="DetailScreen" component={DetailScreen}
                options={{
                    title: 'Chi tiết',
                    headerRight: () => (
                        <>
                            <View style={{ flexDirection: "row", marginRight: 10 }}>
                                <Ionicons name="search-outline" style={{ marginRight: 5 }} size={24}
                                    color={COLORS.second}
                                    onPress={() => navigation.navigate('SearchScreen')}
                                />
                                <MaterialCommunityIcons name="dots-vertical" size={24} color={COLORS.second} />
                            </View>
                        </>
                    )
                }}
            />
            <Stack.Screen name="Notification" component={Notification}
                options={{
                    title: 'Thông báo',
                    headerRight: () => (
                        <>
                            <View style={{ flexDirection: "row", marginRight: 10 }}>
                                <Ionicons name="search-outline" style={{ marginRight: 5 }} size={24}
                                    onPress={() => navigation.navigate('SearchScreen')}
                                    color={COLORS.second}
                                />
                                <MaterialCommunityIcons name="dots-vertical" size={24} color={COLORS.second} />
                            </View>
                        </>
                    )
                }}
            />
            <Stack.Screen name="SearchScreen" component={SearchScreen}
                options={{
                    title: 'Tìm kiếm',

                }}
            />
            <Stack.Screen name="LoginScreen" component={LoginScreen}
                options={{
                    headerShown: false,
                    tabBarVisible:true
                }}
            />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} 
             options={{
                headerShown: false,
                tabBarVisible:true
            }}
            />
        </Stack.Navigator>
    );
}

export default HomeStackScreen