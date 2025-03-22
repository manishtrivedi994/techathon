import {StatusBar, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TYPOGRAPHY from '../../styles/typography';
import GLOBAL from '../../styles/global';
import {memo} from 'react';
import {Edges, SafeAreaView} from 'react-native-safe-area-context';
import {ViewStyleType} from '../../../types';

const EDGES: Edges = ['top', 'bottom'];

const ScreenWrapper = ({
  children,
  containerStyle,
}: {
  children: React.ReactNode;
  containerStyle?: ViewStyleType;
}) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <LinearGradient
        colors={[TYPOGRAPHY.Color.gableGreen, TYPOGRAPHY.Color.codGray]}
        style={[GLOBAL.Layout.fullFlex, containerStyle]}>
        <SafeAreaView style={GLOBAL.Layout.fullFlex} edges={EDGES}>
          <View style={GLOBAL.Layout.fullFlex}>{children}</View>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default memo(ScreenWrapper);
