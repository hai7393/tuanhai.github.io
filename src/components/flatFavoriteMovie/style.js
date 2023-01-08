import { StyleSheet , Dimensions} from 'react-native';
import {COLORS} from '../../../contains'
const width = Dimensions.get('window').width - 10;

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        
    },
    imageContainer:{
        width:width,
        height:200,
    },
    image:{
        width:'100%',
        height:"100%",
    },
    titleContainer:{
        marginTop:10,
        marginBottom:20,
        justifyContent:"center",
        alignItems:"center",
    },
    title:{
        color:COLORS.second,
        fontSize:18
       
    },
    leftAction:{
        backgroundColor:"red",
        justifyContent:"center",
        alignItems:"center",
        
    }
})

export default styles;