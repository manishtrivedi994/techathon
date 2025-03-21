import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import DetailsScreen from '../presentation/screens/details-screen';
import {screenOptions} from './constants';

export type RootStackParamList = {
  MainTabs: undefined;
  Details: {itemId: number};
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="MainTabs" component={BottomTabs} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default RootStack;
