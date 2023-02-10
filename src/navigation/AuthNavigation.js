import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login, Register} from '../screens';

const Stack = createStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
        }}>
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: '',
            headerTransparent: true,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthNavigation;
