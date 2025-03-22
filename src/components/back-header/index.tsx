import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { SvgIcons } from '../../presentation/icons/svgs/SvgIcons';
import CustomText from '../../presentation/widgets/custom-text';
import { StackNavigationProp } from '@react-navigation/stack'; // Import navigation type

// Define the type for the navigation prop
type RootStackParamList = {
  // Define your screen names here
  Home: undefined;
};

type BackHeaderProps = {
  navigation: StackNavigationProp<RootStackParamList>; // Navigation prop type
  headerText: string; // Dynamic text prop type
};

const BackHeader: React.FC<BackHeaderProps> = ({ navigation, headerText }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.goBack()}
      >
        <SvgIcons.LeftBackButton />
        <CustomText style={styles.text}>{headerText}</CustomText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    paddingVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: '600',
    color: '#fff',
  },
});

export default BackHeader;