import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Artists_Card = ({title, image, tag, star, starRating, buttonText}) => {
  return (
    <View style={{marginVertical: 15}}>
      <View
        style={{
          marginTop: 30,
          backgroundColor: '#FEFBEA',
          elevation: 6,
          borderRadius: 20,
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: 140,
          width: '90%',
          alignSelf: 'center',
        }}>
        <View style={{paddingTop: 15}}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#000',
              lineHeight: 25,
            }}>
            {title}
          </Text>
          <Text style={{fontSize: 12, lineHeight: 20}}>{tag}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 14}}>{starRating}</Text>
            <Image source={star} style={{height: 10, width: 10, left: 5}} />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: 'purple',
              borderRadius: 10,
              padding: 6,
              marginTop: 10,
            }}>
            <Text style={{color: '#fff', textAlign: 'center', fontSize: 12}}>
              {buttonText}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{top: -45, elevation: 6}}>
          <Image
            source={image}
            style={{width: 100, height: 160, borderRadius: 20}}
          />
        </View>
      </View>
    </View>
  );
};

export default Artists_Card;

const styles = StyleSheet.create({});
