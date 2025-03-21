import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../presentation/screens/home-screen';
import LearnScreen from '../presentation/screens/learn-screen';
import RewardsScreen from '../presentation/screens/rewards-screen';
import CommunityScreen from '../presentation/screens/community-screen';

const BottomTab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <BottomTab.Navigator
      screenOptions={({route}) => ({
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <BottomTab.Screen name="Home" component={HomeScreen} />
      <BottomTab.Screen name="Learn" component={LearnScreen} />
      <BottomTab.Screen name="Rewards" component={RewardsScreen} />
      <BottomTab.Screen name="Community" component={CommunityScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabs;
