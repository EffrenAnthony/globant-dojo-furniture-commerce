import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {AuthForm} from '../../components/Auth';
import {withLayout} from '../../hocs/withLayout';
import {useAuthContext} from '../../context/AuthContext';

const Login = () => {
  const {navigate} = useNavigation();
  const {login} = useAuthContext();
  const handleLogin = async ({email, password}) => {
    try {
      await login(email, password);
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  const handleGoToRegister = () => {
    navigate('Register');
  };
  return (
    <View style={styles.container} behavior="padding">
      <Text style={styles.headerTitle}>Welcome to</Text>
      <Text style={[styles.headerTitle, styles.appTitle]}>
        Furniture Commerce
      </Text>

      <AuthForm btnLabel="Login" onSubmitCb={handleLogin} />
      <View style={styles.registerMsgContianer}>
        <Text style={styles.registerMsg}>Don't have an account?</Text>
        <TouchableOpacity onPress={handleGoToRegister}>
          <Text style={[styles.registerMsg, styles.registerCTA]}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const LoginWithLayout = withLayout(Login);

export default LoginWithLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Lato_700Bold',
    textAlign: 'center',
    marginVertical: 4,
    fontSize: 19,
    color: '#898989',
  },
  appTitle: {
    fontFamily: 'Koulen_400Regular',
    marginBottom: 20,
    color: '#4398D1',
  },
  registerMsgContianer: {
    flexDirection: 'row',
  },
  registerMsg: {
    marginTop: 30,
    fontSize: 14,
    color: '#898989',
  },
  registerCTA: {
    color: '#4398D1',
    marginLeft: 4,
    fontWeight: 'bold',
  },
});
