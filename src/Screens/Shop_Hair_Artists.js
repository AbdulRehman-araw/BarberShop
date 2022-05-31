import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import Artists_Card from '../Components/Artists_Card';

const Shop_Hair_Artists = ({navigation}) => {
  const img1 = require('../assets/Artists/artist1.png');
  const img2 = require('../assets/Artists/artist2.png');
  const star = require('../assets/icons/star.png');

  const artists = [
    {
      title: 'David McMinn',
      tag: 'Hair Castle',
      image: img1,
      starRating: '4.7',
      star: star,
    },
    {
      title: 'Richard Watts',
      tag: 'Cutting Line Studio',
      image: img2,
      starRating: '4.2',
      star: star,
    },
    {
      title: 'David McMinn',
      tag: 'Hair Castle',
      image: img1,
      starRating: '4.7',
      star: star,
    },
    {
      title: 'Richard Watts',
      tag: 'Cutting Line Studio',
      image: img2,
      starRating: '4.2',
      star: star,
    },
  ];

  return (
    <View style={{margin: 10, flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 10,
          paddingHorizontal: 20,
        }}>
        <Text style={{fontSize: 18, color: '#000', fontWeight: 'bold'}}>
          Shop Hair Artists
        </Text>
        <TouchableOpacity>
          <Text style={{color: 'purple'}}>See All</Text>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={artists}
          keyExtractor={(item, index) => index}
          ListFooterComponent={() => <View style={{height: 45}} />}
          ListHeaderComponent={() => <View style={{height: 0}} />}
          renderItem={item => (
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() =>
                navigation.navigate('artist_detail', {
                  title: item.item.title,
                  image: item.item.image,
                  tag: item.item.tag,
                  starRating: item.item.starRating,
                  star: item.item.star,
                })
              }>
              <Artists_Card
                title={item.item.title}
                image={item.item.image}
                tag={item.item.tag}
                starRating={item.item.starRating}
                star={item.item.star}
                buttonText={'View Details'}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Shop_Hair_Artists;

const styles = StyleSheet.create({});
