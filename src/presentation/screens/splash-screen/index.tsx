import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import Video from 'react-native-video';

const video = require('./assets/splash.mp4');

const SplashScreen = ({onFinish}: {onFinish: () => void}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Video source={video} style={styles.backgroundVideo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  backgroundVideo: {
    width: '100%',
    height: '100%',
  },
});

export default SplashScreen;
