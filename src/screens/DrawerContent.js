import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { StyleSheet } from 'react-native';
import {
  Drawer,
  TouchableRipple,
  Switch
} from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { AuthContext } from '../navigations/AuthProvider';
import { SimpleLineIcons } from '@expo/vector-icons'
import { COLORS } from '../../contains'
const DrawerContent = (props) => {
  const { user, logout } = useContext(AuthContext);
  const Logout = () => {
    logout();
    navigation.navigate('HomeScreens')
  }
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem label="home" />
          <DrawerItem label="profile" />
          <DrawerItem label="Bookmarks" />
          <DrawerItem label="Settings" />
          <DrawerItem label="Support" />
        </Drawer.Section>
        <Drawer.Section title="Preferences">
          <TouchableRipple onPress={() => { props.toggleTheme() }}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={props.isDarkTheme} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>
      {/* logout */}
      <View style={styles.bottomDrawerSection} >
        {user ? (
          <TouchableOpacity onPress={Logout}>
            <SimpleLineIcons name="logout" size={18} color={COLORS.second}  > Logout</SimpleLineIcons>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
            <Entypo name="login" size={18} color={COLORS.second} > Login</Entypo>
          </TouchableOpacity>
        )}
      </View>
    </View>
  )

}

export default DrawerContent
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  bottomDrawerSection: {
    marginBottom: 25,
    marginLeft:18
  }
});