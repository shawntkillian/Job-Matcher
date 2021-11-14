import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SecondaryButton = (props) => {
    const navigation=useNavigation();
    return (
        <View >
            <TouchableOpacity style={styles.buttonStyle} onPress={() => navigation.navigate(props.screen)}>
                <Text style={styles.textStyle}>{props.buttonName}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create ({
    buttonStyle:{
        backgroundColor: "#FFFFFF",
        height: 55,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        borderWidth: 4,
        borderColor: '#1D531C',
    },
    textStyle: {
        fontSize: 28,
        color: '#1D531C',
        fontWeight: '400',
        fontSize: 26

    },
});

export default SecondaryButton;