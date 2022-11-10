import React, {Component} from 'react';
import {routes, headers} from '../../services';
import * as App from '../../screens/appFlow';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

const AppStack = createStackNavigator();

const AppNavigation = () => {
  return (
    <AppStack.Navigator screenOptions={{}} initialRouteName={routes.home}>
      <AppStack.Screen
        name={routes.home}
        component={App.Home}
        options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <AppStack.Screen
        name={routes.flayerDetail}
        component={App.FlayerDetail}
        options={{
          headerShown: false,

          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <AppStack.Screen
        name={routes.sliderScreen}
        component={App.SliderScreen}
        options={{
          headerShown: false,

          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
      <AppStack.Screen
        name={routes.gridView}
        component={App.GridView}
        options={{
          headerShown: false,

          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigation;
