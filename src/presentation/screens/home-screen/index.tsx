import React, { memo, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigation/RootStack';
import {View, Image} from 'react-native';
import ScreenWrapper from '../../widgets/screen-wrapper';
import HomePageHeader from '../../../components/homepage-header';
import HomePageMetricContainer from '../../../components/homepage-metric-container';
import LiveTrackingContainer from '../../../components/live-tracking';
import DrivingStatsCard from '../../../components/driving-stats-card';
import {Separator} from '../../widgets/separator';
import CustomTextVariant, {TextToken} from '../../widgets/custom-text-variant';
import TYPOGRAPHY from '../../styles/typography';
import CButton from '../../widgets/cButton';
import DropDownPicker from 'react-native-dropdown-picker';
import {SvgIcons} from '../../icons/svgs/SvgIcons';

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'MainTabs'
>;
type Props = {navigation: HomeScreenNavigationProp};

const CRETA_BLUE = require('./assets/creta-blue.png');

const HomeScreen: React.FC<Props> = ({navigation}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Today', value: 1},
    {label: 'Last week', value: 7},
    {label: 'Last Month', value: 30},
  ]);

  return (
    <ScreenWrapper>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <HomePageHeader />
        <HomePageMetricContainer />
        <DrivingStatsCard />
        <Separator height={32} />
        <View style={styles.liveTrackContainer}>
          <Image
            source={CRETA_BLUE}
            style={styles.carImage}
            resizeMode="contain"
          />
          <View style={styles.spaceBetween}>
            <View style={styles.mw74}>
              <CustomTextVariant
                variant={TextToken.HEADING1_BOLD}
                fontColor={TYPOGRAPHY.Color.white}>
                {'Someone else driving your car ?'}
              </CustomTextVariant>
            </View>
            <Separator height={8} />
            <CButton onClick={() => {}}>
              <CustomTextVariant
                variant={TextToken.BODY_REGULAR}
                fontColor={TYPOGRAPHY.Color.aquaMarine}>
                {'Live track car now'}
              </CustomTextVariant>
            </CButton>
          </View>
        </View>
        <View style={styles.analyticTitleContainer}>
          <CustomTextVariant
            variant={TextToken.BODY_MEDIUM}
            fontColor={TYPOGRAPHY.Color.white}>
            Analytics
          </CustomTextVariant>
          <View style={styles.dropdownContainer}>
            {!open && (
              <CButton
                onClick={() => setOpen(!open)}
                style={styles.rowCentering}>
                <View style={styles.mr4}>
                  <CustomTextVariant
                    variant={TextToken.BODY_REGULAR}
                    fontColor={TYPOGRAPHY.Color.white}>
                    {value
                      ? items.find(i => i.value === value)?.label
                      : 'Today'}
                  </CustomTextVariant>
                </View>
                <SvgIcons.ChevronUp />
              </CButton>
            )}
            {!!open && (
              <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                showArrowIcon={false}
                style={styles.dropdownStyle}
                dropDownContainerStyle={styles.dropdownContainerStyle}
                dropDownDirection="TOP"
                labelStyle={styles.labelStyle}
              />
            )}
          </View>
        </View>
        {/* <LiveTrackingContainer /> */}
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  text: {fontSize: 20, fontWeight: 'bold'},
  scrollContentContainer: {
    paddingBottom: 80,
  },
  ph16: {paddingHorizontal: 16},
  liveTrackContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    margin: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  carImage: {width: 136, height: 75, marginRight: 12},
  spaceBetween: {justifyContent: 'space-between'},
  mw74: {
    maxWidth: '74%',
  },
  rowCentering: {flexDirection: 'row', alignItems: 'center'},
  dropdownContainer: {width: '40%', alignItems: 'flex-end'},
  analyticTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    alignItems: 'center',
  },
  mr4: {marginRight: 4},
  dropdownStyle: {
    borderWidth: 0,
    backgroundColor: TYPOGRAPHY.Color.transparent,
  },
  dropdownContainerStyle: {
    backgroundColor: TYPOGRAPHY.Color.white,
  },
  labelStyle: {color: TYPOGRAPHY.Color.transparent},
});

export default memo(HomeScreen);
