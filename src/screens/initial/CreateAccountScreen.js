import React, {useState} from "react";
import { Text, StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import SignUpButton from '../../components/PrimaryButton';
import UserInfo from '../../components/UserInput';


const SignUpScreen = () => {
    const [category, setCategory] = useState('Debt');
    const navigation=useNavigation();
    return <View style={styles.screen}>
        <View style = {styles.headerContent}>
            <Text style={styles.headerText}>Information</Text>
        </View>
        <View style = {styles.userContent}>
        <UserInfo inputName = "First Name"></UserInfo>
        <UserInfo inputName = "Last Name"></UserInfo>
        <UserInfo inputName = "School"></UserInfo>
        <UserInfo inputName = "Major"></UserInfo>
        <UserInfo inputName = "City"></UserInfo>
        <UserInfo inputName = "Date of Birth"></UserInfo>
        <UserInfo inputName = "Expected Graduation Year"></UserInfo>
        </View>
        <SignUpButton buttonName = "Sign Up" screen= "CreateAccountScreen"></SignUpButton>
    </View>
};

const styles = StyleSheet.create({
        screen: {
            justifyContent: 'flex-start',
            alignItems: 'center',
            flex:1,
            backgroundColor: "#FFFFFF",
        },
        headerContent: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#B0CBAC',
            width: '100%',
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
        }
});

export default SignUpScreen;