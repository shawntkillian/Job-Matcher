import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ChoiceButton = (props) => {
    const navigation=useNavigation();
    return (
        <View >
            <TouchableOpacity style={styles.buttonStyle} >
            <Ionicons name={props.iconName} size={34} color="white" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create ({
    buttonStyle:{
        backgroundColor: "#7D9C7D",
        height: 70,
        width: 70,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
});

export default ChoiceButton;