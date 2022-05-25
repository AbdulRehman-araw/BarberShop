import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';

const Date = ({date, day}) => {
  return (
    <TouchableOpacity>
      <View style={{margin: 20, alignItems: 'center'}}>
        <Text style={styles.boldText}>{date}</Text>
        <Text style={styles.lightText}>{day}</Text>
      </View>
    </TouchableOpacity>
  );
};

const BookNow = () => {
  const data = [
    {
      date: 1,
      day: 'Mon',
    },
    {
      date: 2,
      day: 'Tue',
    },
    {
      date: 3,
      day: 'Wed',
    },
    {
      date: 4,
      day: 'Thur',
    },
    {
      date: 5,
      day: 'Fri',
    },
    {
      date: 6,
      day: 'Sat',
    },
    {
      date: 7,
      day: 'Sun',
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.content}>
        <View style={styles.date}>
          <Text style={styles.boldText}>Select Date</Text>
          <View style={styles.datePicker}>
            <Text style={styles.lightText}>Jan 2022</Text>
          </View>
        </View>
        <View style={{}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            renderItem={item => (
              <Date date={item.item.date} day={item.item.day} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default BookNow;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'purple',
    justifyContent: 'flex-end',
  },
  content: {
    flex: 0.9,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    padding: 20,
  },
  date: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  datePicker: {
    borderWidth: 2,
    borderColor: 'purple',
    borderRadius: 10,
    padding: 8,
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
