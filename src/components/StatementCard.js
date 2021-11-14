import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const StatementCard = (props) => {
    const navigation=useNavigation();
    return (
        <View >
        <View style = {styles.container}>
            <Text style={styles.headerText}>Text goes here</Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B0CBAC',
        marginHorizontal: 15,
        height: 500,
        borderRadius: 30
    },
    headerText: {
        color: '#FFFFFF',
        fontWeight: '400',
        fontSize: 40
    },
});

export default StatementCard;