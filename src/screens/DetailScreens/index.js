import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView,FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'react-native-paper';
import images from '../../../contains/images';
import {COLORS} from '../../../contains/theme';
import { fetchMovieDetailById } from '../../../store/slices/movie';
import { useDispatch } from 'react-redux';
const DetailScreen = ({ navigation,route }) => {
    const {id} = route.params
    const [movieDetail, setMovieDetail] = useState([]);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchMovieDetailById({id:id}))
        .then(res=>{
            const detail = res?.payload;
            setMovieDetail(detail)
        })
    },[id])
    const theme = useTheme();
    const image = [
        {
            id: '1',
            url: images.rectangle8,
            clock: '10:50'
        },
        {
            id: '2',
            url: images.rectangle9,
            clock: '13:00'
        },
        {
            id: '3',
            url: images.rectangle10,
            clock: '13:30'
        }
    ]
    
    return (
        <>
            <SafeAreaView style={styles.container} theme={theme}>
                <View style={styles.videoBanner}>
                    <Image style={styles.image} source={{uri:`https://image.tmdb.org/t/p/w500/${movieDetail.backdrop_path}`}} />
                </View>

                <View style={styles.description}>
                    <View style={{ width: 60, height: 20, marginTop: 10, marginLeft: 5 }}>
                        <Text style={{ color: COLORS.second, fontWeight: "bold" }}>REVIEW</Text>
                    </View>
                    <View style={{height: 120}}>
                        <FlatList
                            style={{ flex: 1 }}
                            horizontal={true}
                            data={image}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => {
                                return <View style={{ width: 100, height: 130, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image
                                        style={{
                                            width: 95,
                                            height: 95,
                                            paddingHorizontal: 10,
                                            resizeMode: 'cover',
                                            borderRadius: 15
                                        }}
                                        source={item.url}
                                    />
                                    <Text style={{ color: COLORS.second }}>{item.clock}</Text>
                                </View>
                            }}
                        />

                    </View>
                    <View style={styles.containerTopic}>
                        {movieDetail?.genres?.map((item,index) => {
                            return <TouchableOpacity style={styles.boxTopic} key={index}>
                                <Text style={styles.textTopic}>{item.name}</Text>
                            </TouchableOpacity>
                        })}

                    </View>
                    <ScrollView style={styles.content}>
                        <Text style={{ color: COLORS.second, fontWeight: "bold", fontSize: 30 }}>{movieDetail.title}</Text>
                        <Text style={{ color: COLORS.second }}>
                            {movieDetail.tagline}
                        </Text>
                        <Text style={{ color: COLORS.second, fontSize: 12, marginTop: 10 }}>
                            {movieDetail.overview}
                            
                        </Text>
                    </ScrollView>
                </View>
            </SafeAreaView>

        </>
    )
}

export default DetailScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    description: {
        flex: 2,
        width: "100%",
        paddingHorizontal: 12,
        marginVertical: 2
    },
    containerTopic: {
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'center',
        marginTop: 5,
    },
    boxTopic: {
        paddingVertical: 5,
        paddingHorizontal: 18,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        borderWidth: 1,
        marginTop: 8,
        borderColor: "#fff",
        marginRight: 10

    },
    content: {
        marginTop: 18,
        lineHeight: 0.5
    },
    clock: {
        color: "#fff"
    },
    textTopic: {
        color: "#fff",
        fontSize: 12
    },
    videoBanner:{
        width:400,
        height:250
    },
    image:{
        width:"100%",
        height:"100%"
    }

})