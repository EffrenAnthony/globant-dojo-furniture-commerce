import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProductItem = ({item}) => {
  return (
    <View>
      <Text>{item.id}</Text>
      <Image source={{uri: item.urls.raw}} style={styles.image} />
    </View>
  );
};

const ProductList = ({products}) => {
  return (
    <View>
      <FlatList
        style={styles.list}
        horizontal
        data={products}
        renderItem={({item}) => <ProductItem item={item} />}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
  },
});
