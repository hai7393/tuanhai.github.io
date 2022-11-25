import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: "red"
    },
    footer: {
        height: 100,
        justifyContent:"center",
        alignItems:"center"
    },

    wrapperTop: {
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
    
    textFooter:{
        width:250,
        height:44,
        backgroundColor:"#FF985F",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        borderRadius:40
    },
    iconFooter:{
        marginHorizontal:10
    }

})
export default styles