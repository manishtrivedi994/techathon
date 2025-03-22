import {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {Trip} from '../../types';
import TYPOGRAPHY from '../../../../styles/typography';
import {SvgIcons} from '../../../../icons/svgs/SvgIcons';
import GLOBAL from '../../../../styles/global';
import CustomText from '../../../../widgets/custom-text';
import LinearGradient from 'react-native-linear-gradient';
import {getBgColors, getGradientColors, getTextColors} from '../../helper';
import {Separator} from '../../../../widgets/separator';
import {formatTime} from '../../../../../utils/codeUtils';
import {GradientSeparator} from '../../../../widgets/gradientSeparator';

type Props = {
  item: Trip;
  index: number;
};
const TripCard = ({item, index}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.dateAndScore}>
        <View>
          <View style={GLOBAL.Layout.rowCentering}>
            <SvgIcons.Calendar />
            <View style={styles.ml8}>
              <CustomText fontSize={12} fontWeight={'500'} color="#B4B4B4">
                {item?.date}
              </CustomText>
            </View>
          </View>
          <Separator height={4} />
          <View style={GLOBAL.Layout.rowCentering}>
            <View style={GLOBAL.Layout.rowCentering}>
              <SvgIcons.Clock style={{marginRight: 10}} />
              <CustomText fontSize={12} fontWeight="500" color="#B4B4B4">
                {formatTime(item?.startTimestamp)}
              </CustomText>
            </View>
            <CustomText fontSize={12} fontWeight="500" color="#B4B4B4">
              {` - `}
            </CustomText>
            <CustomText fontSize={12} fontWeight="500" color="#B4B4B4">
              {formatTime(item?.endTimestamp)}
            </CustomText>
          </View>
        </View>
        <LinearGradient
          colors={getGradientColors(item?.drivingScore)}
          style={{padding: 1, borderRadius: 4, overflow: 'hidden'}}>
          <View
            style={[
              GLOBAL.Layout.rowCentering,
              {
                paddingHorizontal: 10,
                paddingVertical: 8,
                backgroundColor: getBgColors(item?.drivingScore),
                borderRadius: 4,
                overflow: 'hidden',
              },
            ]}>
            <CustomText
              fontSize={12}
              fontWeight="500"
              color={TYPOGRAPHY.Color.white}
              style={styles.mr8}>
              {'Driving Score'}
            </CustomText>
            <CustomText
              fontSize={18}
              color={getTextColors(item?.drivingScore)}
              fontWeight="500">
              {item?.drivingScore}
            </CustomText>
          </View>
        </LinearGradient>
      </View>
      <Separator height={12} />
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <View style={styles.center}>
            <CustomText fontSize={12} fontWeight="500" color="#A3A4A3">
              Avg Speed
            </CustomText>
            <Separator height={4} />
            <CustomText fontWeight="500" fontSize={12} color="#A3A4A3">
              {item?.avgSpeed}
            </CustomText>
          </View>
          <View style={styles.verticalLine} />
        </View>
        <View style={styles.infoItem}>
          <View style={styles.center}>
            <CustomText fontSize={12} fontWeight="500" color="#A3A4A3">
              Harsh Breaking
            </CustomText>
            <Separator height={4} />
            <CustomText
              fontWeight="500"
              fontSize={14}
              color={TYPOGRAPHY.Color.white}>
              {item?.harshBreaking}
            </CustomText>
          </View>
          <View style={styles.verticalLine} />
        </View>

        <View style={styles.center}>
          <CustomText fontSize={12} fontWeight="500" color="#A3A4A3">
            Drive Stability
          </CustomText>
          <Separator height={4} />
          <CustomText
            fontWeight="500"
            fontSize={14}
            color={TYPOGRAPHY.Color.white}>
            {item?.driveStability}
          </CustomText>
        </View>
      </View>
      <Separator height={24} />
      <GradientSeparator />
      <Separator height={20} />
      <View style={GLOBAL.Layout.rowCentering}>
        <View style={styles.startCircle} />
        <CustomText
          color="#A3A4A3"
          fontSize={12}
          fontWeight="500"
          numberOfLines={1}
          style={{maxWidth: '80%'}}>
          {item?.startLocation?.address}
        </CustomText>
      </View>
      <LinearGradient
        colors={['#979897', '#323232']}
        style={styles.verticalGradient}></LinearGradient>
      <View style={GLOBAL.Layout.rowCentering}>
        <View style={styles.endCircle} />
        <CustomText
          color="#A3A4A3"
          fontSize={12}
          fontWeight="500"
          numberOfLines={1}
          style={{maxWidth: '80%'}}>
          {item?.endLocation?.address}
        </CustomText>
      </View>
    </View>
  );
};

export default memo(TripCard);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: TYPOGRAPHY.Color.fireFly,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: TYPOGRAPHY.Color.blackForest,
    padding: 16,
  },
  dateAndScore: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ml8: {marginLeft: 8},
  mr8: {marginRight: 8},
  infoItem: {
    width: '33%',
    flexDirection: 'row',
  },
  center: {flex: 1, alignItems: 'center'},
  verticalLine: {height: 38, width: 1, backgroundColor: '#5B5858'},
  startCircle: {
    backgroundColor: '#63FFB1',
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  endCircle: {
    backgroundColor: '#CA3A31',
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  verticalGradient: {
    width: 2,
    height: 21,
    marginLeft: 5,
    marginVertical: 2,
    borderRadius: 2,
    overflow: 'hidden',
  },
  infoContainer: {flexDirection: 'row', width: '100%'},
});
