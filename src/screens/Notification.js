import { View, StyleSheet,Text,FlatList } from 'react-native'
import React from 'react'


const Notification = ({navigation}) => {
    const data = [
        {
            id:'1',
            title:'note 1',
            username:'hai',
            notification:'like your post 1',
            time:'10:00'
        },
        {
            id:'2',
            title:'note 2',
            username:'hai',
            notification:'like your post 2',
            time:'10:00'
        },
        {
            id:'3',
            title:'note 3',
            username:'hai',
            notification:'like your post 3',
            time:'10:00'
        },
        {
            id:'4',
            title:'note 4',
            username:'hai',
            notification:'like your post 4',
            time:'10:00'
        }


    ]
  return (
    <>
    <View >
      <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({item})=>{
        return (
            <View style={styles.container}>
                <Text>test</Text>
            </View>
        )
      }}
      />
    </View>
    </>
  )
}

export default Notification

const styles = StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        height:'100%',
        padding:15,
        backgroundColor:'white'
    }
})