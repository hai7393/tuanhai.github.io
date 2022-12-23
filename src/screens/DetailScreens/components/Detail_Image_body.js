import { View, Text, Image , StyleSheet } from "react-native";
import React from "react";

const Detail_Image_body = ({item}) => {
  return (
    <View style={styles.boxImage}>
      <Image source={item.image} />
      <Text style={styles.clock}>{item.time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  boxImage:{
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      marginTop:5
  },
  clock: {
      color: "#fff",
      marginBottom : 20
  },
})

export default Detail_Image_body;
