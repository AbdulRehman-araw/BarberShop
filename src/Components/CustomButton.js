import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({title, navigation}) => {
  return (
    <TouchableOpacity style={styles.mainView} onPress={navigation}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'purple',
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
