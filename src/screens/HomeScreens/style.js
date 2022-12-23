import { Dimensions, StyleSheet } from "react-native";
const height = Dimensions.get('window').height - 120;
const styles = StyleSheet.create({
    container: {
        height:height/2,
    },
    
    wrapperTop: {
        marginTop:30,
        flex: 1,
    },
    wrapperBottom: {
        flex: 1,

    },
    wrapperText: {
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    text: {
        fontWeight: 'bold',
        color: "#ffff"
    },
    slide: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: "row",
        justifyContent: 'space-between',
        marginTop: 20,
        marginHorizontal: 10
    },
    box: {
        paddingVertical: 5,
        paddingHorizontal: 18,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 20,
        shadowOpacity: 0.1,
        elevation: 5,
        width: 130,
        height: 220,
    },
    container: {
        flex: 1
    },

    imgBackground: {

        backgroundColor: 'transparent',
        position: 'absolute'

    },

    image: {
        flex: 1,
        width: 130,
        height: 220,
        borderRadius: 15
    },
    productIcon : {
        marginTop:10,
        flexDirection : 'row'
    },
    icon : {
        marginRight : 10
    },
    imageContainer: {
        marginTop: 10,
        overflow: 'hidden'
    },
    image: {
        borderRadius: 20,
        width: "90%",
        height: undefined,
        aspectRatio: 1,
    },
    text1: {
        color: "#FFFFFF",
        marginTop: 10,
        fontSize: 15,
        fontWeight: "700"
    },
    wrapperText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 12
    }

})
export default styles