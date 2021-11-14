import React, {useState} from "react";
import { Text, StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import HomeHeader from '../../components/HomeHeader';
import ChoiceCollection from "../../components/ChoiceCollection";
import StatementCard from "../../components/StatementCard";
import Swiper from "../../components/Swiper";


const HomeScreen = () => {
    const [category, setCategory] = useState('Debt');
    const navigation=useNavigation();
    return <View style={styles.screen}>
            <View>
             <HomeHeader></HomeHeader>
                 <Swiper></Swiper>
             </View>
             <ChoiceCollection></ChoiceCollection>
           </View>
};

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "#FFFFFF",
        flex:1, 
        justifyContent: 'space-between',
        paddingBottom: 60
        
    },

});

export default HomeScreen;