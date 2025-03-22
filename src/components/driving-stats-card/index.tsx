import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';
import CustomText from '../../presentation/widgets/custom-text';

// Define types for the props
interface StatItemProps {
  value: number;
  label: string;
  highlight?: boolean;
}

interface DrivingStatsCardProps {
  statsData?: {
    totalTrips: number;
    score: number;
    sharpTurns: number;
    stops: number;
    rpm: number;
    clutchIssues: number;
  };
}

// Reusable Stat Item Component
const StatItem: React.FC<StatItemProps> = React.memo(({ value, label, highlight = false }) => (
  <View style={styles.statItem}>
    <CustomText
      color={highlight ? '#FF6E6E' : '#fff'}
      fontSize={20}
      fontWeight="300"
    >
      {value}
    </CustomText>
    <CustomText color="#ccc" fontSize={12} fontWeight="500">
      {label}
    </CustomText>
  </View>
));

const DrivingStatsCard: React.FC<DrivingStatsCardProps> = ({ statsData }) => {
  // Provide default values if statsData is undefined
  const {
    totalTrips = 7,
    score = 2.8,
    sharpTurns = 5,
    stops = 3,
    rpm = 4.8,
    clutchIssues = 2,
  } = statsData || {};

  const progressChartData = {
    labels: ['Score'],
    data: [score / 5], // Normalized score (0 to 1)
  };

  const chartConfig = {
    backgroundGradientFrom: 'transparent',
    backgroundGradientTo: 'transparent',
    color: (opacity = 1) => `rgba(99, 252, 255, ${opacity})`,
    strokeWidth: 16,
    barPercentage: 1,
    useShadowColorFromDataset: false,
    propsForBackgroundLines: { strokeWidth: 0 },
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.horizontalContainer}>
          {/* Progress Chart Section */}
          <View style={styles.chartWrapper}>
            <ProgressChart
              data={progressChartData}
              width={120}
              height={120}
              strokeWidth={16}
              radius={50}
              chartConfig={chartConfig}
              hideLegend
            />
            <View style={styles.scoreOverlay}>
              <CustomText color="#63FCFF" fontSize={24} fontWeight="400">
                {score}
              </CustomText>
            </View>
          </View>

          {/* Driving Stats Section */}
          <View style={styles.statsGrid}>
            <View style={styles.statsRow}>
              <StatItem value={stops} label="Stops" />
              <StatItem value={sharpTurns} label="Sharp Turns" highlight />
            </View>
            <View style={styles.statsRow}>
              <StatItem value={rpm} label="RPM" />
              <StatItem value={clutchIssues} label="Clutch Issues" />
            </View>
          </View>
        </View>

        {/* Footer Section */}
        <View style={styles.footer}>
          <View style={styles.totalTripsContainer}>
            <CustomText color="#ccc" fontSize={24} fontWeight="500">
              {totalTrips}
            </CustomText>
            <CustomText color="#ccc" fontSize={12} fontWeight="400">
              {' '}
              total trips
            </CustomText>
          </View>
          <TouchableOpacity>
            <CustomText color="#63FCFF" fontSize={16} fontWeight="500">
              View all trips
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// Styles
const { width: SCREEN_WIDTH } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  card: {
    // backgroundColor: '#0A0F0A',
    backgroundColor: '#060F0D',
    borderRadius: 20,
    padding: 16,
    width: SCREEN_WIDTH * 0.9,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  chartWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  scoreOverlay: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsGrid: {
    flex: 1,
    marginLeft: 16,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  statItem: {
    flex: 1,
    // alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalTripsContainer: {
    flexDirection: 'row',
    alignItems: 'baseline'
  },
});

export default React.memo(DrivingStatsCard);