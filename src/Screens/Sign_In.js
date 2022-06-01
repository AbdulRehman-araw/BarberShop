import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import Input from '../Components/Input';
import CustomButton from '../Components/CustomButton';

const Sign_In = ({navigation}) => {
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
        <View></View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#570861',
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
              Login
            </Text>
          </View>
        </View>

        {/* input fields */}
        <View style={{width: '85%', marginTop: 40}}>
          <Input placeHolder="UserName" />
          <Input placeHolder="Password" secureTextEntry={true} />
        </View>

        {/* buttons */}
        <View style={{width: '85%', marginVertical: 40}}>
          <CustomButton
            title="Login"
            backgroundColor="#570861"
            color="#fff"
            onPress={() => navigation.navigate('signUp')}
          />
          <View style={{alignItems: 'center', marginTop: 10}}>
            <Text style={{textAlign: 'center'}}>
              Create Acount ? {'\b'}
              <Text
                style={{color: 'purple', fontSize: 16}}
                onPress={() => navigation.navigate('signUp')}>
                Sign Up
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Sign_In;

const styles = StyleSheet.create({});
