import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InvestimentList from '../screens/InvestimentList';
import InvestimentOverview, {
  InvestimentProps,
} from '../screens/InvestimentOverview';

export type RootStackParamList = {
  List: undefined;
  Overview: InvestimentProps;
};

const {Navigator, Screen} = createStackNavigator<RootStackParamList>();

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
      <Screen name="List" component={InvestimentList} />
      <Screen name="Overview" component={InvestimentOverview} />
    </Navigator>
  );
}
