import {Dimensions, Platform} from 'react-native';

export const IS_IOS = Platform.OS === 'ios';

export const {width, height} = Dimensions.get('window');
