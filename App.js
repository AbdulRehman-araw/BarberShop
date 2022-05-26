import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Home from './src/Screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Artist_detail from './src/Screens/Artist_detail';
import BookNow from './src/Screens/BookNow';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerLeft: () => (
              <TouchableOpacity>
                <Image
                  source={require('../Barber/src/assets/icons/hamburger.png')}
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 15,
                    top: '15%',
                    tintColor: '#fff',
                  }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity activeOpacity={3}>
                <Image
                  source={require('../Barber/src/assets/Artists/artist1.png')}
                  style={{width: 40, height: 40, borderRadius: 20, top: '10%'}}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            ),
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="artist_detail"
          component={Artist_detail}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BookNow"
          component={BookNow}
          options={{
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
