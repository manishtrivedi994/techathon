import React, {memo} from 'react';
import {Text, TextProps, TextStyle} from 'react-native';
import TYPOGRAPHY from '../../styles/typography';

export enum TextToken {
  HEADING1_BOLD = 'heading1_bold',
  BODY_REGULAR = 'body_regular',
  BODY_MEDIUM = 'body_medium',
}

interface CustomTextProps extends TextProps {
  variant?: TextToken;
  fontColor?: string;
  children: React.ReactNode;
}

const textStyles: Record<TextToken, TextStyle> = {
  [TextToken.HEADING1_BOLD]: {fontSize: 20, fontWeight: '600'},
  [TextToken.BODY_REGULAR]: {fontSize: 14, fontWeight: '400', lineHeight: 20},
  [TextToken.BODY_MEDIUM]: {fontSize: 16, fontWeight: '400', lineHeight: 20},
};

const CustomTextVariant: React.FC<CustomTextProps> = ({
  variant = TextToken.HEADING1_BOLD,
  fontColor = TYPOGRAPHY.Color.white,
  children,
  ...rest
}) => {
  return (
    <Text style={[textStyles[variant], {color: fontColor}]} {...rest}>
      {children}
    </Text>
  );
};

export default memo(CustomTextVariant);
