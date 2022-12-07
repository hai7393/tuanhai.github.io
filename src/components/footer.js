import { View, StyleSheet } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native-gesture-handler';
const Footer = () => {
    const footer = [
        {
            id: '1',
            icon: <Icon name="home" size={25} color="yellow" />
        },
        {
            id: '2',
            icon: <Icon name="search" size={25} color="yellow" />
        },
        {
            id: '3',
            icon: <Icon name="play" size={25} color="yellow" />
        },
        {
            id: '4',
            icon: <Icon name="cog" size={25} color="yellow" />
        }
    ]
    const renderItem = ({ item }) => (
        <View style={styles.icon}>{item.icon}</View>
    );
    return (
        <View style={styles.container}>
            <View style={styles.footer}>
                <FlatList
                    horizontal={true}
                    data={footer}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </View>
        </View>

    )
}
export default Footer

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    footer: {
        width: 250,
        height: 44,
        backgroundColor: "#FF985F",
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})