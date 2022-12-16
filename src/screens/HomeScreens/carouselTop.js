import { View, Text, StyleSheet, Image, useWindowDimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Animated, {
    useSharedValue,
    useAnimatedScrollHandler,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../../contains/theme';
const CarouselTop = ({ data }) => {
    const navigation = useNavigation();
    const myIcon = <Icon name="star" size={10} color="yellow" />;
    // const [newData] = useState([{ key: 'space-left' }, ...data, { key: 'space-right' }]);
    const { width } = useWindowDimensions();
    const size = width * 0.6;
    const spacer = (width - size) / 12;
    const x = useSharedValue(0);
    const onScroll = useAnimatedScrollHandler({
        onScroll: event => {
            x.value = event.contentOffset.x;
        }
    })
    const changeMovie = (id)=>{
        navigation.navigate('DetailScreen',{id})
    }
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
            {data?.map((item, index) => {
                if (!item.backdrop_path) {
                    return <View style={{ width: spacer }} key={index} />
                }
                return (
                    <TouchableOpacity style={{ width: size }}
                        key={index}
                        onPress={() => changeMovie(item.id)}
                    >
                        <Animated.View style={[styles.imageContainer]}>
                            <Image source={{uri:`https://image.tmdb.org/t/p/w500/${item.backdrop_path}`}} style={styles.image}
                            />
                        </Animated.View>
                        <Text style={styles.text1}>{item.title}</Text>
                        <Text style={styles.text2}>{item.vote_average} {myIcon}</Text>
                    </TouchableOpacity>
                )
            })}
        </Animated.ScrollView>
        </>
    )
}

export default CarouselTop

const styles = StyleSheet.create({
    imageContainer: {
        marginTop: 10,
        overflow: 'hidden'
    },
    image: {
        borderRadius: 20,
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