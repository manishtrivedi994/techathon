import React from 'react';
import {View} from 'react-native';
import TYPOGRAPHY from '../../styles/typography';
import {ViewStyleType} from '../../../types';

type Props = {
  height: number;
  color?: string;
  style?: ViewStyleType;
};
export const Separator = ({height, color, style}: Props) => (
  <View
    style={[
      {height, backgroundColor: color ?? TYPOGRAPHY.Color.transparent},
      style,
    ]}
  />
);
