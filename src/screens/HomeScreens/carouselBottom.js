import { View, Text, TouchableOpacity, Image, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import styles from './style';
import Animated, {
    useSharedValue,
    useAnimatedScrollHandler,
} from 'react-native-reanimated';
import Icon from '../../components/Icon'
import { COLORS } from '../../../contains/theme'
import { useNavigation } from '@react-navigation/native';
const CarouselBottom = ({ data }) => {
    const { width } = useWindowDimensions();
    const navigation = useNavigation();
    const size = width * 0.6;
    const spacer = (width - size) / 12;
    const x = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x;
        }
    })
    const changeMovie = (id) => {
        navigation.navigate('DetailScreen', { id })
    }
    return (
        <>
            <View style={styles.wrapperText}>
                <View>
                    <Text style={{ color: COLORS.title, fontWeight: "bold" }}>POPULAR</Text>
                    <Text style={{ width: 60, height: 5, backgroundColor: COLORS.bgFooter, marginTop: 5 }}></Text>
                </View>
                <Text style={{ color: COLORS.primary }}>See all</Text>
            </View>
            <Animated.ScrollView
                scrollEventThrottle={16}
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                snapToInterval={size}
                decelerationRate="fast"
                onScroll={onScroll}
            >
                {data?.map((item, index) => {
                    return (
                        <TouchableOpacity style={{ width: size }}
                            key={index}
                            onPress={() => changeMovie(item.id)}
                        >
                            <Animated.View style={[styles.imageContainer]}>
                                <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}` }} style={styles.image} />
                            </Animated.View>
                            <Text style={styles.text1}>{item.title}</Text>
                            <View style={styles.productIcon}>
                                <TouchableOpacity style={styles.icon}>
                                    <Icon name={'heart-o'} number="123" />
                                </TouchableOpacity>
                                <View style={styles.icon}>
                                    <Icon name={'eye'} number="123" />
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </Animated.ScrollView>
        </>
    )
}

export default CarouselBottom

