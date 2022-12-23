import { View, Text ,TextInput,Button} from 'react-native'
import React from 'react'
import styles from './style'
const SignUp = () => {
  return (
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
        <Button title="Sign Up" />
    </View>
  )
}

export default SignUp