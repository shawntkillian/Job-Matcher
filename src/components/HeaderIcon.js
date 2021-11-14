import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const HeaderIcon = (props) => {
    const navigation=useNavigation();
    return (
        <View >
         <View>
            <TouchableOpacity onPress={() => navigation.navigate(props.screen)}>
                <Ionicons name={props.iconName} size={34} color="white" />
            </TouchableOpacity>
        </View>
        </View>
    );
};

const styles = StyleSheet.create ({
    headerContent: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B0CBAC',
        width: "100%",
        height: 120,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginBottom: 20,
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

export default HeaderIcon;