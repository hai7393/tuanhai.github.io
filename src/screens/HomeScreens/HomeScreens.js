import { View, Text, SafeAreaView ,Button} from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper';
import HeaderComponents from '../../components/headerHome';
import styles from './style';
import images from '../../../contains/images';
import { StatusBar } from 'expo-status-bar';
import Footer from '../../components/footer';
import CarouselTop from '../../components/carouselTop';
import CarouselBottom from '../../components/carouselBottom';
import { useNavigation } from '@react-navigation/native'
const HomeScreens = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const data = [
    {
      image: images.rectangle4
    },
    {
      image: images.rectangle5
    },
    {
      image: images.rectangle6
    },
    {
      image: images.rectangle1
    },
    {
      image: images.rectangle2
    },
    {
      image: images.rectangle3
    },
  ];
  return (
    <>
      <StatusBar style='light' />
      <HeaderComponents navigation={navigation} />
      <View style={styles.container} theme={theme}>
        <View style={styles.wrapperTop}>
          <View style={styles.wrapperText}>
            <Text style={{ color: "#FFFFFF" }}>BARU TAYANG HARI INI</Text>
            <Text style={{ color: "#A09E9E" }}>LIHAT SEMUA</Text>
          </View>
          <SafeAreaView>
            <CarouselTop data={data} />
          </SafeAreaView>
        </View>
        <View style={styles.wrapperBottom}>
          <View style={styles.wrapperText}>
            <Text style={{ color: "#FFFFFF" }}>BARU TAYANG HARI INI</Text>
            <Text style={{ color: "#A09E9E" }}>LIHAT SEMUA</Text>
          </View>
          <SafeAreaView>
            <CarouselBottom data={data} />
          </SafeAreaView>
        </View>
      </View>
      <View style={styles.footer}>
        <Footer />
      </View>
    </>
  )
}

export default HomeScreens