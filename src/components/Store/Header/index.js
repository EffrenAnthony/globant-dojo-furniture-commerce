import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Banner from './Banner';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {'Find the best furniture'.toUpperCase()}
      </Text>
      <TextInput placeholder="Search" style={styles.searchInput} />
      <Banner />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    color: '#4398D1',
    fontFamily: 'Koulen_400Regular',
    fontSize: 25,
    lineHeight: 33,
  },
  searchInput: {
    marginTop: 17,
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 50,
    fontFamily: 'Lato_400Regular',
  },
});
