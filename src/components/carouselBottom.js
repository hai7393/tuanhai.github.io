import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    useAnimatedScrollHandler,
    interpolate
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../contains/theme'
const CarouselBottom = ({ data }) => {
    const myIcon = <Icon name="star" size={10} color="yellow" />;
    const [newData] = useState([{ key: 'space-left' }, ...data, { key: 'space-right' }]);
    const { width } = useWindowDimensions();
    const size = width * 0.6;
    const spacer = (width - size) / 12;
    const x = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x;
        }
    })
    return (
        <>
        <View style={styles.wrapperText}>
            <Text style={{ color: COLORS.second }}>BARU TAYANG HARI INI</Text>
            <Text style={{ color: COLORS.title }}>LIHAT SEMUA</Text>
          </View>
        <Animated.ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            bounces={false}
            snapToInterval={size}
            decelerationRate="fast"
            onScroll={onScroll}
        >
            {newData.map((item, index) => {
                const style = useAnimatedStyle(() => {
                    const scale = interpolate(
                        x.value,
                        [(index - 2) * size, (index - 1) * size, index * size],
                        [0.8, 1, 0.8],
                    );
                    return {
                        transform: [{ scale }],
                    };
                })
                if (!item.image) {
                    return <View style={{ width: spacer }} key={index} />
                }
                return (
                    <View style={{ width: size }} key={index}>
                        <Animated.View style={[styles.imageContainer,style]}>
                            <Image source={item.image} style={styles.image} />
                        </Animated.View>
                        <Text style={styles.text1}>{item.title}</Text>
                        <Text style={styles.text2}>{item.rate} {myIcon}</Text>
                    </View>
                )
            })}
        </Animated.ScrollView>
        </>
    )
}

export default CarouselBottom

const styles = StyleSheet.create({
    imageContainer: {
        marginTop:8,
        overflow: 'hidden'
    },
    image: {
        borderRadius:20,
        width: "90%",
        height: undefined,
        aspectRatio: 1,
    },
    text1: {
        color: "#FFFFFF",
        marginTop: 10,
        fontSize: 12,
        fontWeight: "700"
    },
    text2: {
        color: "#FFFFFF",
        fontSize: 12,
        fontWeight: "700",
        lineHeight: 18
    },
    wrapperText:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:12
    }
});