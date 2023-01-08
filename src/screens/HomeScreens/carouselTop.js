import { View, Text, useWindowDimensions, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import styles from './style';
import Animated, {
    useSharedValue,
    useAnimatedScrollHandler,
} from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import Icon from '../../components/Icon'
import { COLORS } from '../../../contains/theme';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../../../store/slices/movie';
import { toggleSeen } from '../../../store/slices/movie';
import { useSelector } from 'react-redux';
import { AuthContext } from '../../navigations/AuthProvider';
const CarouselTop = ({ data }) => {

    const favorite = useSelector(state => state.movie.item);
    const seen = useSelector(state => state.movie.seen);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const { width } = useWindowDimensions();
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
    const changeFavorite = (id) => {
        dispatch(toggleFavorite({ id: id }))
    }
    const changeSeen = (id) => {
        dispatch(toggleSeen({ id: id }))
    }
    return (
        <>

            <View style={styles.wrapperText}>
                <View>
                    <Text style={{ color: COLORS.title, fontWeight: "bold" }}>TOP RATED</Text>
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
                    const isFavorite = favorite.includes(item.id);
                    const iconFavorite = isFavorite ? "heart" : "heart-o";
                    const numberFavorite = isFavorite ? item.id + 1 : item.id
                    const isSeen = seen.includes(item.id);
                    const iconSeen = isSeen ? "eye" : "eye-slash";
                    const numberSeen = isSeen ? item.id + 1 : item.id
                    if (!item.backdrop_path) {
                        return <View style={{ width: spacer }} key={index} />
                    }
                    return (
                        <TouchableOpacity style={{ width: size }}
                            key={index}
                            onPress={() => changeMovie(item.id)}
                        >
                            <Animated.View style={[styles.imageContainer]}>
                                <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}` }} style={styles.image}
                                />
                            </Animated.View>
                            <Text style={styles.text1}>{item.title}</Text>
                            <View style={styles.productIcon}>
                                <TouchableOpacity style={styles.icon} onPress={() => changeFavorite(item.id)}>
                                    <Icon name={iconFavorite} number={numberFavorite} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.icon} onPress={() => changeSeen(item.id)}>
                                    <Icon name={iconSeen} number={numberSeen} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </Animated.ScrollView>
        </>
    )
}

export default CarouselTop

