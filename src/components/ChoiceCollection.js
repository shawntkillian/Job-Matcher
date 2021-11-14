import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ChoiceButton from './ChoiceButton';

const ChoiceCollection = (props) => {
    const navigation=useNavigation();
    return (
          <View style={styles.buttonCollection} >
               <ChoiceButton iconName = 'arrow-back'></ChoiceButton> 
               <ChoiceButton iconName = 'close-outline'></ChoiceButton> 
               <ChoiceButton iconName = 'md-chevron-up'></ChoiceButton> 
               <ChoiceButton iconName = 'heart'></ChoiceButton> 
               <ChoiceButton iconName = 'arrow-forward'></ChoiceButton> 
            </View>
    );
};

const styles = StyleSheet.create ({
    buttonCollection:{
        flexDirection:'row',
        justifyContent: 'space-around'
    },
});

export default ChoiceCollection;