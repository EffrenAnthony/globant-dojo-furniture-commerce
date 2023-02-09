/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {LanguageSwitch} from '../components/Store';
import {SafeAreaView} from 'react-native';

const Layout = ({children}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <LanguageSwitch />
      {children}
    </SafeAreaView>
  );
};

export default Layout;
