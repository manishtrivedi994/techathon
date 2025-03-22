import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/RootStack';
import BackHeader from '../../../components/back-header';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type Props = {navigation: HomeScreenNavigationProp};

const RewardsScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* <BackHeader navigation={navigation} headerText='Rewards'/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 20, fontWeight: 'bold'},
});

export default memo(RewardsScreen);
