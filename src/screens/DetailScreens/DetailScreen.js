import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView,FlatList } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'react-native-paper';
import HeaderDetail from '../../components/headerDetail';
import Video from 'react-native-video';
import images from '../../../contains/images';
import {COLORS} from '../../../contains/theme'
const DetailScreen = ({ navigation }) => {
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
    const topic = [
        {
            id: '1',
            title: 'CRIME'
        },
        {
            id: '2',
            title: 'DRAMA'
        },
        {
            id: '3',
            title: 'MYSTERY'
        }
    ]
    return (
        <>
            <StatusBar style='light' />
            <HeaderDetail navigation={navigation} />
            <SafeAreaView style={styles.container} theme={theme}>
                <View style={styles.videoBanner}>
                    <Image style={styles.image} source={images.rectangle7} />
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
                        {topic.map((item,index) => {
                            return <TouchableOpacity style={styles.boxTopic} key={index}>
                                <Text style={styles.textTopic}>{item.title}</Text>
                            </TouchableOpacity>
                        })}

                    </View>
                    <ScrollView style={styles.content}>
                        <Text style={{ color: COLORS.second, fontWeight: "bold", fontSize: 30 }}>Who Am I (2014)</Text>
                        <Text style={{ color: COLORS.second }}>
                            7.5 | 1.8 Rb Ulasan
                        </Text>
                        <Text style={{ color: COLORS.second, fontWeight: "500", fontSize: 17, marginTop: 15 }}>SINOPSIS</Text>
                        <Text style={{ color: COLORS.second, fontSize: 12, marginTop: 10 }}>
                            Lorem Ipsum
                            is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it
                            to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                            typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of
                            
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
    }

})