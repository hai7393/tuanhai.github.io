import { View } from 'react-native'
import React, { useEffect } from 'react'
import { useTheme } from 'react-native-paper';
import styles from './style';
import { StatusBar } from 'expo-status-bar';
import CarouselTop from './carouselTop';
import CarouselBottom from './carouselBottom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieTopRated } from '../../../store/slices/movie';
import { fetchMoviePopular } from '../../../store/slices/movie';
const HomeScreens = () => {
  const dispatch = useDispatch();
  const movieTopRated = useSelector(state => state.movie.movieTopRated.results)
  const moviePopulars = useSelector(state => state.movie.moviePopular.results)
  useEffect(() => {
    const fetchMovie = async () => {
      await dispatch(fetchMovieTopRated());
      dispatch(fetchMoviePopular());
    }
    fetchMovie();
  }, [])

  const theme = useTheme();

  return (
    <>
      <StatusBar style='light' />
      <View style={styles.container} theme={theme}>
        <View style={styles.wrapperTop}>
          <CarouselTop data={movieTopRated} />
        </View>
        <View style={styles.wrapperBottom}>
          <CarouselBottom data={moviePopulars} />
        </View>
      </View>
    </>
  )
}

export default HomeScreens