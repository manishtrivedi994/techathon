import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import CustomText from "../../presentation/widgets/custom-text";
import CustomizedProgressBars from "../../presentation/widgets/progress-bar";

const screenWidth = Dimensions.get("window").width;

const BarMetric = () => {
  return (
    <View style={[styles.barContainer, { width: screenWidth }]}>
      <CustomText color={"#fff"} fontSize={12} fontWeight="500">
        Turn efficiency
      </CustomText>
      <View style={styles.bar}>
        <View style={{ width: screenWidth * 0.5 }}>
          <CustomizedProgressBars value={70} />
        </View>
        <CustomText color={"#fff"} fontSize={12} fontWeight="500">
          4.2
        </CustomText>
      </View>
    </View>
  );
};

const HomePageMetricContainer = () => {
  const data = {
    labels: ["Swim"],
    data: [0.4],
  };

  const chartConfig = {
    backgroundGradientFrom: "transparent",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "transparent",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(99, 252, 255, ${opacity})`,
    strokeWidth: 16,
    barPercentage: 1,
    useShadowColorFromDataset: false,
    style: {
      borderRadius: 80,
    },
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <CustomText color={"rgba(255, 255, 255, 0.80);"} fontSize={12} fontWeight="400">
          YOUR DRIVING SCORE
        </CustomText>
        <ProgressChart
          data={data}
          width={screenWidth}
          height={220}
          strokeWidth={16}
          radius={80}
          chartConfig={chartConfig}
          hideLegend={true}
        />
        <View style={styles.ctaContainer}>
          <CustomText color={"#63FCFF"} fontSize={30} fontWeight="400">
            4.23
          </CustomText>
          <CustomText color={"#fff"} fontSize={14} fontWeight="600">
            Safe drives
          </CustomText>
        </View>
      </View>
      <BarMetric />
      <BarMetric />
      <BarMetric />
      <BarMetric />
      <BarMetric />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: screenWidth,
    flexDirection: "column",
    justifyContent: "space-between", // Keep space-between
  },
  container: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    width: screenWidth,
  },
  ctaContainer: {
    position: "absolute",
    top: 90,
    right: 0,
    left: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  barContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  bar: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 25,
    marginLeft: 20,
    flex: 1,
  },
});

export default HomePageMetricContainer;