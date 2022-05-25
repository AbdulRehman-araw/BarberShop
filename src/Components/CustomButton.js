import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({title, navigation}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 10,
        elevation: 6,
        marginVertical: 10,
      }}
      onPress={() => navigation.navigate('BookNow')}>
      <Text style={{alignSelf: 'center', color: '#fff'}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
