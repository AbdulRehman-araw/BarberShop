import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

/* -------------------------------- CheckBox -------------------------------- */
import CheckBox from '@react-native-community/checkbox';

const Service_List_Card = ({title, time, price}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: toggleCheckBox ? '#fff' : '#fff',
        elevation: toggleCheckBox ? 6 : 0,
        borderRadius: 10,
        borderWidth: toggleCheckBox ? 0 : 1,
        borderColor: '#ccc',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        margin: 8,
      }}>
      <View style={styles.leftItems}>
        <CheckBox
          style={{}}
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
          tintColors={{true: 'purple', false: '#ccc'}}
        />
        <View style={{justifyContent: 'center'}}>
          <Text style={styles.boldText}>{title}</Text>
          {time ? <Text style={styles.lightText}>{time}</Text> : <View></View>}
        </View>
      </View>
      <View>
        <Text style={styles.boldText}>{price}</Text>
      </View>
    </View>
  );
};

export default Service_List_Card;

const styles = StyleSheet.create({
  leftItems: {
    flexDirection: 'row',
  },
  boldText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  lightText: {
    fontSize: 10,
  },
});
