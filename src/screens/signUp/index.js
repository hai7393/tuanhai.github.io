import { View, Text ,TextInput } from 'react-native'
import React from 'react'
import styles from './style'
import DismissKeyboard from '../../components/DismissKeyboard'
import {Button} from '../../components/button'
const SignUp = ({children}) => {
  
  return (
    <DismissKeyboard>
      <>
      <View style ={styles.container}>
        <Text>SignUp</Text>
        <TextInput
            placeholder="Email.."
            autoCapitalize="none"
            style={styles.textInput}
            
          />
          <TextInput
            placeholder="Password"
            autoCapitalize="none"
            style={styles.textInput}
          />
         
      </View>
      <Button 
            title="Sign Up"
            onPress={() => {}
          }
          />
          </>
    </DismissKeyboard>
  )
}

export default SignUp