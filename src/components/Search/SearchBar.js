import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import { COLORS } from '../../../contains'
const SearchBar = ({searchText, setSearchText}) => {

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Search...'
                placeholderTextColor={COLORS.second}
                style={styles.input}
                value= {value}
            />
        
        </View>
    )
}

export default SearchBar
const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: COLORS.second,
        color: COLORS.second,
        borderRadius: 20

    }
})