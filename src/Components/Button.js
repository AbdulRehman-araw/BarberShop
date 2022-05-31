import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({title, navigation}) => {
  return (
    <TouchableOpacity style={styles.mainView} onPress={navigation}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#570861',
    padding: 10,
    borderRadius: 10,
    elevation: 6,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    alignSelf: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
});
