import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Header = (props) => {
    const navigation=useNavigation();
    return (
        <View >
        <View style = {styles.headerContent}>
            <Text style={styles.headerText}>{props.pageTitle}</Text>
        </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    headerContent: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8EA98D',
        width: "100%",
        height: 120,
        marginBottom: 10,
    },
    headerText: {
        paddingTop: 30,
        color: '#FFFFFF',
        fontWeight: '800',
        fontSize: 40
    },
    userContent: {
        marginBottom: 40,
    },
    iconStyle:{
        color: "#D9B8EF"
    },
});

export default Header;