import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAuthContext} from '../../context/AuthContext';
import {useLoaderContext} from '../../context/LoaderContext';

const Account = () => {
  const {user, logout} = useAuthContext();
  const {toggleLoadingMask} = useLoaderContext();
  const handleLogout = async () => {
    try {
      toggleLoadingMask();
      await logout();
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      toggleLoadingMask();
    }
  };
  return (
    <View style={styles.container}>
      <Text>Welcome! {user.email}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    marginVertical: 15,
  },
});
