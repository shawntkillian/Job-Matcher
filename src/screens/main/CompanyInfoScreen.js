import React, {useState} from "react";
import { Text, StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import PersonalityHeader from '../../components/Header';

const PersonalityResultsScreen = () => {
    const [category, setCategory] = useState('Debt');
    const navigation=useNavigation();
    return <View style={styles.screen}>
       <PersonalityHeader pageTitle="Company Info"></PersonalityHeader>
    </View>
};

const styles = StyleSheet.create({
    screen: {
        justifyContent: 'flex-start',

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
});

export default PersonalityResultsScreen;