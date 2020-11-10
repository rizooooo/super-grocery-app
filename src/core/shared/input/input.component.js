import React from 'react'
import { StyleSheet, TextInput } from 'react-native'
import { Colors } from '../../constants';

const Input = () => {
    return (
        <TextInput
            style={styles.input}
            placeholder={'Search Product or Store'}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        alignSelf: 'stretch',
        borderWidth: 5,
        borderColor: Colors.GRAY,
        backgroundColor: Colors.GRAY,
        fontFamily: 'LatoRegular',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 10,
    },
});

export default Input
