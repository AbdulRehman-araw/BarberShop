import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const Artists_Card = ({title, image, tag, star, buttonText}) => {
  return (
    <View style={{marginVertical:15}}>
      <View
        style={{
          marginTop: 30,
          backgroundColor: '#FEFBEA',
          elevation:6,
          borderRadius: 20,
          flexDirection: 'row',
          justifyContent: 'space-around',
          height: 160,
          width: '100%',
        }}>
        <View style={{paddingTop: 30}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
            {title}
          </Text>
          <Text style={{fontSize: 12}}>{tag}</Text>
          <Text style={{fontSize: 12}}>{star}</Text>
          <TouchableOpacity style={{backgroundColor:'purple', borderRadius:10, padding:6, marginTop:20}}>
            <Text style={{color:'#fff', textAlign:'center', fontSize:12}}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
        <View style={{top: -45, elevation: 6}}>
          <Image
            source={image}
            style={{width: 120, height: 180, borderRadius: 20}}
          />
        </View>
      </View>
    </View>
  );
};

export default Artists_Card;

const styles = StyleSheet.create({});
