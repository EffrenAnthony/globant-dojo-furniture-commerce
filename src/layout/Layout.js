/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {LanguageSwitch} from '../components/Layout';

const Layout = ({children}) => {
  return (
    <SafeAreaView style={{backgroundColor: '#fff', flex: 1}}>
      <LanguageSwitch />
      {children}
    </SafeAreaView>
  );
};

export default Layout;
