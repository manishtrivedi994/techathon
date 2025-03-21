import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useSafeAreaViewSpacing = () => {
  const insets = useSafeAreaInsets();
  return {
    topSpacing: {
      paddingTop: insets.top,
    },
    bottomSpacing: {
      paddingBottom: insets.bottom,
    },
    screenSpacing: {
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    },
  };
};
