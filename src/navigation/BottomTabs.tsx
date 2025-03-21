import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../presentation/screens/home-screen';
import LearnScreen from '../presentation/screens/learn-screen';
import RewardsScreen from '../presentation/screens/rewards-screen';
import CommunityScreen from '../presentation/screens/community-screen';
import TYPOGRAPHY from '../presentation/styles/typography';
import {SvgIcons} from '../presentation/icons/svgs/SvgIcons';
import {bottomTabOption} from './constants';

const BottomTab = createBottomTabNavigator();

const tabIcons: any = {
  Home: SvgIcons.HomeIcon,
  Learn: SvgIcons.Wallet,
  Rewards: SvgIcons.Rewards,
  Community: SvgIcons.Community,
};

const CustomTabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route: any, index: number) => {
        const isFocused = state.index === index;

        const IconComponent = tabIcons[route.name] || SvgIcons.HomeIcon;

        const fillColor = isFocused
          ? TYPOGRAPHY.Color.aquaMarine
          : TYPOGRAPHY.Color.transparent;

        const onPress = () => {
          navigation.navigate(route.name);
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={styles.tabButton}>
            <IconComponent color={fillColor} />
            <Text
              style={[
                styles.tabLabel,
                {
                  color: isFocused
                    ? TYPOGRAPHY.Color.aquaMarine
                    : TYPOGRAPHY.Color.rockBlue,
                },
              ]}>
              {route.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const BottomTabs = () => {
  return (
    <BottomTab.Navigator tabBar={props => <CustomTabBar {...props} />}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={bottomTabOption}
      />
      <BottomTab.Screen
        name="Learn"
        component={LearnScreen}
        options={bottomTabOption}
      />
      <BottomTab.Screen
        name="Rewards"
        component={RewardsScreen}
        options={bottomTabOption}
      />
      <BottomTab.Screen
        name="Community"
        component={CommunityScreen}
        options={bottomTabOption}
      />
    </BottomTab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: TYPOGRAPHY.Color.logCabin,
    borderRadius: 63,
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 8,
  },
});

export default BottomTabs;
