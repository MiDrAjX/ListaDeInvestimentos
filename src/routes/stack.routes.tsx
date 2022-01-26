import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InvestimentList from '../screens/InvestimentList';

const {Navigator, Screen} = createStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        title: 'Resgate',
        headerStyle: {
          backgroundColor: '#0038A8',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf: 'center',
        },
      }}>
      <Screen name="Home" component={InvestimentList} />
    </Navigator>
  );
}
