import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'react-native-paper';
import HeaderDetail from '../../components/headerDetail';
import Video from 'react-native-video';
import images from '../../../contains/images';
const DetailScreen = ({navigation}) => {
    const theme = useTheme();
    return (
        <>
            <StatusBar style='light' />
            <HeaderDetail navigation={navigation}/>
            <View style={styles.container} theme={theme}>
                <View style={styles.videoBanner}>
                    {/* <Video style={styles.video}/>   */}
                    <Image style={styles.image} source={images.rectangle7} />
                </View>
                <View style={styles.description}>
                    <View style={{width:60,height:20,marginTop:10,marginLeft:20}}>
                        <Text style={{ color: "#fff",fontWeight:"bold" }}>REVIEW</Text>
                    </View>
                    <View style={styles.containerImage}>
                        <View style={styles.boxImage}>
                            <Image source={images.rectangle8} />
                            <Text style={styles.clock}>10:50</Text>
                        </View>
                        <View style={styles.boxImage}>
                            <Image source={images.rectangle9} />
                            <Text style={styles.clock}>13:00</Text>
                        </View>
                        <View style={styles.boxImage}>
                            <Image source={images.rectangle10} />
                            <Text style={styles.clock}>13:30</Text>
                        </View>

                    </View>
                    <View style={styles.containerTopic}>
                        <TouchableOpacity style={styles.boxTopic}>
                            <Text style={styles.textTopic}>CRIME</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boxTopic}>
                            <Text style={styles.textTopic}>DRAMA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.boxTopic}>
                            <Text style={styles.textTopic}>MYSTERY</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.content}>
                        <Text style={{ color: "#fff",fontWeight:"bold",fontSize:30 }}>Who Am I (2014)</Text>
                        <Text style={{ color: "#fff" }}>
                            7.5 | 1.8 Rb Ulasan
                        </Text>
                        <Text style={{ color: "#fff",fontWeight:"500", fontSize:17, marginTop:15 }}>SINOPSIS</Text>
                        <Text style={{ color: "#fff", fontSize:11, marginTop:10}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                        </Text>
                    </View>
                </View>
            </View>
        </>
    )
}

export default DetailScreen
const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center",
    },
    videoBanner: {
        flex: 1,
        width: "100%",
    },
    image: {
        width: "100%",
        height: "100%"
    },
    description: {
        flex: 2,
        width: "100%",
        paddingHorizontal:12,
        marginVertical:2
    },
    containerImage: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 5,
        height:"50",
        
    },
    boxImage:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginTop:5
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
        borderWidth:1,
        marginTop:8,
        borderColor:"#fff",
        marginRight:10

    },
    content:{
        marginTop:18,
        lineHeight:0.5
    },
    clock: {
        color: "#fff"
    },
    textTopic: {
        color: "#fff"
    }

})