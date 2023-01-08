import { View, Text,ScrollView } from 'react-native'
import React, { useEffect, useContext } from 'react'
import { useTheme } from 'react-native-paper';
import styles from './style';
import { StatusBar } from 'expo-status-bar';
import CarouselTop from './carouselTop';
import CarouselBottom from './carouselBottom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovieTopRated } from '../../../store/slices/movie';
import { fetchMoviePopular } from '../../../store/slices/movie';
import MarqueeView from 'react-native-marquee-view';
import { AuthContext } from '../../navigations/AuthProvider';
import MovieList from './movieList';
const HomeScreens = () => {
  const { user } = useContext(AuthContext);
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
      <ScrollView style={styles.container} theme={theme}>
        {user && (
          <View style={styles.containerMarquee}>
            <MarqueeView
              style={{
                width: "100%",
              }}>
              <View>
                <Text style={{ color: 'yellow' }}>Welcom to {user?.displayName}!</Text>
              </View>
            </MarqueeView>
          </View>
        )}
        <View style={styles.wrapperTop}>
          <CarouselTop data={movieTopRated} />
        </View>
        <View style={styles.wrapperBottom}>
          <CarouselBottom data={moviePopulars} />
        </View>
        <View>
            <MovieList data={movieTopRated}/>
        </View>
      </ScrollView>
    </>
  )
}

export default HomeScreens