import React from "react";
import { Image, StyleSheet, View } from "react-native";
import CustomText from "../../presentation/widgets/custom-text";
import LinearGradient from "react-native-linear-gradient"

const ImageBg = require('./assets/creta-blue.png');
const BackgroundImage = require('./assets/background.png');
const LiveTrackingContainer = () => {
  return (
    <View style={styles.container}>
    <Image source={BackgroundImage} style={styles.backgroundImage} resizeMode="contain"/>
      <Image source={ImageBg} style={styles.backgroundImage} resizeMode="contain"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Add styles for the container if needed
    flex:1
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  }
});

export default LiveTrackingContainer;