import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Banner = () => {
  const textDecorationLine = {
    textDecorationLine: true,
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Karim chairs</Text>
        <Text style={styles.discount}>20% Off</Text>
        <Text style={[styles.cta, Platform.OS === 'ios' && textDecorationLine]}>
          Shop now
        </Text>
      </View>
      <View style={styles.firstCircle}>
        <View style={styles.secondCircle} />
      </View>
      <Image
        source={require('../../../assets/chairBanner.png')}
        style={styles.image}
      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#87395C',
    paddingLeft: 26,
    paddingRight: 10,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 26,
    overflow: 'hidden',
    position: 'relative',
  },
  firstCircle: {
    backgroundColor: 'rgba(217, 217, 217, 0.5);',
    position: 'absolute',
    right: -20,
    top: -30,
    height: 180,
    width: 180,
    borderRadius: 100,
  },
  secondCircle: {
    backgroundColor: 'rgba(217, 217, 217, 0.5);',
    position: 'absolute',
    right: -5,
    top: 20,
    height: 130,
    width: 130,
    borderRadius: 100,
  },
  image: {
    height: 85,
    width: 80,
  },
  title: {
    fontWeight: '500',
    fontFamily: 'Lato_400Regular',
    fontSize: 15,
    lineHeight: 17,
    color: '#FFFFFF',
  },
  discount: {
    fontWeight: 'bold',
    fontFamily: 'Koulen_400Regular',
    fontSize: 28,
    lineHeight: 50,
    color: '#FFFFFF',
  },
  cta: {
    fontWeight: '500',
    fontFamily: 'Lato_400Regular',
    fontSize: 15,
    lineHeight: 17,
    color: '#FFFFFF',
  },
});
