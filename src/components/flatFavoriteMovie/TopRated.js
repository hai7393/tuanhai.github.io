import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native'
const TopRated = ({ id, title, backdrop_path }) => {
    const navigation = useNavigation();
    const changeMovie = (id) => {
        navigation.navigate('DetailScreen', { id })
    }
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => changeMovie(id)}
        >
            <ScrollView>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}` }}
                    />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title} >{title}</Text>
                </View>
            </ScrollView>


        </TouchableOpacity>
    )
}

export default TopRated