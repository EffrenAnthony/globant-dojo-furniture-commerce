import {FlatList, View} from 'react-native';
import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({products}) => {
  return (
    <View>
      <FlatList
        horizontal
        data={products}
        keyExtractor={item => String(item.id)}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <ProductCard item={item} />}
      />
    </View>
  );
};

export default ProductList;
