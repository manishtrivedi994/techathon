import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

const LoadingScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#3A8DFF" style={styles.loader} />
      <Text style={styles.text}>
        We are fetching your Data, This may take a few moments. please wait...
      </Text>
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Pure black background
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  loader: {
    marginBottom: 20,
  },
  text: {
    color: '#A0A0A0', // Light grey text
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
  },
});
