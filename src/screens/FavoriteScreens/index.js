import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import styles from './style'
import TopRated from '../../components/flatFavoriteMovie/TopRated'
const FavoriteScreen = () => {
  const favorite = useSelector(state => state.movie.item);
  const movieTopRated = useSelector(state => state.movie.movieTopRated)
  const movieFavorite = favorite.map(itemID => movieTopRated?.results.find(item => item.id == itemID))
  const renderItem = ({ item }) => {
    return (
      <TopRated
        id={item.id}
        title={item.title}
        backdrop_path={item.backdrop_path}
      />
    )
  }
  const renderEmpty = () => {
    return (
      <View >
        <Text style={{color:"#fff"}}>Danh sách đang rỗng!</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={movieFavorite}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={renderEmpty}
      />
    </View>
  )
}

export default FavoriteScreen