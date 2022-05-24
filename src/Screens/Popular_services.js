import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Services_Card from '../Components/Services_Card';

const Popular_services = () => {
  const men = require('../assets/popular_services/Men_hair_cut.png');
  const women = require('../assets/popular_services/Women_hair_cut.png');

  const service = [
    {
      title: 'Men',
      image: men,
    },
    {
      title: 'Women',
      image: women,
    },
    {
      title: 'Men',
      image: men,
    },
    {
      title: 'Women',
      image: women,
    },
    {
      title: 'Men',
      image: men,
    },
    {
      title: 'Women',
      image: women,
    },
    {
      title: 'Men',
      image: men,
    },
  ];

  return (
    <View style={{margin:10}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 18, color: '#000', fontWeight: 'bold'}}>
          Popular Services
        </Text>
        <TouchableOpacity>
          <Text style={{color: 'purple'}}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={service}
        keyExtractor={(item,index) => index}
        renderItem={item => (
          <TouchableOpacity activeOpacity={0.9}>
            <Services_Card title={item.item.title} image={item.item.image} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Popular_services;

const styles = StyleSheet.create({});
