import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Slots = ({time}) => {
  return (
    <View style={styles.main}>
      <Text>{time}</Text>
    </View>
  );
};

export default Slots;

const styles = StyleSheet.create({
  main: {
    margin: 6,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
  },
  text: {
    color: '#ccc',
  },
});
