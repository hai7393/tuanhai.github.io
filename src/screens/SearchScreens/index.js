import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../../components/Search/SearchBar'
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import SearchMovie from '../../components/Search/SearchMovie';
import { COLORS } from '../../../contains'
const SearchScreen = () => {

  const [searchText, setSearchText] = useState("");

  const onchangeSearch = (e) => {
    const newData = {
      ...searchText,
      query: e.target.value
    }
    setSearchText(newData)
  }
  console.log('serach', searchText)
  // const renderItem = (item) => {
  //   <SearchMovie
  //     id={item.id}
  //     image={item.backdrop_path}
  //     title={item.title}
  //   />
  // }
  return (
    <View style={styles.container}>
      <View>
        <TextInput
          placeholder='Search...'
          placeholderTextColor={COLORS.second}
          style={styles.input}
          onChange={(text) => onchangeSearch(text)}
          value={searchText}
        />

      </View>

      <FlatList
      // data={listMovieTopRated}
      // renderItem={renderItem}
      // keyExtractor={(item) => item.id}
      />
    </View>
  )
}

export default SearchScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.second,
    color: COLORS.second,
    borderRadius: 20

  }
})