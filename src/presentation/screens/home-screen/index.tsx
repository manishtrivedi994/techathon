import React, { memo } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/RootStack';
import ScreenWrapper from '../../widgets/screen-wrapper';
import HomePageHeader from '../../../components/homepage-header';
import HomePageMetricContainer from '../../../components/homepage-metric-container';
import LiveTrackingContainer from '../../../components/live-tracking';
import DrivingStatsCard from '../../../components/driving-stats-card';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MainTabs'>;
type Props = { navigation: HomeScreenNavigationProp };

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={{flex:1}}>
        <HomePageHeader />
        <HomePageMetricContainer />
        <DrivingStatsCard />
        {/* <LiveTrackingContainer /> */}
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  text: { fontSize: 20, fontWeight: 'bold' },
});

export default memo(HomeScreen);
