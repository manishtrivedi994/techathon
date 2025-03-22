import {memo, useState, useEffect} from 'react';
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
  const [temp, setTemp] = useState(25);
  const [fuel, setFuel] = useState(60);

  useEffect(() => {
    // Update speed every 5 seconds
    const speedInterval = setInterval(() => {
      setSpeed(prevSpeed => {
        const randomChange = Math.floor(Math.random() * 15) + 1; // Random number between 1 and 8
        const direction = Math.random() < 0.5 ? -1 : 1; // Randomly decide to increase or decrease
        const newSpeed = prevSpeed + direction * randomChange;

        // Ensure speed stays within bounds (0 to 200)
        if (newSpeed < 0) return 0;
        if (newSpeed > 200) return 200;
        return newSpeed;
      });
    }, 2000);

    // Update fuel every 5 seconds
    const fuelInterval = setInterval(() => {
      setFuel(prevFuel => {
        const newFuel = prevFuel - 1; // Decrement fuel by 1
        return newFuel < 0 ? 100 : newFuel; // Reset to 100 if it goes below 0
      });
    }, 10000);

    // Update temperature every 2 minutes (120000 milliseconds)
    const tempInterval = setInterval(() => {
      setTemp(prevTemp => {
        const newTemp = prevTemp + 1; // Increment temperature by 1
        return newTemp > 50 ? 0 : newTemp; // Reset to 0 if it exceeds 50
      });
    }, 120000);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(speedInterval);
      clearInterval(fuelInterval);
      clearInterval(tempInterval);
    };
  }, []);

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
          <View style={styles.radialStyle}>
            <RadialSlider
              value={fuel}
              min={0}
              max={100}
              onChange={setFuel}
              variant="radial-circle-slider"
              unit="%"
              thumbRadius={3}
              sliderWidth={5}
              step={1}
              markerLineSize={500}
              unitStyle={{fontSize: 16}}
              valueStyle={{fontSize: 16}}
              title=""
              subTitle="Fuel"
            />
          </View>
          <View style={styles.radialStyle}>
            <RadialSlider
              value={temp}
              min={0}
              max={50}
              onChange={setTemp}
              variant="radial-circle-slider"
              unit="°C"
              thumbRadius={3}
              sliderWidth={5}
              step={1}
              markerLineSize={500}
              unitStyle={{fontSize: 16}}
              valueStyle={{fontSize: 16}}
              title=""
              subTitle="Temp"
            />
          </View>
        </View>
        <Separator height={24} />
        <View style={[styles.addressContainer, styles.mh16]}>
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
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mh16: {marginHorizontal: 16},
  addressContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    overflow: 'hidden',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});