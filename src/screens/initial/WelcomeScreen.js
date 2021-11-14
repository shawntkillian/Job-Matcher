import React, {useState} from "react";
import { Text, StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import LogInButton from '../../components/PrimaryButton';
import SignUpButton from '../../components/SecondaryButton';


const WelcomeScreen = () => {
    const [category, setCategory] = useState('Debt');
    const navigation=useNavigation();
    return <View style={styles.screen}>
        <Text> This is your Welcome Screen! </Text>
        <LogInButton buttonName = "Log In"   screen= "LogInScreen"></LogInButton>
        <SignUpButton buttonName = "Sign Up" screen= "SignUpScreen"></SignUpButton>
    </View>
};

const styles = StyleSheet.create({
   screen: {
            justifyContent: 'center',
            alignItems: 'center',
            flex:1,
            backgroundColor: "#B0CBAC",
        }
});

export default WelcomeScreen;