import { View, Text } from 'react-native'
import React from 'react'
import styles from '../screens/HomeScreens/style'
import Icon from 'react-native-vector-icons/FontAwesome';
const Footer = () => {
    const iconHome = <Icon name="home" size={25} color="yellow" />;
    const iconSearch = <Icon name="search" size={25} color="yellow" />;
    const iconPlay = <Icon name="play" size={25} color="yellow" />;
    const iconSetting = <Icon name="cog" size={25} color="yellow" />;
    return (
        <View style={styles.textFooter}>
            <View style={styles.iconFooter}>
                {iconHome}
            </View>
            <View style={styles.iconFooter}>
                {iconSearch}
            </View>
            <View style={styles.iconFooter}>
                {iconPlay}
            </View>
            <View style={styles.iconFooter}>
                {iconSetting}
            </View>
        </View>
    )
}

export default Footer