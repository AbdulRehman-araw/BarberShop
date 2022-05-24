import {StyleSheet, Text, View, CheckBox} from 'react-native';
import React from 'react';

const Service_List_Card = ({title, time, price}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={{flexDirection: 'row'}}>
        <View>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />
        </View>
        <View>
          <Text>{title}</Text>
          <Text>{time}</Text>
        </View>
      </View>
      <View>
        <Text>{price}</Text>
      </View>
    </View>
  );
};

export default Service_List_Card;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    elevation: 6,
    borderRadius: 10,
    justifyContent: 'space-around',
  },
});
