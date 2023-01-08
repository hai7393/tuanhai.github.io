import React , { useState , useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { showNotice } from '../../../lib'
import { MESSAGE } from '../../../contains'
import Loading from '../../components/loading';
import styles from './style';
import images from '../../../contains/images';
import InputStyle from '../../components/inputStyle';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../navigations/AuthProvider';
const SignUpScreen = () => {
  const navigation                = useNavigation();
  const [email, setEmail]         = useState('')
  const [password, setPassword]   = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const { register , loading } = useContext(AuthContext);
  if ( loading ) {
    return <Loading />;
  }

  const goLogin = () => {
    navigation.goBack();
  };
  
  const signUp = () => {
    if(password === confirmPassword && password!==""){
      register(email,password)
      navigation.navigate('LoginScreen')
    }else {
      showNotice(MESSAGE.passwordConfirm,true)
    }
    
  }

  return (
    <KeyboardAwareScrollView
      style={styles.container}
      enableOnAndroid={true}
      extraScrollHeight={20}
    >
      <View style={styles.header}>
        <View style={styles.boxImage}>
          <Image
            style={[styles.imgBackground, styles.imgBackgroundHeader]}
            source={images.headerLogin}
          />
        </View>
        <View style={styles.boxIcon}>
          <Image source={images.iconLogin} />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.form}>
          <Text style={styles.formTitle}>Let's get started!</Text>
          <View style={styles.formInput}>
            <InputStyle name={'Email'} value={email} onChange={(value) => setEmail(value) } />
          </View>
          <View style={styles.formInput}>
            <InputStyle name={'Password'} value={password} onChange={(value) => setPassword(value) }/>
          </View>
          <View style={styles.formInput}>
            <InputStyle name={'ConfirmPassword'} value={confirmPassword} onChange={(value) => setConfirmPassword(value) }/>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.boxImage}>
          <Image
            style={[styles.imgBackground]}
            source={images.footerLogin}
          />
        </View>
        <Text onPress={goLogin} style={styles.register}>
          Go Back !<Text style={styles.registerClick}> Login</Text>
        </Text>
        <TouchableOpacity onPress={signUp}  style={styles.footerSubmit}>
          <Text style={styles.footerSubmitText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUpScreen;