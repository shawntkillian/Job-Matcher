import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/main/HomeScreen';
import CompaniesScreen from './src/screens/main/CompaniesScreen';
import CompanyInfoScreen from './src/screens/main/CompanyInfoScreen';
import AnswersScreen from './src/screens/main/AnswersScreen';
import PersonalityResultsScreen from './src/screens/main/PersonalityResultsScreen';
import LogInScreen from './src/screens/initial/LogInScreen';
import SignUpScreen from './src/screens/initial/SignUpScreen';
import CreateAccountScreen from './src/screens/initial/CreateAccountScreen';
import WelcomeScreen from './src/screens/initial/WelcomeScreen';
import { NavigationContainer, useFocusEffect, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const StackInit = createStackNavigator();
const StackMain = createStackNavigator();
const loggedIn = 1;



export default function App() {
  return (
    <NavigationContainer>
    {loggedIn == null ? (
        <StackInit.Navigator initialRouteName="WelcomeScreen">
          <StackMain.Screen  name = "WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
          <StackMain.Screen  name = "LogInScreen" component={LogInScreen} options={{ headerShown: false }} />
          <StackMain.Screen  name = "SignUp Screen" component={SignUpScreen} options={{ headerShown: false }} />
          <StackMain.Screen  name = "CreateAccountScreen" component={CreateAccountScreen} options={{ headerShown: false }} />
        </StackInit.Navigator>
    ):(
        <StackMain.Navigator initialRouteName="HomeScreen">
          <StackMain.Screen  name = "HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
          <StackMain.Screen  name = "CompaniesScreen" component={CompaniesScreen} options={{ headerShown: false }} />
          <StackMain.Screen  name = "CompanyInfoScreen" component={CompanyInfoScreen} options={{ headerShown: false }} />
          <StackMain.Screen  name = "AnswersScreen" component={AnswersScreen} options={{ headerShown: false }} />
          <StackMain.Screen  name = "PersonalityResultsScreen" component={PersonalityResultsScreen} options={{ headerShown: false }} />
        </StackMain.Navigator>
    )}
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
