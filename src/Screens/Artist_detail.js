import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Popular_services from './Popular_services';
import Shop_Hair_Artists from './Shop_Hair_Artists';
import Service_List_Card from '../Components/Service_List_Card';

const Artist_detail = ({route, navigation}) => {
  const {title, star, tag, image} = route.params;

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.3}}>
        <Image
          source={require('../assets/Artists/artist_detail.png')}
          style={{width: '100%'}}
          resizeMode="stretch"
        />
      </View>
      <View
        style={{
          flex: 0.85,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: 'white',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
              {title}
            </Text>
            <Text style={{fontSize: 12}}>{tag}</Text>
            <Text style={{fontSize: 12}}>{star}</Text>
          </View>
          <Image
            source={image}
            style={{
              height: 150,
              width: 90,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: '#fff',
            }}
          />
        </View>
        <View style={{justifyContent: 'flex-start', flex: 1}}>
          <Text style={{color: '#000', fontSize: 16, fontWeight: 'bold'}}>
            Service List
          </Text>
        </View>
        <View style={{flex: 1}}>
          <Service_List_Card title="Men's Hair Cut" time="45 min" price="$45" />
        </View>
      </View>
    </View>
  );
};

export default Artist_detail;

const styles = StyleSheet.create({});
