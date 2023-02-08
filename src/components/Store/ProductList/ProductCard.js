import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.thumbImage}} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    paddingHorizontal: 9,
    paddingVertical: 12,
    height: 205,
    width: 150,
    marginHorizontal: 13,
  },
  image: {
    borderRadius: 10,
    width: 130,
    height: 130,
  },
  title: {
    color: '#898989',
    marginTop: 7,
    fontSize: 15,
    fontFamily: 'Lato_400Regular',
  },
  price: {
    fontFamily: 'Koulen_400Regular',
    color: '#4398D1',
    fontSize: 18,
  },
});
