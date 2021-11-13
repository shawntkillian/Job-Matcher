import React, {useState} from "react";
import { Text, StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';


const PersonalityResultsScreen = () => {
    const [category, setCategory] = useState('Debt');
    const navigation=useNavigation();
    return <View style={styles.screen}>
        <Text> This is your Personality Results Screen! </Text>
    </View>
};

const styles = StyleSheet.create({
   screen: {
            justifyContent: 'center',
            alignItems: 'center',
            flex:1,
        }
});

export default PersonalityResultscreen;