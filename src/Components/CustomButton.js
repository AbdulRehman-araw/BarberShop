import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = ({backgroundColor, title, color, onPress}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={onPress}
        style={{
          backgroundColor: backgroundColor,
          padding: 10,
          marginVertical: 10,
          borderRadius: 30,
        }}>
        <Text style={{textAlign: 'center', color: color, fontSize: 16}}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({});
