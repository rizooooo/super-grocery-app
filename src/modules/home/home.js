import React from 'react'
import { Dimensions, FlatList, Image, ScrollView, StatusBar, Text, TextInput, View } from 'react-native';
import { Colors } from '../../core/constants';
import { Banners } from './constants';
import { FontAwesome5 } from '@expo/vector-icons';
import { BannerSection, CategoryMenu } from './components';
import { Input } from '../../core/shared';

const HomeScreen = () => {
    return (
        <View style={{ backgroundColor: '#ffffff', padding: 15, display: 'flex', marginTop: StatusBar.currentHeight }}>
            <View style={{ marginBottom: 10 }}>
                <Input />
            </View>

            <BannerSection />
            <CategoryMenu />
        </View>

    )
}

export default HomeScreen;
