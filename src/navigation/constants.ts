import {
  StackAnimationName,
  StackNavigationOptions,
} from '@react-navigation/stack/lib/typescript/commonjs/src/types';

export const screenOptions: StackNavigationOptions = {
  animation: 'slide_from_right' as StackAnimationName,
  headerShown: false,
  animationTypeForReplace: 'push',
  headerTransparent: true,
  headerStyle: {backgroundColor: 'transparent'},
};

export const bottomTabOption = {headerShown: false};
