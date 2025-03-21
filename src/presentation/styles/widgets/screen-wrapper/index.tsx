import {StatusBar, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import TYPOGRAPHY from '../../typography';
import GLOBAL from '../../global';
import {memo} from 'react';
import {Edges, SafeAreaView} from 'react-native-safe-area-context';

const EDGES: Edges = ['top', 'bottom'];

const ScreenWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <LinearGradient
        colors={[TYPOGRAPHY.Color.gableGreen, TYPOGRAPHY.Color.codGray]}
        style={GLOBAL.Layout.fullFlex}>
        <SafeAreaView style={GLOBAL.Layout.fullFlex} edges={EDGES}>
          <View style={GLOBAL.Layout.fullFlex}>{children}</View>
        </SafeAreaView>
      </LinearGradient>
    </>
  );
};

export default memo(ScreenWrapper);
