import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import React from 'react';
import Date from '../Components/Date';
import Slots from '../Components/Slots';
import CustomButton from './../Components/CustomButton';
import Service_List_Card from './../Components/Service_List_Card';

const BookNow = ({navigation}) => {
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

  const time = [
    {
      time: '8:00',
    },
    {
      time: '8:00',
    },
    {
      time: '8:00',
    },
    {
      time: '8:00',
    },
    {
      time: '8:00',
    },
    {
      time: '8:00',
    },
    {
      time: '8:00',
    },
  ];

  return (
    <View style={styles.mainContainer}>
      <View style={styles.content}>
        <View style={styles.date}>
          <View style={styles.padding}>
            <Text style={styles.boldText}>Select Date</Text>
          </View>
          <View style={styles.datePicker}>
            <Text
              style={[
                styles.lightText,
                {fontWeight: '900', paddingHorizontal: 5},
              ]}>
              Jan 2022
            </Text>
            <Image
              source={require('../assets/icons/down_arrow.png')}
              style={{
                height: 12,
                width: 12,
              }}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={{}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            keyExtractor={(item, index) => index}
            renderItem={item => (
              <Date date={item.item.date} day={item.item.day} />
            )}
          />
        </View>
        <View>
          <View style={styles.padding}>
            <Text style={styles.boldText}>Available Slots</Text>
          </View>
          <View style={styles.availableSlots}>
            <View style={styles.timeSlots}>
              <View style={[styles.outerCircle, {borderColor: '#aaa'}]}>
                <View
                  style={[
                    styles.innerCircle,
                    {backgroundColor: '#aaa'},
                  ]}></View>
              </View>
              <Text>Morning</Text>
            </View>
            <View style={styles.slots}>
              <View style={styles.line}></View>
              <Slots time="8:00" />
              <Slots time="9:30" />
              <Slots time="11:00" />
            </View>
            <View style={styles.timeSlots}>
              <View style={styles.outerCircle}>
                <View style={styles.innerCircle}></View>
              </View>
              <Text style={[styles.lightText, {fontWeight: '900'}]}>
                Afternoon
              </Text>
            </View>
            <View style={styles.slots}>
              <View style={styles.line}></View>
              <Slots time="2:30" />
              <Slots time="4:00" />
              <Slots time="6:30" />
              <Slots time="8:00" />
            </View>
          </View>
        </View>

        <View>
          <View style={styles.padding}>
            <Text style={styles.boldText}>Service List</Text>
          </View>
          <View style={styles.service}>
            <Text style={styles.boldText}> Men's Hair Cut</Text>
            <Text style={[styles.boldText, styles.textBorder]}>$45</Text>
          </View>
        </View>

        <View>
          <CustomButton
            title="Proceed to Payment"
            navigation={() => navigation.navigate('Home')}
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
    flexDirection: 'row',
    justifyContent: 'space-around',
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
  slots: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  timeSlots: {
    marginVertical: 12,
    flexDirection: 'row',
  },
  availableSlots: {
    flexWrap: 'wrap-reverse',
    alignItems: 'flex-end',
  },
  padding: {
    paddingVertical: 15,
  },
  outerCircle: {
    borderRadius: 20,
    borderColor: 'purple',
    height: 12,
    width: 12,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    left: -20,
    top: 3,
  },
  innerCircle: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#fff',
    height: 10,
    width: 10,
    backgroundColor: 'purple',
  },
  line: {
    backgroundColor: '#aaa',
    width: 1,
    left: -14,
    color: '#aaa',
  },
  service: {
    backgroundColor: '#fff',
    elevation: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  textBorder: {
    borderRadius: 10,
    backgroundColor: 'purple',
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#CF9FFF',
  },
});
