import {StyleSheet} from 'react-native';
import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import {useLoaderContext} from '../context/LoaderContext';

export default function LoaderLayout({children}) {
  const {loadingMask} = useLoaderContext();
  return (
    <>
      <Spinner
        visible={loadingMask}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      />
      {children}
    </>
  );
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#fff',
  },
});
