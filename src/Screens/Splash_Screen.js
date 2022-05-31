import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('signIn');
    }, 3000);
  }, []);

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
          backgroundColor: 'purple',
        }}>
        <Image
          source={require('../assets/Logo/logo.png')}
          style={{
            height: 250,
            width: 180,
            tintColor: '#fff',
            shadowOffset: {height: 50, width: 50},
          }}
          resizeMode="contain"
        />
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
