import React, {useState} from "react";
import { Text, StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import CompanyMatchHeader from '../../components/Header';
import CompanyList from '../../components/CompanyList';

const CompaniesScreen = () => {
    const [category, setCategory] = useState('Debt');
    const navigation=useNavigation();
    return <View style={styles.screen}>
        <CompanyMatchHeader pageTitle="Company Matches"></CompanyMatchHeader>
        <ScrollView>
            <CompanyList></CompanyList>
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

export default CompaniesScreen;