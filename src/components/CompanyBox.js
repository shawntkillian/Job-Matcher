import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const CompanyBox = (props) => {
    const navigation=useNavigation();
    return (
        <View >
            <TouchableOpacity style = {styles.container} onPress={() => navigation.navigate('CompanyInfoScreen')}>
              <Ionicons name={props.iconName} size={34} color="#8EA98D" />
              <Text style = {styles.textStatement}>{props.statement}</Text>
              <Text style = {styles.textAnswer}>{props.answer}%</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create ({
   container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        paddingHorizontal: 20,
        flexDirection: 'row'

    },
    textStatement: {
        paddingTop: 30,
        color: '#000000',
        fontWeight: '400',
        fontSize: 16,
        paddingBottom: 10
    },
    textAnswer: {
        paddingTop: 30,
        color: '#000000',
        fontWeight: '600',
        fontSize: 16,
        color: '#4DC748',
        paddingBottom: 10,
    },
});

export default CompanyBox;