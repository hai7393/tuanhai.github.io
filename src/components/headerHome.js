import { View, Text ,Image} from 'react-native'
import { StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import images from '../../contains/images'
const HeaderComponents = ({navigation}) => {
    const _handleMore = () => console.log('Shown more');
    const iconCaret = <Icon name="caret-down" size={20} color="#FFFFFF" />;
    return (
        <Appbar.Header style={{backgroundColor:"rgba(28, 27, 31, 1)"}}>
            <View style={styles.container}  >
                <View style={styles.mennu}>
                    <Appbar.Action 
                        icon={() => (
                            <Image
                              source={images.iconMenu}
                              style={{ width: 28, height: 28, tintColor: "#FFFFFF" }}
                            />
                          )}
                        onPress={() => navigation.toggleDrawer()}
                    />
                </View>
                <View style={styles.location}>
                    <Appbar.Action icon="map-marker" color='#DA865A'/>
                    <View style={styles.select}>
                        <Text style={{color:"#FFFFFF"}}>GRESIK</Text>
                        <Text style={{marginLeft:10}}>{iconCaret}</Text>
                    </View>
                </View>
                <View style={styles.notification}>
                    <Appbar.Action icon="bell-badge" onPress={_handleMore} color="#E98383" />
                </View>
            </View>
        </Appbar.Header>
    );

}

export default HeaderComponents
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    location: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:"center"
    },

    select: {
        width: 100,
        height: 22,
        borderRadius: 40,
        marginLeft:-10,
        borderWidth:1,
        borderColor:"#FFFFFF",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        
    },
    dropDown: {
        borderRadius: 50,
        backgroundColor: "red"
    },
    selectedRowTextStyle: {
        backgroundColor: "red"
    },
    
})
