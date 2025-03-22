import {memo} from 'react';
import CButton from '../../../../widgets/cButton';
import {RewardItemProp} from '../../types';
import {Image, Linking, StyleSheet} from 'react-native';

const UnlockReward = ({item, index}: {item: RewardItemProp; index: number}) => {
  const _handlePress = () => {
    Linking.openURL(item?.deeplink);
  };
  return (
    <CButton onClick={_handlePress}>
      <Image
        source={item?.source}
        style={styles.container}
        resizeMode="cover"
      />
    </CButton>
  );
};

export default memo(UnlockReward);

const styles = StyleSheet.create({
  container: {
    width: 116,
    height: 177,
  },
});
