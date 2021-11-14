import React from 'react'
import {View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AnswerAndStatement from './AnswerAndStatement';
import data from './data'



const AnswerList= (props) => {
    return data.map((element) => {
        return (
          <View key={element.key}>
            <AnswerAndStatement statement={element.name} answer={element.price}></AnswerAndStatement>
          </View>
        );
      });

};

const styles = StyleSheet.create ({
    container: {
        marginVertical: 10,
    },
});

export default AnswerList;