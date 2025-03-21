import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Svg, Circle, Defs, LinearGradient, Stop } from 'react-native-svg';
import Animated, { useAnimatedProps, useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const screenWidth = Dimensions.get('window').width;

function BorderLinearProgress({ value }: any) {
  const progressStyle = useAnimatedStyle(() => ({
    width: `${value.value}%`,
  }));

  const valueShared = useSharedValue(value);

  React.useEffect(() => {
    valueShared.value = withTiming(value, { duration: 500 });
  }, [value]);

  return (
    <View style={[styles.linearContainer, { width: screenWidth * 0.5 }]}>
      <View style={styles.linearBackground}>
        <Animated.View style={[styles.linearBar, progressStyle]} />
      </View>
    </View>
  );
}

export default function CustomizedProgressBars({ value }: any) {
  const progressValue = useSharedValue(value);

  React.useEffect(() => {
    progressValue.value = value;
  }, [value]);

  return (
    <View style={styles.container}>
      <BorderLinearProgress value={progressValue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  linearContainer: {
    marginVertical: 10,
  },
  linearBackground: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: 5,
    overflow: 'hidden',
  },
  linearBar: {
    height: 6,
    backgroundColor: '#63FCFF',
    borderRadius: 5,
  },
});