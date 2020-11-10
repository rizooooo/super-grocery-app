import React, { useState } from 'react'
import { Text, View, StyleSheet, StatusBar, ScrollView, Dimensions, Pressable } from 'react-native'
import { SvgXml } from 'react-native-svg'
import { WelcomeTexts } from './constants'
import { FontAwesome5 } from '@expo/vector-icons';
import { Colors } from '../../core/constants';
import { useRoute, useNavigation } from '@react-navigation/native';
const LandingScreen = () => {
    const [page, setPage] = useState(0);
    const { navigate } = useNavigation();
    const handleScroll = e => {
        setPage(Math.round(parseFloat(e.nativeEvent.contentOffset.x / Dimensions.get('window').width)))
    }

    return (
        <View style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
            <View style={{ display: 'flex', alignItems: 'flex-end', backgroundColor: '#fff', padding: 10 }}>
                <FontAwesome5 name='arrow-right' color={Colors.PRIMARY} size={20} />
            </View>
            <ScrollView
                horizontal
                disableIntervalMomentum={true}
                snapToInterval={Dimensions.get('window').width}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.container}
                onMomentumScrollEnd={handleScroll}
            >
                {WelcomeTexts.map((a, index) => (
                    <View key={a.title} style={{ width: Dimensions.get('window').width, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ alignSelf: 'stretch', justifyContent: 'center', alignItems: 'center', marginHorizontal: 20 }}>

                            <SvgXml width={'80%'} height={360} xml={a.image} />
                            <Text style={{ fontFamily: 'LatoBlack', fontSize: 20 }}>{a.title}</Text>
                            <Text style={{ fontFamily: 'LatoRegular', textAlign: 'center', marginTop: 10, color: Colors.DARK_GRAY }}>{a.description}</Text>
                        </View>

                    </View>
                ))}
            </ScrollView>
            <View style={{ display: 'flex', flexDirection: 'column', alignSelf: 'stretch', backgroundColor: '#fff' }}>
                <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', paddingVertical: 10 }}>

                    <FontAwesome5 solid name='circle' color={page === 0 ? Colors.PRIMARY : Colors.GRAY} />
                    <FontAwesome5 style={{ marginHorizontal: 5 }} solid name='circle' color={page === 1 ? Colors.PRIMARY : Colors.GRAY} />
                    <FontAwesome5 solid name='circle' color={page === 2 ? Colors.PRIMARY : Colors.GRAY} />
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignSelf: 'stretch', padding: 10 }}>
                    <Pressable android_ripple={true} style={{ ...styles.button, backgroundColor: Colors.GRAY, borderColor: Colors.GRAY }}>
                        <Text style={styles.buttonText}>{'Log In'}</Text>
                    </Pressable >
                    <Pressable onPress={() => {
                        console.log('Yow');
                        navigate('Home');
                    }} style={{ ...styles.button, backgroundColor: Colors.PRIMARY, borderColor: Colors.PRIMARY }}>
                        <Text style={{ ...styles.buttonText, color: '#fff' }} >{'Get Started'}</Text>
                    </Pressable >
                </View>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#fff',
    },
    button: {
        padding: 15,
        borderWidth: 1,
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 5,
        borderRadius: 10
    },
    buttonText: {
        fontFamily: 'LatoBold'
    }
});

export default LandingScreen
