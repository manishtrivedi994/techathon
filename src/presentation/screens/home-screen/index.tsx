import React, {memo} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/RootStack';
import ScreenWrapper from '../../styles/widgets/screen-wrapper';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;
type Props = {navigation: HomeScreenNavigationProp};

const HomeScreen: React.FC<Props> = ({navigation}) => {
  return (
    <ScreenWrapper>
      <Text style={styles.text}>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details', {itemId: 1})}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  text: {fontSize: 20, fontWeight: 'bold'},
});

export default memo(HomeScreen);
