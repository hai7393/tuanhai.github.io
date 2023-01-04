import React , { useContext , useState } from 'react';
import { View, Text, Image, TouchableOpacity  } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import styles from './style'
import InputStyle from '../../components/inputStyle';
import { useNavigation } from '@react-navigation/native';
import images from '../../../contains/images';
import { AuthContext } from '../../navigations/AuthProvider';
import Loading from '../../components/loading';

const LoginScreen = () => {
  const navigation = useNavigation()
  const [email, setEmail]         = useState('')
  const [password, setPassword]   = useState('')
  const { login , loading,user } = useContext(AuthContext)
  if ( loading ) {
    return <Loading />;
  }

  const changeRegister = () => {
    navigation.navigate('SignUpScreen')
  }

  const onLogin = () => {
    login(email,password)
    navigation.navigate('HomeScreens')
  }

    return (
      <KeyboardAwareScrollView
        style={styles.container}
        enableOnAndroid={true}
        extraScrollHeight={20}
      >
        <View style={styles.header}>
            <View style={styles.boxImage}>
              <Image style={[styles.imgBackground,styles.imgBackgroundHeader]} source={images.headerLogin} />
            </View>
            <View style={styles.boxIcon}>
              <Image source={images.iconLogin} />
            </View>
          </View>
        <View style={styles.body}>
        <View style={styles.form}>
              <Text style={styles.formTitle}>Welcome!</Text>
              <View style={styles.formInput}>
                <InputStyle name={'Email'} value={email} onChange={(value) => setEmail(value)} />
              </View>
              <View style={styles.formInput}>
                <InputStyle name={'Password'} value={password} onChange={(value) => setPassword(value)}/>
              </View>
            </View>
        </View>
        <View style={styles.footer}>
            <View style={styles.boxImage}>
              <Image style={[styles.imgBackground,styles.imgBackgroundFooter]} source={images.footerLogin} />
            </View>
            <Text onPress={changeRegister} style={styles.register}>New Here? 
              <Text 
                style={styles.registerClick}
              > Register</Text> 
            </Text>
            <TouchableOpacity onPress={onLogin} style={styles.footerSubmit}>
              <Text style={styles.footerSubmitText}>Login</Text>
            </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView> 
  );
}

export default LoginScreen