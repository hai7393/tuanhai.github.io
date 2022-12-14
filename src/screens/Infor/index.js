import React, { useContext, useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import InputStyle from '../../components/inputStyle'
import IconStyle from '../../components/iconStyle'
import Progress from '../../components/progressBar'
import styles from './style'
import imgPicker from '../../../lib/imgPicker'
import images from '../../../contains/images'
import { AuthContext } from '../../navigations/AuthProvider'
import ChangePassForm from '../../components/changePass'
const InfoScreen = () => {
    const { logout, user, updateInfo } = useContext(AuthContext)
    const { displayName, email, photoURL } = user
    const [nickName, setNickName] = useState(displayName)
    const [visible, setVisible] = useState(false)
    const [photo, setPhoto] = useState(photoURL)
    const [loading, setLoading] = useState(0)
    const onLogout = () => {
        logout()
    }

    const onUpdateInfo = () => {
        updateInfo(nickName)
    }

    const onChangePass = () => {
        setVisible(true)
    }

    const onUpdateImg = () => {
        imgPicker(
            (img) => setPhoto(img),
            (loading) => setLoading(loading)
        )
    }

    return (
        <>
            <StatusBar hidden={true} />
            <View style={styles.container}>
                <ChangePassForm visible={visible} setVisible={(value) => setVisible(value)} />
                <View style={styles.info}>
                    <View style={styles.infoBox}>
                        <Image style={styles.infoBoxImg} source={images.imgDefault} />
                        <TouchableOpacity style={styles.iconAvatar}>
                            <IconStyle name={'edit'} onPress={onUpdateImg} />
                        </TouchableOpacity>
                        <Progress visible={(loading == 0 || loading == 1) ? false : true} loading={loading} />
                    </View>
                    <Text style={styles.infoName}>{email}</Text>
                    <TouchableOpacity onPress={onUpdateInfo} style={styles.infoTitle}>
                        <Text style={styles.infoTitleText} >C???p nh???t th??ng tin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.infoIcon}>
                        <IconStyle name={'logout'} onPress={() => onLogout()} />
                    </TouchableOpacity>
                </View>
                <KeyboardAwareScrollView
                    enableOnAndroid={true}
                    style={styles.body}
                >
                    <View style={styles.formInput}>
                        <InputStyle name={'Nickname'} value={nickName} onChange={(value) => setNickName(value)} />
                    </View>
                    <View style={styles.formInput}>
                        <InputStyle name={'Email'} editable={false} value={email} />
                    </View>
                    <View style={styles.formInput}>
                        <InputStyle name={'Password'} editable={false} />
                        <TouchableOpacity onPress={onChangePass} style={styles.changePass}>
                            <Text style={styles.changePassText}>Change Password</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </>
    )
}

export default InfoScreen