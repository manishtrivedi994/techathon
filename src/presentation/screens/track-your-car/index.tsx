import {memo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ScreenWrapper from '../../widgets/screen-wrapper';
import {RadialSlider} from 'react-native-radial-slider';
import {Button} from 'rn-central-dls';
import GLOBAL from '../../styles/global';
import BackHeader from '../../../components/back-header';
import {Separator} from '../../widgets/separator';
import {width} from '../../../utitlites/display';
import TYPOGRAPHY from '../../styles/typography';
import CustomTextVariant, {TextToken} from '../../widgets/custom-text-variant';

const TrackYourCar = () => {
  const [speed, setSpeed] = useState(40);

  return (
    <ScreenWrapper>
      <View style={GLOBAL.Layout.fullFlex}>
        <BackHeader headerText="Track your car" />
        <RadialSlider
          value={speed}
          min={0}
          max={200}
          onChange={setSpeed}
          variant="speedometer-marker"
          unit="km/h"
          style={styles.center}
        />
        <Separator height={24} />
        <View style={[GLOBAL.Layout.rowCentering]}>
          <RadialSlider
            value={speed}
            min={0}
            max={200}
            onChange={setSpeed}
            variant="radial-circle-slider"
            unit="km/h"
            style={styles.radialStyle}
            thumbRadius={3}
            sliderWidth={5}
            step={1}
            markerLineSize={8000}
            unitStyle={{fontSize: 16}}
            valueStyle={{fontSize: 16}}
          />
          <RadialSlider
            value={speed}
            min={0}
            max={200}
            onChange={setSpeed}
            variant="radial-circle-slider"
            unit="°C"
            style={styles.radialStyle}
            thumbRadius={3}
            sliderWidth={5}
            step={1}
            markerLineSize={8000}
            unitStyle={{fontSize: 16}}
            valueStyle={{fontSize: 16}}
            title=""
            subTitle="Temp"
          />
        </View>
        <Separator height={24} />
        <View
          style={[
            {
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: 12,
              overflow: 'hidden',
              paddingVertical: 12,
              paddingHorizontal: 16,
            },
            styles.mh16,
          ]}>
          <CustomTextVariant
            variant={TextToken.BODY_MEDIUM}
            fontColor={TYPOGRAPHY.Color.white}>
            Last online
          </CustomTextVariant>
          <Separator height={4} />
          <CustomTextVariant
            variant={TextToken.BODY_REGULAR}
            fontColor={TYPOGRAPHY.Color.white}
            numberOfLines={3}>
            I1403, Mahindra Aura, Chandan Vihar, New Palam Vihar, Phase 3, New
            Delhi, 1100022
          </CustomTextVariant>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default memo(TrackYourCar);

const styles = StyleSheet.create({
  center: {alignSelf: 'center'},
  radialStyle: {
    transform: [{translateX: -width * 0.05}],
  },
  mh16: {marginHorizontal: 16},
});
