import React, {memo, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/RootStack';
import ScreenWrapper from '../../widgets/screen-wrapper';
import BackHeader from '../../../components/back-header';
import CustomText from '../../widgets/custom-text';
import ImprovementArea from '../../../components/improvement-area';
import LearnRecommendation from '../../../components/learn-recommendation';
import LearnYoutubeSection from '../../../components/learn-youtube-section';
import {useAppDispatch} from '../../../utils/hooks/useAppDispatch';
import {useAppSelector} from '../../../utils/hooks/useAppSelector';
import {RootState} from '../../../store/store';
import {
  setError,
  setLessons,
  setLoading,
} from '../../../store/slices/learnSlice';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MainTabs'
>;
type Props = {navigation: HomeScreenNavigationProp};

const LearnScreen: React.FC<Props> = ({navigation}) => {
  const dispatch = useAppDispatch();
  const {loading, lessons, error} = useAppSelector(
    (state: RootState) => state.learn ?? {},
  );

  // Ensure these properties are defined
  const improvementSection = lessons?.improvementSection || {};
  const recommendationSection = lessons?.recommendationSection || {};
  const watchAndLearnSection = lessons?.watchAndLearnSection || {};

  useEffect(() => {
    const fetchLessons = async () => {
      dispatch(setLoading(true));
      try {
        // Simulate an API call to fetch lessons
        const response = await fetch(
          'https://api-523185332328.asia-south1.run.app/v1/learning/improvement-areas?userId=123',
        );
        const result = await response.json();
        dispatch(setLessons(result));
      } catch (err) {
        dispatch(setError('Failed to fetch lessons'));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchLessons();
  }, [dispatch]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ScreenWrapper>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImprovementArea improvementSection={improvementSection} />
        <LearnRecommendation recommendationSection={recommendationSection} />
        <LearnYoutubeSection watchAndLearnSection={watchAndLearnSection} />
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
});

export default memo(LearnScreen);
