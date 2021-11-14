import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderIcon from './HeaderIcon';


const Header = (props) => {
    const navigation=useNavigation();
    return (
        <View style = {styles.headerContent}> 
            <HeaderIcon screen="CompaniesScreen" iconName="business"></HeaderIcon>
            <HeaderIcon screen="AnswersScreen" iconName="ios-menu"></HeaderIcon>
            <HeaderIcon screen="PersonalityResultsScreen" iconName="person"></HeaderIcon>
        </View>
    );
};

const styles = StyleSheet.create ({
    headerContent: {
        paddingTop: 30,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#8EA98D',
        width: "100%",
        height: 120,
    
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

export default Header;