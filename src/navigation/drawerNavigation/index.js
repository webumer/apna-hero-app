import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {routes} from '../../constants';
import AppNavigation from '../appNavigation';
import {SideMenu} from '../../components';
import {height, width} from 'react-native-dimension';

const Drawer = createDrawerNavigator();

function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={props => <SideMenu {...props} />}
      screenOptions={{
        headerShown: false,
        swipeEnabled: true,
        drawerStyle: {
          width: width(70),
        },
      }}>
      <Drawer.Screen
        name={'app'}
        component={AppNavigation}
        options={{
          headerShown: false,
          hidden: true,
          title: 'okay',
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigation;
