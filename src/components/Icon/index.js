import React from 'react'
import { View, Text } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

import styles from './styles'
import { COLORS } from '../../../contains'

const Icon = ({name,number}) => {
    return (
        <View style={styles.container}>
            <FontAwesome name={name} size={20} color={COLORS.icon1} />
            {
                number 
                ? <Text style={styles.iconText}>{number}</Text>
                : <Text></Text>
            }
        </View>
    )
}

export default Icon
