import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles'
import { COLORS } from '../../../contains'

const IconHeaderRight = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.containerIconHeaderRight}>
            <TouchableOpacity>
                <Ionicons name="search-outline" style={{ marginRight: 10 }}
                    onPress={() => navigation.navigate('SearchScreen')}
                    size={24} color={COLORS.second} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="notifications-outline"
                    onPress={() => navigation.navigate('Notification')}
                    size={24}
                    color={COLORS.second} />
            </TouchableOpacity>
        </View>
    )
}

export default IconHeaderRight
