import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Popular_services from './Popular_services'
import Shop_Hair_Artists from './Shop_Hair_Artists'

const Home = () => {
  return (
    <View style={{backgroundColor:'purple'}}>
        <View style={{backgroundColor:'#fff', top:80, borderTopLeftRadius:20, borderTopRightRadius:20, padding:15}}>
            <Popular_services/>
            <Shop_Hair_Artists/>
        </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})