import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Artists_Card from '../Components/Artists_Card';

const Shop_Hair_Artists = () => {
  const img1 = require('../assets/Artists/artist1.png');

  const artists = [
    {
      title: 'David McMinn',
      tag: 'Hair Castle',
      image: img1,
      star: '4.7',
    },
    {
      title: 'Richard Watts',
      tag: 'Cutting Line Studio',
      image: img1,
      star: '4.2',
    },
    {
      title: 'David McMinn',
      tag: 'Hair Castle',
      image: img1,
      star: '4.7',
    },
    {
      title: 'Richard Watts',
      tag: 'Cutting Line Studio',
      image: img1,
      star: '4.2',
    },
  ];

  return (
    <View style={{margin: 10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
        }}>
        <Text style={{fontSize: 18, color: '#000', fontWeight: 'bold'}}>
          Shop Hair Artists
        </Text>
        <TouchableOpacity>
          <Text style={{color: 'purple'}}>See All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
      showsVerticalScrollIndicator={false}
        data={artists}
        renderItem={item => (
          <TouchableOpacity activeOpacity={0.9}>
            <Artists_Card
              title={item.item.title}
              image={item.item.image}
              tag={item.item.tag}
              star={item.item.star}
              buttonText={'View Details'}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Shop_Hair_Artists;

const styles = StyleSheet.create({});
