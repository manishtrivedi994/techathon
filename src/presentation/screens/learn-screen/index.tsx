import React, { memo } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/RootStack';
import ScreenWrapper from '../../widgets/screen-wrapper';
import BackHeader from '../../../components/back-header';
import CustomText from '../../widgets/custom-text';
import ImprovementArea from '../../../components/improvement-area';
import LearnRecommendation from '../../../components/learn-recommendation';
import LearnYoutubeSection from '../../../components/learn-youtube-section';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MainTabs'>;
type Props = { navigation: HomeScreenNavigationProp };

const LearnScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackHeader />
        <ImprovementArea />
        <LearnRecommendation />
        <LearnYoutubeSection />
      </ScrollView>
    </ScreenWrapper>
  );
};

export default memo(LearnScreen);