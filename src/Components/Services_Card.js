import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Services_Card = ({title, image}) => {
  return (
      <View style={{marginHorizontal:10, marginVertical:10}}>
      <View style={{backgroundColor:'pink',elevation:6, borderRadius:20, height:70, width:70, justifyContent:'center', alignItems:'center'}}>
        <Image source={image} resizeMode='cover' style={{height:60, width:60, alignSelf:'center'}}/>
      </View>
        <Text adjustsFontSizeToFit={true}
        numberOfLines={2} style={{textAlign:'center', textAlignVertical:'center', fontSize:14}}>{title}</Text>
      </View>
  )
}

export default Services_Card

const styles = StyleSheet.create({})