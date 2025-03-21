import React, {memo} from 'react';
import {Text, TextStyle} from 'react-native';
import TYPOGRAPHY from '../../styles/typography';

export enum TextToken {
  HEADING1_BOLD = 'heading1_bold',
  BODY_REGULAR = 'body_regular',
}

type CustomTextProps = {
  variant?: TextToken;
  fontColor?: string;
  children: React.ReactNode;
};

const textStyles: Record<TextToken, TextStyle> = {
  [TextToken.HEADING1_BOLD]: {fontSize: 20, fontWeight: '600'},
  [TextToken.BODY_REGULAR]: {fontSize: 14, fontWeight: '400', lineHeight: 20},
};

const CustomTextVariant: React.FC<CustomTextProps> = ({
  variant = TextToken.HEADING1_BOLD,
  fontColor = TYPOGRAPHY.Color.white,
  children,
}) => {
  return (
    <Text style={[textStyles[variant], {color: fontColor}]}>{children}</Text>
  );
};

export default memo(CustomTextVariant);
