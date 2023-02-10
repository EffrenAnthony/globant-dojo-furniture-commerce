import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';

const AuthForm = ({btnLabel, onSubmitCb, errorMessage}) => {
  const [error, setError] = useState('');

  const formik = useFormik({
    initialValues: intialValues(),
    validateOnChange: false,
    validationSchema: Yup.object(validationSchema()),
    onSubmit: formValue => {
      setError('');
      if (errorMessage) {
        setError(errorMessage);
      } else {
        onSubmitCb(formValue);
      }
    },
  });
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Email"
        value={formik.values.email}
        onChangeText={text => formik.setFieldValue('email', text)}
        style={styles.input}
        autoCapitalize={false}
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        value={formik.values.password}
        onChangeText={text => formik.setFieldValue('password', text)}
        style={styles.input}
        secureTextEntry
        // keyboardType="number-pad"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={formik.handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>{btnLabel}</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.error}>{formik.errors.email}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

export default AuthForm;

function intialValues() {
  return {
    email: '',
    password: '',
  };
}

function validationSchema() {
  return {
    email: Yup.string()
      .required('Email is required')
      .email('Should be a valid email'),
    password: Yup.string().required('Password is required'),
  };
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#F2F2F2',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  buttonContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#4398D1',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  error: {
    textAlign: 'center',
    color: 'red',
    marginTop: 10,
  },
});
