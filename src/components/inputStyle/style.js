import { StyleSheet } from 'react-native';

import { COLORS } from '../../../contains'

const styles = StyleSheet.create({
    textInputLabel : {
        color : COLORS.second,
    },
    textInput: {
        marginTop : 10,
        height: 40,
        borderColor: COLORS.second,
        borderWidth : 1,
        borderRadius : 10,
        paddingLeft : 10,
        color:COLORS.second
    },
    iconShowPass : {
      position : 'absolute',
      right : 10,
      bottom : 10
    }
})

export default styles;