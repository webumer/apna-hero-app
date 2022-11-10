import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Navigation from './src/navigation';
import AuthContext from './src/services/hooks/context';
import {LogBox} from 'react-native';

export default function App() {
  const [user, setUser] = React.useState(null);
  const [city, setCity] = React.useState('');
  const [deveInfo, setDeviceInfo] = React.useState();
  const [gridViewIndex, setGridViewIndex] = React.useState();
  const value = {
    user,
    setUser,
    city,
    setCity,
    deveInfo,
    setDeviceInfo,
    gridViewIndex,
    setGridViewIndex,
  };
  LogBox.ignoreAllLogs();
  return (
    <AuthContext.Provider value={value}>
      <SafeAreaView style={{flex: 1}}>
        <Navigation />
      </SafeAreaView>
    </AuthContext.Provider>
  );
}
