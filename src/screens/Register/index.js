import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
} from 'react-native';
import React, {useEffect} from 'react';
import {AuthForm} from '../../components/Auth';
import {withLayout} from '../../hocs/withLayout';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useAuthContext} from '../../context/AuthContext';

const Register = ({navigation}) => {
  const {register} = useAuthContext();
  const handleSignUp = async ({email, password}) => {
    try {
      await register(email, password);
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <>
          {Platform.OS === 'android' && (
            <Icon
              name="chevron-left"
              color="#4398D1"
              size={25}
              style={styles.leftIcon}
              onPress={navigation.goBack}
            />
          )}
        </>
      ),
    });
  }, [navigation]);
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.headerTitle}>Register On</Text>
      <Text style={[styles.headerTitle, styles.appTitle]}>
        Furniture Commerce
      </Text>
      <AuthForm btnLabel="Register" onSubmitCb={handleSignUp} />
    </KeyboardAvoidingView>
  );
};

const RegisterWithLayout = withLayout(Register);

export default RegisterWithLayout;
// export default Register;

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
  leftIcon: {
    marginLeft: 20,
    marginTop: 30,
  },
});
