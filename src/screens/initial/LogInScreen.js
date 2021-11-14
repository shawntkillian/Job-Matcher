import React, {useState} from "react";
import { Text, StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import LogInButton from '../../components/PrimaryButton';
import UserInfo from '../../components/UserInput';


const LogInScreen = () => {
    const [category, setCategory] = useState('Debt');
    const navigation=useNavigation();
    return <View style={styles.screen}>
        <Text> This is your LogIn Screen! </Text>
        <UserInfo inputName = "Email"></UserInfo>
        <UserInfo inputName = "Password"></UserInfo>
        <LogInButton buttonName = "Log In"   screen= "LogInScreen"></LogInButton>
    </View>
};

const styles = StyleSheet.create({
   screen: {
            justifyContent: 'center',
            alignItems: 'center',
            flex:1,
            backgroundColor: "#B0CBAC"
        }
});

export default LogInScreen;