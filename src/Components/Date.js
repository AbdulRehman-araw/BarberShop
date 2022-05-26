import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Date = ({date, day}) => {
  return (
    <TouchableOpacity>
      <View style={styles.main}>
        <Text style={styles.boldText}>{date}</Text>
        <Text style={[styles.lightText, {color: '#acacac'}]}>{day}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Date;

const styles = StyleSheet.create({
  main: {
    margin: 20,
    alignItems: 'center',
  },
  boldText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  lightText: {
    fontSize: 14,
    color: '#000',
  },
});
