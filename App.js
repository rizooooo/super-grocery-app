import React from 'react';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';

import Stacks from './src/Stacks';
import { StatusBar } from 'expo-status-bar';
import { Colors } from './src/core/constants';




function App() {
    let [fontsLoaded] = useFonts({
        'LatoBlack': require('./assets/fonts/Lato-Black.ttf'),
        'LatoBold': require('./assets/fonts/Lato-Bold.ttf'),
        'LatoRegular': require('./assets/fonts/Lato-Regular.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <NavigationContainer>
            <StatusBar style="light" backgroundColor={Colors.PRIMARY} />
            <Stacks />
        </NavigationContainer>
    );
}





export default App;