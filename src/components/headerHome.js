import { View, Text, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import images from '../../contains/images';
import { SelectList } from 'react-native-dropdown-select-list';
import {COLORS} from '../../contains/theme'
const HeaderComponents = ({ navigation }) => {
    const [selected, setSelected] = React.useState("");
    const data = [
        { key: '1', value: 'GRESIK', disabled: true, },
        { key: '2', value: 'Appliances' },
        { key: '3', value: 'Cameras' },
        { key: '4', value: 'Computers'},
        { key: '5', value: 'Vegetables' },
        { key: '6', value: 'Diary Products' },
        { key: '7', value: 'Drinks' },
    ]
    const iconCaret = <Icon name="caret-down" size={17} color={COLORS.second} />;
    return (
        <Appbar.Header style={{ backgroundColor: "rgba(28, 27, 31, 1)" }}>
            <View style={styles.container}  >
                <View style={styles.mennu}>
                    <Appbar.Action
                        icon={() => (
                            <Image
                                source={images.iconMenu}
                                style={{ width: 28, height: 28, tintColor: COLORS.second }}
                            />
                        )}
                        onPress={() => navigation.toggleDrawer()}
                    />
                </View>
                <View style={styles.location}>
                    <Appbar.Action icon="map-marker" color='#DA865A' />
                    <View >
                        <SelectList
                            setSelected={(val) => setSelected(val)}
                            data={data}
                            save="value"
                            boxStyles={{borderRadius:25}}
                            defaultOption={{ key:'1', value:'GRESIK' }} 
                            inputStyles={{paddingHorizontal:7,color:COLORS.second}}
                            dropdownStyles={{borderRadius:20}}
                            arrowicon={iconCaret}
                        />
                    </View>
                </View>
                <View style={styles.notification}>
                    <Appbar.Action icon="bell-badge" 
                    onPress={() => navigation.navigate('Notification')}
                    color="#E98383" />
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
        justifyContent: 'center',
        alignItems: "center"
    },

    select: {
        width: 100,
        height: 22,
        borderRadius: 40,
        borderWidth: 1,
        borderColor: COLORS.second,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",

    },
    dropDown: {
        borderRadius: 50,
        backgroundColor: "red"
    },
    selectedRowTextStyle: {
        backgroundColor: "red"
    },

})
