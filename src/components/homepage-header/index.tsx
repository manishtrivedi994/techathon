import React from "react";
import { StyleSheet, View } from "react-native";
import CustomText from "../../presentation/widgets/custom-text";
import LinearGradient from "react-native-linear-gradient";

const HomePageHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <CustomText color={"#fff"} fontWeight={"600"} fontSize={16} style={styles.text}>
        Welcome Ainesh
      </CustomText>
      <CustomText color={"#FFFFFF99"} fontWeight={"300"} fontSize={14} style={styles.text}>
        Let us help you drive safe today
      </CustomText>

      {/* Stroke with gradient, opacity, and shadow */}
      <LinearGradient
        colors={["rgba(99,252,255,0)", "#63FCFF", "rgba(99,252,255,0)"]}
        locations={[0, 0.48, 1]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.stroke}
      />

      <View style={{ height: 10 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingTop: 13,
  },
  text: {
    textAlign: "center",
  },
  stroke: {
    marginTop: 20,
    alignSelf: "center",
    height: 1,
    width: 292,
    opacity: 0.6,
    // Shadow for iOS
    shadowColor: "#63FCFF",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 16,
    // Shadow for Android
    elevation: 5,
  },
});

export default HomePageHeader;
