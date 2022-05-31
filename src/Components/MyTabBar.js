import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/FontAwesome';

const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#570861',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        bottom: 12,
        left: 36,
        right: 36,
        borderRadius: 10,
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              height: 30,
              justifyContent: 'space-evenly',
              alignItems: 'center',
              backgroundColor: isFocused ? 'purple' : '#570861',
              borderRadius: 10,
              marginHorizontal: 18,
            }}>
            <Text>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MyTabBar;

const styles = StyleSheet.create({});
