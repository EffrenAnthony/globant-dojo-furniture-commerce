import React from 'react';
import {Text, TouchableOpacity, View, Platform, StyleSheet} from 'react-native';

const LanguageSwitch = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btnText}>en</Text>
        <View style={styles.divider} />
        <Text style={styles.btnText}>US</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LanguageSwitch;
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? 50 : 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  btn: {
    width: 124,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F1F9FF',
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  divider: {
    borderRightColor: 'rgba(113, 196, 252, 0.5)',
    borderRightWidth: 2,
    marginVertical: 5,
  },
  btnText: {
    color: '#4398D1',
    paddingHorizontal: 16,
    fontSize: 16,
    paddingVertical: 7,
    fontFamily: 'Lato_400Regular',
  },
});
