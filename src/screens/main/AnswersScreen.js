import React, {useState} from "react";
import { Text, StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AnswersHeader from '../../components/Header';
import AnswerList from '../../components/AnswerList';

const AnswersScreen = () => {
    const [category, setCategory] = useState('Debt');
    const navigation=useNavigation();
    return <View style={styles.screen}>
        <AnswersHeader pageTitle="Answers"></AnswersHeader>
       <ScrollView>
        <AnswerList></AnswerList>
        </ScrollView>
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
        headerText: {
            paddingTop: 30,
            color: '#FFFFFF',
            fontWeight: '800',
            fontSize: 40
        },
});

export default AnswersScreen;