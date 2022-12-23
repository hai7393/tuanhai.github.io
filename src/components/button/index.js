import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'

const styles = StyleSheet.create({
    container : {
        borderWidth :1,
        alignSelf : 'center'
    },
    sub : {
        marginRight : -5,
        marginTop : 2,
        marginBottom : 3,
        marginLeft : -5,
        borderWidth : 1,
        alignSelf : 'center'
    },
    borderColor : {
        borderColor : 'blue'
    }   
})

/**
 * @param {String} title 
 * @param {void} onPress 
 * @param {StyleProp} textStyle 
 * @returns 
*/


const Button = ({ title , onPress , textStyle }) => {
    const { container , sub , borderColor} = styles
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[container,borderColor]}>
                <View style={[sub , borderColor]}>
                    <Text style={textStyle}>{title}</Text>
                </View>
            </View>
        </TouchableOpacity>
  )
}

export { Button }


