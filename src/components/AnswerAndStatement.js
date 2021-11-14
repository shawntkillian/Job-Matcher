import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import data from './data'

const Header = (props) => {
    const navigation=useNavigation();
    return (
        <View >
            <TouchableOpacity style = {styles.container}>
              <Text style = {styles.textStatement}>{props.statement}</Text>
              <Text style = {styles.textAnswer}>{props.answer}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create ({
   container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row'

    },
    textStatement: {
        paddingTop: 30,
        color: '#000000',
        fontWeight: '400',
        fontSize: 16
    },
    textAnswer: {
        paddingTop: 30,
        color: '#000000',
        fontWeight: '600',
        fontSize: 16,
        color: '#4DC748'
    },
});

export default Header;