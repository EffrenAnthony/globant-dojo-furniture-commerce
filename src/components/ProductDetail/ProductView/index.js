import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductView = ({regularImage, name, price, colors, thumbImage}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: regularImage}} style={styles.image} />
      <View>
        <Text>{name}</Text>
        <Text>${price}</Text>
      </View>
    </View>
  );
};

export default ProductView;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 320,
  },
});
