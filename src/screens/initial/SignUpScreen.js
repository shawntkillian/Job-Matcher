import React, {useState} from "react";
import { Text, StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import SignUpButton from '../../components/PrimaryButton';
import UserInfo from '../../components/UserInput';


const SignUpScreen = () => {
    const [category, setCategory] = useState('Debt');
    const navigation=useNavigation();
    return (
    <View style={styles.screen}>
        <View style={styles.bottomPanel}>
            <View>
            <UserInfo inputName = "Email"></UserInfo>
            <UserInfo inputName = "Password"></UserInfo>
            </View>
            <SignUpButton buttonName = "Sign Up"   screen= "CreateAccountScreen"></SignUpButton>
        </View>
    </View>
    )};

const styles = StyleSheet.create({
   screen: {
            justifyContent: 'flex-end',
            alignItems: 'center',
            flex:1,
            backgroundColor: "#B0CBAC"
        },
        input: {
            height: 100,
        },
        bottomPanel: {
            height: "50%",
            width: "100%",
            backgroundColor: "#FFFFFF",
            justifyContent: 'space-around',
            alignItems: 'center',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            paddingBottom: 40,
        },
});

export default SignUpScreen;