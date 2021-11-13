import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/main/HomeScreen';
import CompaniesScreen from './src/screens/main/CompaniesScreen';
import AnswersScreen from './src/screens/main/AnswersScreen';
import { NavigationContainer, useFocusEffect, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
          <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen  name = "HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen  name = "CompaniesScreen" component={CompaniesScreen} options={{ headerShown: false }} />
            <Stack.Screen  name = "AnswersScreen" component={AnswersScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
