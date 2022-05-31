import {StyleSheet, TextInput, View, Image} from 'react-native';
import React from 'react';

const Input = ({placeHolder, secureTextEntry, keyboardType, width, height}) => {
  return (
    <View style={{}}>
      <TextInput
        selectionColor={'purple'}
        placeholder={placeHolder}
        placeholderTextColor="#D1D1D1"
        secureTextEntry={secureTextEntry ? secureTextEntry : false}
        keyboardType={keyboardType ? keyboardType : 'default'}
        width={width}
        height={height}
        style={{
          backgroundColor: '#fff',
          borderRadius: 30,
          elevation: 8,
          marginVertical: 10,
          padding: 8,
          paddingLeft: 20,
          fontSize: 16,
        }}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({});
