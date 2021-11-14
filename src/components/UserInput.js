import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserInput = (props) => {
    const navigation=useNavigation();
    const [number, onChangeNumber] = React.useState(null);
    return (
        <View >
                <TextInput style={styles.buttonStyle}  
                placeholder={props.inputName}
                onChangeText={onChangeNumber}
                value={number}/>
        </View>
    );
};

const styles = StyleSheet.create ({
 
    buttonStyle:{
        backgroundColor: "#FFFFFF",
        height: 55,
        width: 350,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: '#8EA98D',
        fontWeight: '400',
        fontSize: 20,
        paddingLeft: 10,
        margin: 10
    },
});

export default UserInput;