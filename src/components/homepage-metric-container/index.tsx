import React from "react";
import { View, Dimensions, StyleSheet } from "react-native";
import { ProgressChart } from "react-native-chart-kit";
import CustomText from "../../presentation/widgets/custom-text";
import CustomizedProgressBars from "../../presentation/widgets/progress-bar";

const screenWidth = Dimensions.get("window").width;

const BarMetric = ({ data }) => {
  return (
    <View style={[styles.barContainer, { width: screenWidth }]}>
      {/* Title */}
      <CustomText color={"#fff"} fontSize={12} fontWeight="500">
        {data.title}
      </CustomText>

      {/* Progress Bar and Value */}
      <View style={styles.bar}>
        <View style={styles.progressBarContainer}>
          <CustomizedProgressBars value={70} />
        </View>
        <CustomText color={"#fff"} fontSize={12} fontWeight="500">
          {data.value}
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

  const barmatrixData = [
      {title: 'Turn efficiency', value: 4},
      {title: 'Milege', value: 3},
      {title: 'Deceleration timing', value: 3.5},
      {title: 'Engine efficiency', value: 5},
      {title: 'Speed efficiency', value: 4.5},
    ];

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
      {barmatrixData.map((item) => {
        return  <BarMetric data={item} />
      })}
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
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  progressBarContainer: {
    flex: 1, // Allow the progress bar to take up available space
    marginRight: 8, // Add spacing between progress bar and text
  },
});

export default HomePageMetricContainer;