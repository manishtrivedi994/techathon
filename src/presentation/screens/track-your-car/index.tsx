import {memo, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ScreenWrapper from '../../widgets/screen-wrapper';
import {RadialSlider} from 'react-native-radial-slider';
import {Button} from 'rn-central-dls';
import GLOBAL from '../../styles/global';

const TrackYourCar = () => {
  const [speed, setSpeed] = useState(0);

  return (
    <ScreenWrapper>
      <View style={GLOBAL.Layout.fullFlex}>
        <RadialSlider
          value={speed}
          min={0}
          max={200}
          onChange={setSpeed}
          variant="speedometer-marker"
          unit="km/h"
          style={styles.center}
        />
        <Button title="increase" onPress={() => setSpeed(prev => prev + 10)} />
        <Button title="increase" onPress={() => setSpeed(prev => prev - 10)} />
      </View>
    </ScreenWrapper>
  );
};

export default memo(TrackYourCar);

const styles = StyleSheet.create({
  center: {alignSelf: 'center'},
});
