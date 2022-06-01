import {StyleSheet, Animated, View, ImageBackground} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {transform} from '@babel/core';

const SplashScreen = ({navigation}) => {
  const position = useRef(new Animated.ValueXY({x: 0, y: -300})).current;
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('signIn');
    }, 3000);
    Animated.spring(position, {
      toValue: {x: 0, y: 0},
      stiffness: 200,
      useNativeDriver: true,
    }).start();
  }, [position]);

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        /* ---------------- source={require('../assets/splash.png')} ---------------- */
        style={{
          flex: 1,
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#570861',
        }}>
        <Animated.Image
          source={require('../assets/Logo/logo.png')}
          style={{
            height: 350,
            width: 280,
            tintColor: '#fff',
            shadowOffset: {height: 50, width: 50},
            transform: [{translateX: position.x}, {translateY: position.y}],
          }}
          resizeMode="contain"
        />
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
