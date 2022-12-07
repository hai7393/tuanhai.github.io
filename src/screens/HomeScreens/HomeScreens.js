import { View, Text, SafeAreaView, Button } from 'react-native'
import React from 'react'
import { useTheme } from 'react-native-paper';
import HeaderComponents from '../../components/headerHome';
import styles from './style';
import images from '../../../contains/images';
import { StatusBar } from 'expo-status-bar';
import Footer from '../../components/footer';
import CarouselTop from '../../components/carouselTop';
import CarouselBottom from '../../components/carouselBottom';
import { useNavigation } from '@react-navigation/native';

const HomeScreens = () => {
  
  const navigation = useNavigation();
  const theme = useTheme();
  const data = [
    {
      id:'1',
      image: images.rectangle4,
      title:'ONE PIECE FILM RED',
      rate:'RATING 7.2'
    },
    {
      id:'2',
      image: images.rectangle5,
      title:'ONE PIECE FILM RED',
      rate:'RATING 7.2'
    },
    {
      id:'3',
      image: images.rectangle6,
      title:'ONE PIECE FILM RED',
      rate:'RATING 7.2'
    },
    {
      id:'4',
      image: images.rectangle1,
      title:'ONE PIECE FILM RED',
      rate:'RATING 7.2'
    },
    {
      id:'5',
      image: images.rectangle2,
      title:'ONE PIECE FILM RED',
      rate:'RATING 7.2'
    },
    {
      id:'6',
      image: images.rectangle3,
      title:'ONE PIECE FILM RED',
      rate:'RATING 7.2'
    },
  ];
  return (
    <>
      <StatusBar style='light' />
      <HeaderComponents navigation={navigation} />
      <View style={styles.container} theme={theme}>
        <View style={styles.wrapperTop}>
          <CarouselTop data={data} />
        </View>
        <View style={styles.wrapperBottom}>
          <CarouselBottom data={data} />
        </View>
      </View>
      <Footer />
    </>
  )
}

export default HomeScreens