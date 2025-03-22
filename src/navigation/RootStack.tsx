import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import DetailsScreen from '../presentation/screens/details-screen';
import {screenOptions} from './constants';
import LoginScreen from '../presentation/screens/login-screen';
import {useIsLoggedIn} from '../utils/hooks/useIsLoggedIn';
import TrackYourCar from '../presentation/screens/track-your-car';

export type RootStackParamList = {
  MainTabs: undefined;
  Details: {itemId: number};
  Login: undefined;
  TrackYourCar: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
  const isLoggedIn = useIsLoggedIn();
  return (
    <Stack.Navigator
      screenOptions={screenOptions}
      initialRouteName={isLoggedIn ? 'MainTabs' : 'Login'}>
      <Stack.Screen name="MainTabs" component={BottomTabs} />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="TrackYourCar" component={TrackYourCar} />
    </Stack.Navigator>
  );
};

export default RootStack;
