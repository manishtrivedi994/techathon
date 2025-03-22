import React, {useCallback} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {SvgIcons} from '../../presentation/icons/svgs/SvgIcons';
import CustomText from '../../presentation/widgets/custom-text';
import {cPop} from '../../navigation/navUtil';

type RootStackParamList = {
  Home: undefined;
};

type BackHeaderProps = {
  headerText: string;
};

const BackHeader: React.FC<BackHeaderProps> = ({headerText}) => {
  const onBack = useCallback(() => {
    cPop();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonContainer} onPress={onBack}>
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
