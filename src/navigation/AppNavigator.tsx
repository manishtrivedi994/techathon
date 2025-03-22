import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './RootStack';
import {navigationRef} from './navUtil';

const AppNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
};

export default AppNavigator;
