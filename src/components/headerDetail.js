import { StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper'
import React from 'react';
import {COLORS} from '../../contains/theme'
const HeaderDetail = ({navigation}) => {
    
    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');
    return (
        <Appbar.Header style={{ backgroundColor: "rgba(28, 27, 31, 1)" }}>
            <Appbar.BackAction onPress={() => {
                navigation.goBack();
            }} color={COLORS.second}/>
            <Appbar.Content title="Title" />
            <Appbar.Action icon="magnify" onPress={_handleSearch} color={COLORS.second} />
            <Appbar.Action icon="dots-vertical" onPress={_handleMore} color={COLORS.second} />
        </Appbar.Header>
    );

}

export default HeaderDetail
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    location: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center"
    },

    select: {
        width: 100,
        height: 22,
        borderRadius: 40,
        marginLeft: -10,
        borderWidth: 1,
        borderColor: COLORS.second,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",

    },
    dropDown: {
        borderRadius: 50,
        backgroundColor: "red"
    },
    selectedRowTextStyle: {
        backgroundColor: "red"
    },

})
