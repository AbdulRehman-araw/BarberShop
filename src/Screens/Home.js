import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Popular_services from './Popular_services';
import Shop_Hair_Artists from './Shop_Hair_Artists';

const Home = ({navigation}) => {
  return (
    <View
      style={{flex: 1, backgroundColor: 'purple', justifyContent: 'flex-end'}}>
      <View
        style={{
          flex: 0.1,
          justifyContent: 'space-around',
          flexDirection: 'row',
        }}>
        <Text style={{color: '#fff'}}>Menu</Text>
        <Text>Menu</Text>
        <Text>Menu</Text>
      </View>
      <View
        style={{
          flex: 0.85,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: 'white',
        }}>
        <Popular_services />
        <Shop_Hair_Artists navigation={navigation} />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
