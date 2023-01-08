import { View, Text, TouchableOpacity, Image, ScrollView, Animated } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import { useNavigation } from '@react-navigation/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Dialog from "react-native-dialog";
import {useDispatch } from 'react-redux';
import { removeMovieFavorite } from '../../../store/slices/movie';
const TopRated = ({ id, title, backdrop_path }) => {
    const dispatch= useDispatch();
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);
    const changeMovie = (id) => {
        navigation.navigate('DetailScreen', { id })
    }
    const handleCancel = () => {
        setVisible(false);
    };
    const handleDelete = (id) => {
        dispatch(removeMovieFavorite({id:id}))
        setVisible(false);
    };
    const showDialog = () => {
        setVisible(true);
    }
    const leftSwiple = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [0, 60],
            outputRange: [0, 1]
          })
        return (
            <>
                <TouchableOpacity style={{height:'80%'}} onPress={showDialog}>
                    <View
                        style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center'}}>
                        <Animated.Text
                            style={{
                                color: 'white',
                                paddingHorizontal: 10,
                                fontWeight: '600',
                                transform: [{ scale }]
                            }}>
                            Delete
                        </Animated.Text>
                    </View>
                </TouchableOpacity>
            </>
        )
    }

    return (
        <Swipeable
            renderLeftActions={leftSwiple}
        >
            <View>
                <Dialog.Container visible={visible} >
                    <Dialog.Title>Xoá danh sách yêu tích</Dialog.Title>
                    <Dialog.Description>
                        Bạn có muốn xoá danh sách yêu thích?.
                    </Dialog.Description>
                    <Dialog.Button label="Cancel" onPress={handleCancel} />
                    <Dialog.Button label="Delete" onPress={()=>handleDelete(id)} />
                </Dialog.Container>
            </View>
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
        </Swipeable>
    )
}

export default TopRated