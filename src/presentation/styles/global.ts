import {StyleSheet} from 'react-native';
import TYPOGRAPHY from './typography';

const Layout = StyleSheet.create({
  fullFlex: {
    flex: 1,
  },
  rowCentering: {flexDirection: 'row', alignItems: 'center'},
  spaceBetween: {flexDirection: 'row', justifyContent: 'space-between'},
});

const CTA = {
  TouchableOpacity: {
    default: 0.8,
  },
};

const Text = StyleSheet.create({
  Default: {
    textAlign: 'left',
    fontSize: 14,
    color: TYPOGRAPHY.Color.almostBlack,
  },
});

const GLOBAL = {
  Layout,
  CTA,
  Text,
};

export default GLOBAL;
