import React from 'react'
import { Dimensions, FlatList, Image, View } from 'react-native'
import { Banners } from '../../constants'
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../../../../core/constants';

const BannerSection = () => {
    return (
        <View>
            <FlatList
                horizontal
                data={Banners}
                disableIntervalMomentum={true}
                snapToInterval={Dimensions.get('window').width}
                renderItem={(d) => (
                    <View style={{ borderRadius: 20 }}>
                        <Image source={d.item.img} style={{ width: Dimensions.get('window').width - 10, height: 180, resizeMode: 'cover' }} />
                    </View>
                )}
            />
            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop: 20 }}>
                <FontAwesome5 solid name='circle' color={Colors.PRIMARY} />
                <FontAwesome5 style={{ marginHorizontal: 5 }} solid name='circle' color={Colors.GRAY} />
                <FontAwesome5 solid name='circle' color={Colors.GRAY} />
            </View>
        </View>
    )
}

export default BannerSection
