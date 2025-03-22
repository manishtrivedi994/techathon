import React, {memo} from 'react';
import {View, StyleSheet, FlatList, Image, ScrollView} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../../navigation/RootStack';
import ScreenWrapper from '../../widgets/screen-wrapper';
import GLOBAL from '../../styles/global';
import CustomText from '../../widgets/custom-text';
import TYPOGRAPHY from '../../styles/typography';
import {Separator} from '../../widgets/separator';
import {RewardItemProp} from './types';
import RewardItem from './components/reward-item';
import {SvgIcons} from '../../icons/svgs/SvgIcons';
import UnlockReward from './components/unlock-reward';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'RewardsScreen'
>;
type Props = {navigation: HomeScreenNavigationProp};

const data = [
  {
    source: require('./assets/driving-school.png'),
    deeplink: 'https://www.cars24.com/',
    id: 1,
  },
  {
    source: require('./assets/loans24.png'),
    deeplink: 'https://www.cars24.com/',
    id: 2,
  },
  {
    source: require('./assets/insure24.png'),
    deeplink: 'https://www.cars24.com/',
    id: 3,
  },
  {
    source: require('./assets/fourdoor.png'),
    deeplink: 'https://www.cars24.com/',
    id: 4,
  },
];

const unlockedData = [
  {
    source: require('./assets/unlock.png'),
    deeplink: 'https://www.cars24.com/',
    id: 1,
  },
  {
    source: require('./assets/unlock.png'),
    deeplink: 'https://www.cars24.com/',
    id: 1,
  },
  {
    source: require('./assets/unlock.png'),
    deeplink: 'https://www.cars24.com/',
    id: 1,
  },
  {
    source: require('./assets/unlock.png'),
    deeplink: 'https://www.cars24.com/',
    id: 1,
  },
];

const _keyExtractor = (item: RewardItemProp, index: number) =>
  `${item?.id}-${index}`;

const ItemSeparator = () => <Separator height={14} />;

const UnlockItemSeparator = () => <View style={{width: 16}} />;

const RewardsScreen: React.FC<Props> = ({navigation}) => {
  const _renderItem = ({
    item,
    index,
  }: {
    item: RewardItemProp;
    index: number;
  }) => {
    return <RewardItem item={item} index={index} />;
  };

  const _renderUnlockItem = ({
    item,
    index,
  }: {
    item: RewardItemProp;
    index: number;
  }) => {
    return <UnlockReward item={item} index={index} />;
  };

  return (
    <ScreenWrapper colors={['#1F1A01', '#020403']}>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <CustomText
          fontSize={20}
          fontWeight="600"
          color={TYPOGRAPHY.Color.white}>
          {'Your Rewards'}
        </CustomText>
        <Separator height={24} />
        <View
          style={{
            width: '100%',
            height: 135,
            borderRadius: 12,
            backgroundColor: '#000000',
            overflow: 'hidden',
          }}>
          <View style={GLOBAL.Layout.rowCentering}>
            <View
              style={[
                GLOBAL.Layout.rowCentering,
                {paddingTop: 12, paddingHorizontal: 19},
              ]}>
              <CustomText
                fontWeight="500"
                fontSize={36}
                color={TYPOGRAPHY.Color.white}>
                {4.23}
                <CustomText
                  fontWeight="500"
                  fontSize={12}
                  color={TYPOGRAPHY.Color.white}>
                  {` Driving Score`}
                </CustomText>
              </CustomText>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                }}>
                <Image
                  source={require('./assets/curve.png')}
                  style={{width: 84, height: 44}}
                  resizeMode="contain"
                />
                <View style={{position: 'absolute', bottom: 10, right: 5}}>
                  <CustomText
                    fontSize={10}
                    fontWeight="400"
                    color={TYPOGRAPHY.Color.white}>
                    +0.3 in 7d
                  </CustomText>
                </View>
              </View>
            </View>
          </View>
          <Separator height={12} />
          <View
            style={{
              backgroundColor: '#FFD60A1A',
              borderWidth: 1,
              borderColor: '#FFD60A33',
              marginHorizontal: 16,
              height: 40,
              borderRadius: 24,
              overflow: 'hidden',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <SvgIcons.StarIcon style={{marginEnd: 5}} />
            <CustomText
              fontSize={12}
              fontWeight="600"
              color={TYPOGRAPHY.Color.white}>
              32,125
              <CustomText
                fontSize={12}
                fontWeight="400"
                color={TYPOGRAPHY.Color.white}>
                {` Reward points`}
              </CustomText>
            </CustomText>
          </View>
        </View>
        <Separator height={15} />
        <CustomText
          fontSize={18}
          fontWeight="800"
          color={TYPOGRAPHY.Color.white}>
          {'Rewards waiting for you'}
        </CustomText>
        <CustomText fontSize={18} fontWeight="800" color={'#FFFFFF66'}>
          {'at 40,000 pts'}
        </CustomText>
        <Separator height={12} />
        <FlatList
          data={unlockedData}
          renderItem={_renderUnlockItem}
          horizontal
          keyExtractor={_keyExtractor}
          ItemSeparatorComponent={UnlockItemSeparator}
        />
        <Separator height={34} />
        <CustomText
          fontSize={18}
          fontWeight="800"
          color={TYPOGRAPHY.Color.white}>
          {'Unlocked for you'}
        </CustomText>
        <CustomText fontSize={18} fontWeight="800" color={'#FFFFFF66'}>
          {'at 30,000 pts'}
        </CustomText>
        <Separator height={12} />
        <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={_keyExtractor}
          ItemSeparatorComponent={ItemSeparator}
        />
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  scrollContentContainer: {
    paddingBottom: 120,
    paddingHorizontal: 16,
  },
});

export default memo(RewardsScreen);
