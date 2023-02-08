import React from 'react';
import {SafeAreaView} from 'react-native';
import {Header, LanguageSwitch} from '../../components';

const Store = () => {
  return (
    <SafeAreaView>
      <LanguageSwitch />
      <Header />
    </SafeAreaView>
  );
};

export default Store;
