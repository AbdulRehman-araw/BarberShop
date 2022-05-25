import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Popular_services from './Popular_services';
import Shop_Hair_Artists from './Shop_Hair_Artists';
import Service_List_Card from '../Components/Service_List_Card';
import CustomButton from './../Components/CustomButton';

const Artist_detail = ({route, navigation}) => {
  const {title, star, tag, image} = route.params;

  const service_list = [
    {
      title: "men's Hair Cut",
      time: '45 Min',
      price: '$45',
    },
    {
      title: "Men's Showering",
      time: '20 Min',
      price: '$30',
    },
    {
      title: "Women's Hair Cut",
      time: '60 Min',
      price: '$60',
    },
    {
      title: 'Hair Color',
      time: '90 Min',
      price: '$120',
    },
    {
      title: "men's Hair Cut",
      time: '45 Min',
      price: '$45',
    },
  ];

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
          flex: 0.7,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: 'white',
          padding: 25,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 90,
          }}>
          <View>
            <Text style={{color: '#000', fontSize: 18, fontWeight: 'bold'}}>
              {title}
            </Text>
            <Text style={{fontSize: 14}}>{tag}</Text>
            <Text style={{fontSize: 14}}>{star}</Text>
          </View>
          <Image
            source={image}
            style={{
              top: -70,
              height: 180,
              width: 110,
              borderRadius: 15,
              borderWidth: 2,
              borderColor: '#fff',
            }}
            resizeMode="cover"
          />
        </View>
        <View>
          <Text
            style={{
              color: '#000',
              fontSize: 18,
              fontWeight: 'bold',
              paddingVertical: 8,
            }}>
            Service List
          </Text>
        </View>
        <View style={{flex: 1}}>
          <FlatList
            contentContainerStyle={{
              flexGrow: 1,
              // backgroundColor: 'green',
            }}
            ListFooterComponent={() => <View style={{height: 10}} />}
            ListHeaderComponent={() => <View style={{height: 10}} />}
            showsVerticalScrollIndicator={false}
            data={service_list}
            keyExtractor={(item, index) => index}
            renderItem={item => (
              <TouchableOpacity activeOpacity={0.9}>
                <Service_List_Card
                  title={item.item.title}
                  time={item.item.time}
                  price={item.item.price}
                />
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{justifyContent: 'flex-end'}}>
          <CustomButton title="Book Now" navigation={navigation} />
        </View>
      </View>
    </View>
  );
};

export default Artist_detail;

const styles = StyleSheet.create({});
