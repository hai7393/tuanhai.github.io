import React from "react";
import { ActivityIndicator, View } from "react-native";
import { COLORS } from '../../../contains'
import styles from './style'

const Loading = () =>  {
    return (
        <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color={COLORS.main} />
        </View>
    )
}

export default Loading;