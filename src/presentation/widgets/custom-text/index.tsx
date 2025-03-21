import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

interface CustomTextProps extends TextProps {
  fontSize?: number;
  fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  color?: string;
  fontFamily?: string;
}

const CustomText: React.FC<CustomTextProps> = ({
  fontSize = 16,
  fontWeight = '400',
  color = '#000',
  fontFamily = 'System',
  style,
  children,
  ...rest
}) => {
  return (
    <Text
      style={[styles.text, { fontSize, fontWeight, color, fontFamily }, style]}
      {...rest}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: '#000',
  },
});

export default CustomText;
