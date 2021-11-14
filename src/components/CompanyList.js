import React from 'react'
import {View, Text, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CompanyBox from './CompanyBox';

const array = [
    {
      key: '1',
      title: 'Company Name',
      subtitle: 97,
    },
    {
      key: '2',
      title: 'Company Name',
      subtitle: 97,
    },
    {
      key: '3',
      title: 'Company Name',
      subtitle: 96,
    },
    {
        key: '4',
        title: 'Company Name',
        subtitle: 95,
      },
      {
        key: '5',
        title: 'Company Name',
        subtitle: 95,
      },
      {
        key: '6',
        title: 'Company Name',
        subtitle: 95,
      },
          {
      key: '7',
      title: 'Company Name',
      subtitle: 94,
    },
    {
      key: '8',
      title: 'Company Name',
      subtitle: 90,
    },
    {
      key: '9',
      title: 'Company Name',
      subtitle: 88,
    },
    {
        key: '10',
        title: 'Company Name',
        subtitle: 83,
      },
      {
        key: '11',
        title: 'Company Name',
        subtitle: 81,
      },
      {
        key: '12',
        title: 'Company Name',
        subtitle: 80,
      },
     
  ];

const CompanyList = (props) => {
    return array.map((element) => {
        return (
          <View key={element.key}>
            <CompanyBox iconName = 'person' statement={element.title} answer={element.subtitle}></CompanyBox>
          </View>
        );
      });

};

const styles = StyleSheet.create ({
    container: {
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default CompanyList;