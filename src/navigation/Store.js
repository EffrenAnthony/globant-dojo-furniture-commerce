import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Store, ProductDetail} from '../screens';

const Stack = createStackNavigator();

const StoreNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Store"
        component={Store}
        options={{
          title: '',
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{
          title: '',
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default StoreNavigation;
