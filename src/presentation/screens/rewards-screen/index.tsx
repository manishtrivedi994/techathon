import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/RootStack';
import ScreenWrapper from '../../widgets/screen-wrapper';
import GLOBAL from '../../styles/global';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'RewardsScreen'
>;
type Props = {navigation: HomeScreenNavigationProp};

const RewardsScreen: React.FC<Props> = ({navigation}) => {
  return (
    <ScreenWrapper>
      <View style={GLOBAL.Layout.fullFlex}></View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  text: {fontSize: 20, fontWeight: 'bold'},
});

export default memo(RewardsScreen);
