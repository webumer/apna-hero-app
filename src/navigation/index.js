import React, {Component, useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppNavigation from './appNavigation';
import AuthNavigation from './authNavigation';
import {routes} from '../services';
import {Splash} from '../screens/authFlow';
import {navigationRef} from './rootNavigation';
import DrawerNavigation from './drawerNavigation';
import cache from '../services/utilities/cache';
import AuthContext from '../services/hooks/context';
import SplashScreen from 'react-native-splash-screen';

const MainStack = createNativeStackNavigator();

export default function Navigation() {
  // other
  const authContext = React.useContext(AuthContext);

  // state
  const [loading, setLoading] = useState(true);
  const [citySelected, setCitySelected] = useState();

  useEffect(() => {
    checkUserLogin();
  }, []);

  const checkUserLogin = async () => {
    let city = await cache.get('city');

    if (city) {
      setCitySelected(city);
      authContext.setCity(city);
      SplashScreen.hide();
    } else {
      setCitySelected(false);
      SplashScreen.hide();
    }
  };

  // if (loading) return <Splash />;
  // else
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={citySelected ? routes.drawer : routes.auth}>
        <MainStack.Screen name={routes.auth} component={AuthNavigation} />
        <MainStack.Screen name={routes.drawer} component={DrawerNavigation} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
