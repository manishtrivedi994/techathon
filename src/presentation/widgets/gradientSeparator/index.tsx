import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const GradientSeparator = () => {
  return (
    <LinearGradient
      colors={['#63FCFF00', '#63FCFF', '#63FCFF00']}
      style={styles.container}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}></LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {width: '100%', height: 2},
});
