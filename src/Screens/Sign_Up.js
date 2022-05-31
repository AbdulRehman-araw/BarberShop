import {StyleSheet, View, Image, ScrollView, Text} from 'react-native';
import React from 'react';
import Input from '../Components/Input';
import CustomButton from '../Components/CustomButton';

const Sign_Up = ({navigation}) => {
  return (
    <ScrollView
      contentContainerStyle={{flexGrow: 1, justifyContent: 'space-evenly'}}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#F6F5FA',
        }}>
        {/* logo */}
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'purple',
            width: '100%',
            height: '35%',
            borderBottomLeftRadius: 100,
          }}>
          <Image
            source={require('../assets/Logo/logo.png')}
            resizeMode="contain"
            style={{height: 130, width: 130, tintColor: '#fff'}}
          />
          <View
            style={{
              alignSelf: 'flex-end',
              top: 20,
              right: 30,
              paddingBottom: 30,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: 'bold',
                letterSpacing: 1,
              }}>
              Sign Up
            </Text>
          </View>
        </View>

        {/* input fields */}
        <View style={{width: '85%', marginVertical: 10}}>
          <Input placeHolder="UserName" />
          <Input placeHolder="Email" />
          <Input placeHolder="Phone Number" keyboardType={'phone-pad'} />
          <Input placeHolder="Password" secureTextEntry={true} />
        </View>

        {/* buttons */}
        <View style={{width: '85%', marginVertical: 20}}>
          <CustomButton
            title="Sign Up"
            backgroundColor="purple"
            color="#fff"
            onPress={() => navigation.navigate('bottom')}
          />
          <View style={{alignItems: 'center', marginTop: 10, marginBottom: 30}}>
            <Text style={{textAlign: 'center'}}>
              Already a member ? {'\b'}
              <Text
                style={{color: 'purple', fontSize: 16}}
                onPress={() => navigation.navigate('signIn')}>
                Login
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Sign_Up;

const styles = StyleSheet.create({});
