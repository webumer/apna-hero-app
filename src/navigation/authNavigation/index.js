import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routes, headers} from '../../services';
import * as Auth from '../../screens/authFlow';

const AuthStack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <AuthStack.Navigator
      screenOptions={headers.screenOptions}
      //screenOptions={{headerStyle:{backgroundColor:'gray',borderBottomWidth:5}}}
      initialRouteName={routes.selectCity}>
      <AuthStack.Screen
        name={routes.selectCity}
        component={Auth.SelectCity}
        options={{
          headerShown: false,
          title: 'Sign In',
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigation;
