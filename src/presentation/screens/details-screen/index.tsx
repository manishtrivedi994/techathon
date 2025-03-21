import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../../navigation/RootStack';

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;
type Props = {route: DetailsScreenRouteProp};

const DetailsScreen: React.FC<Props> = ({route}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Details Screen</Text>
      <Text>Item ID: {route.params.itemId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {fontSize: 20, fontWeight: 'bold'},
});

export default DetailsScreen;
