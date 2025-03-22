import {FlatList, StyleSheet, View} from 'react-native';
import ScreenWrapper from '../../widgets/screen-wrapper';
import {memo, useCallback} from 'react';
import GLOBAL from '../../styles/global';
import BackHeader from '../../../components/back-header';
import {Separator} from '../../widgets/separator';
import {trips} from './data';
import {Trip} from './types';
import TripCard from './components/trip-card';

const _keyExtractor = (item: Trip, index: number) => `${item?.tripId}-${index}`;
const ItemSeparator = () => <Separator height={24} />;

const AllTrips = () => {
  const _renderItem = useCallback(
    ({item, index}: {item: Trip; index: number}) => {
      return <TripCard item={item} index={index} />;
    },
    [],
  );

  return (
    <ScreenWrapper>
      <View style={GLOBAL.Layout.fullFlex}>
        <BackHeader headerText="All trips" />
        <Separator height={24} />
        <FlatList
          data={trips}
          renderItem={_renderItem}
          keyExtractor={_keyExtractor}
          contentContainerStyle={styles.contentContainerStyle}
          ItemSeparatorComponent={ItemSeparator}
        />
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
});

export default memo(AllTrips);
