import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Services_Card = ({title, image}) => {
  return (
    <View style={styles.mainView}>
      <View style={styles.content}>
        <Image source={image} resizeMode="cover" style={styles.image} />
      </View>
      <Text adjustsFontSizeToFit={true} numberOfLines={2} style={styles.text}>
        {title}
      </Text>
    </View>
  );
};

export default Services_Card;

const styles = StyleSheet.create({
  mainView: {
    marginHorizontal: 8,
    marginVertical: 10,
    width: '90%',
    alignItems: 'center',
  },
  content: {
    backgroundColor: 'pink',
    elevation: 6,
    borderRadius: 20,
    height: 60,
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 60,
    width: 60,
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 14,
  },
});
