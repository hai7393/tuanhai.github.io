import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { COLORS } from '../../../contains'
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
const MovieList = ({ data }) => {
    const navigation=useNavigation();
    const changeMovie = (id) => {
        navigation.navigate('DetailScreen', { id })
    }
    return (
        <View style={styles.containerMovieList}>
            <Text style={{ color: COLORS.title, fontWeight: "600" }}>FEATURED TODAY</Text>
            <Text style={{ width: 60, height: 5, backgroundColor: COLORS.bgFooter, marginTop: 5 }}></Text>
            <View style={styles.box}>
                {data?.map((item, index) => {
                    return (
                        <TouchableOpacity style={styles.containerMovie} key={index} onPress={()=>changeMovie(item.id)}>
                            <View style={styles.boxImg}>
                                <Image style={styles.img} source={{ uri: `https://image.tmdb.org/t/p/w500/${item.backdrop_path}` }} />
                            </View>
                            <View style={styles.boxContent}>
                                <Text numberOfLines={2} style={styles.title}>{item.title}</Text>
                                <View style={styles.time}>
                                    <View style={styles.voteAverage}>
                                    <Entypo name="star" size={18} color="yellow" />
                                    <Text style={{marginLeft:5, color:COLORS.second}}>{item.vote_average}</Text>
                                    </View>
                                    <Text style={styles.timeText}>{item.release_date}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                })}

            </View>
        </View>
    )
}

export default MovieList