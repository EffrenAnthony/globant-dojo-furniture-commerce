import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {map} from 'lodash';
import {relatedColors} from '../../../util/helpers';

const ProductView = ({regularImage, name, price, colors}) => {
  const getColorsStyles = color => {
    return {
      ...styles.colorBadge,
      backgroundColor: color,
    };
  };

  return (
    <View>
      <Image source={{uri: regularImage}} style={styles.image} />
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.productName}>{name}</Text>
          <Text style={styles.productPrice}>${price}</Text>
        </View>
        <View>
          <Text style={styles.sectionTitle}>Colors</Text>
          <View style={styles.colorsContainer}>
            {map(relatedColors(colors), color => (
              <View style={getColorsStyles(color)} key={color} />
            ))}
          </View>
          <View />
        </View>
        <Text style={styles.sectionTitle}>Details</Text>
        <Text style={styles.sectionTitle}>Qty</Text>
      </View>
    </View>
  );
};

export default ProductView;

const styles = StyleSheet.create({
  container: {
    marginLeft: 27,
    marginRight: 16,
  },
  image: {
    width: '100%',
    height: 320,
  },
  header: {
    flexDirection: 'row',
    marginVertical: 13,
    justifyContent: 'space-between',
    alignContent: 'center',
  },
  productName: {
    fontFamily: 'Lato_700Bold',
    color: '#898989',
    fontSize: 18,
    fontWeight: 600,
    paddingTop: 5,
  },
  productPrice: {
    color: '#4398D1',
    fontSize: 22,
    fontFamily: 'Koulen_400Regular',
  },
  sectionTitle: {
    fontFamily: 'Lato_700Bold',
    fontSize: 16,
    lineHeight: 17,
    color: '#898989',
    marginBottom: 6,
  },
  colorsContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 10,
  },
  colorBadge: {
    borderColor: '#fff',
    borderWidth: 1,
    borderStyle: 'solid',
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 3,
    width: 20,
    height: 20,
    marginRight: 10,
    borderRadius: 50,
  },
});
