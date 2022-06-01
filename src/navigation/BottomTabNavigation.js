import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

/* ------------------------------- navigation ------------------------------- */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

/* --------------------------------- Screens -------------------------------- */
import Artist_detail from './../Screens/Artist_detail';
import BookNow from './../Screens/BookNow';
import Home from './../Screens/Home';
import Popular_services from './../Screens/Popular_services';

/* ------------------------------- Components ------------------------------- */
import MyTabBar from '../Components/MyTabBar';

/* ---------------------------------- Icons --------------------------------- */
import Icon from 'react-native-vector-icons/FontAwesome';

/* -------------------------------- HomeStack ------------------------------- */
const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <TouchableOpacity>
              <Image
                source={require('../assets/icons/hamburger.png')}
                style={{
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  top: '15%',
                  tintColor: '#fff',
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity activeOpacity={3}>
              <Image
                source={require('../assets/Artists/artist1.png')}
                style={{width: 40, height: 40, borderRadius: 20, top: '10%'}}
                resizeMode="contain"
              />
            </TouchableOpacity>
          ),
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="artist_detail"
        component={Artist_detail}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="BookNow"
        component={BookNow}
        options={{
          headerTransparent: true,
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
};

/* ------------------------------- Bottom Tab ------------------------------- */
const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="homeStack"
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: '#8D8D8D',
        tabBarActiveTintColor: '#E00051',
        tabBarActiveBackgroundColor: '#fff',
      }}>
      <Tab.Screen
        name="homeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <Icon name="rocket" size={15} color="#900" />,
        }}
      />
      <Tab.Screen
        name="artistdetail"
        component={Artist_detail}
        options={{
          tabBarLabel: 'Detail',
          tabBarIcon: () => <Icon name="rocket" size={15} color="#900" />,
        }}
      />
      <Tab.Screen
        name="bookNow"
        component={BookNow}
        options={{
          tabBarLabel: 'Booked',
          tabBarIcon: () => <Icon name="rocket" size={15} color="#900" />,
        }}
      />
      <Tab.Screen
        name="menu"
        component={Popular_services}
        options={{
          tabBarLabel: 'Menu',
          tabBarIcon: () => <Icon name="rocket" size={15} color="#900" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;

/* --------------------------------- Styles --------------------------------- */
const styles = StyleSheet.create({});
