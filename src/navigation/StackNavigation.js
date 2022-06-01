import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

/* ------------------------------- navigation ------------------------------- */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';

/* --------------------------------- Screens -------------------------------- */
import Sign_In from './../Screens/Sign_In';
import Sign_Up from './../Screens/Sign_Up';
import SplashScreen from './../Screens/Splash_Screen';

/* ---------------------------- Stack navigation ---------------------------- */
const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="splash"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signIn"
        component={Sign_In}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signUp"
        component={Sign_Up}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="bottom"
        component={BottomTabNavigation}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;

/* --------------------------------- Styles --------------------------------- */
const styles = StyleSheet.create({});
