import { View, Text, SafeAreaView, Button } from 'react-native'
import React, { useEffect } from 'react'
import { useTheme } from 'react-native-paper';
import HeaderComponents from '../../components/headerHome';
import styles from './style';
import images from '../../../contains/images';
import { StatusBar } from 'expo-status-bar';
import Footer from '../../components/footer';
import CarouselTop from './carouselTop';
import CarouselBottom from './carouselBottom';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieTopRated } from '../../../store/slices/movie';
import { fetchMoviePopular } from '../../../store/slices/movie';
const HomeScreens = () => {
  const dispatch = useDispatch();
  const movieTopRated = useSelector(state => state.movie.movieTopRated.results)
  const moviePopulars = useSelector(state => state.movie.moviePopular.results)
  useEffect(() => {
    fetchMovie();
  }, [])
  const fetchMovie = async () => {
    await dispatch(fetchMovieTopRated());
    dispatch(fetchMoviePopular());
  }
  const navigation = useNavigation();
  const theme = useTheme();
  
  return (
    <>
      <StatusBar style='light' />
      <HeaderComponents navigation={navigation} />
      <View style={styles.container} theme={theme}>
        <View style={styles.wrapperTop}>
          <CarouselTop data={movieTopRated} />
        </View>
        <View style={styles.wrapperBottom}>
          <CarouselBottom data={moviePopulars} />
        </View>
      </View>
      <Footer />
    </>
  )
}

export default HomeScreens