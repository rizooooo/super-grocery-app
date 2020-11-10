import React from 'react'
import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../../../core/constants';
import { Categories } from './constants';

const CategoryMenu = () => {
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.headerText}>Categories</Text>
                <Text style={styles.subHeaderText}>VIEW ALL</Text>
            </View>

            <FlatList
                horizontal
                data={Categories}
                showsHorizontalScrollIndicator={false}
                renderItem={(d) => (
                    <View style={{ marginHorizontal: 10, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={d.item.img} style={{ width: 50, height: 50, resizeMode: 'cover' }} />
                        <Text style={styles.itemText}>{d.item.name}</Text>
                    </View>
                )}
            />
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    headerText: {
        fontFamily: 'LatoBlack',
        fontSize: 18,
        color: 'black'
    },
    itemText: {
        fontFamily: 'LatoBold',
        fontSize: 12,
        color: 'black',
        marginVertical: 5
    },
    subHeaderText: {
        fontFamily: 'LatoRegular',
        fontSize: 10,
        color: Colors.DARK_GRAY
    },
});

export default CategoryMenu
