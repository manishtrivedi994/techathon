import {FlatList, StyleSheet, View} from 'react-native';
import ScreenWrapper from '../../widgets/screen-wrapper';
import {memo, useCallback, useState} from 'react';
import GLOBAL from '../../styles/global';
import BackHeader from '../../../components/back-header';
import {Separator} from '../../widgets/separator';
import {trips} from './data';
import {Trip} from './types';
import TripCard from './components/trip-card';
import DropDownPicker from 'react-native-dropdown-picker';
import TYPOGRAPHY from '../../styles/typography';
import {SvgIcons} from '../../icons/svgs/SvgIcons';
import {width} from '../../../utitlites/display';

const _keyExtractor = (item: Trip, index: number) => `${item?.tripId}-${index}`;
const ItemSeparator = () => <Separator height={24} />;

const AllTrips = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Today', value: 1},
    {label: 'Last week', value: 7},
    {label: 'Last Month', value: 30},
  ]);

  const _renderItem = useCallback(
    ({item, index}: {item: Trip; index: number}) => {
      return <TripCard item={item} index={index} />;
    },
    [],
  );

  return (
    <ScreenWrapper>
      <View style={GLOBAL.Layout.fullFlex}>
        <View style={GLOBAL.Layout.spaceBetween}>
          <View>
            <BackHeader headerText="All trips" />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              showArrowIcon={true}
              style={styles.dropdownStyle}
              labelStyle={styles.labelStyle}
              placeholder="Today"
              placeholderStyle={styles.placeholderStyle}
              containerStyle={styles.dropdownContainerStyle}
              ArrowDownIconComponent={() => <SvgIcons.ChevronUp />}
              ArrowUpIconComponent={() => (
                <SvgIcons.ChevronUp style={{transform: [{rotate: '180deg'}]}} />
              )}
              textStyle={styles.textStyle}
              dropDownContainerStyle={styles.dropListContainer}
            />
          </View>
        </View>
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
  dropdownStyle: {
    borderWidth: 0,
    backgroundColor: TYPOGRAPHY.Color.transparent,
    marginRight: 16,
  },
  labelStyle: {color: TYPOGRAPHY.Color.white},
  dropdownContainerStyle: {
    alignItems: 'flex-end',
  },
  placeholderStyle: {
    color: TYPOGRAPHY.Color.white,
    fontSize: 14,
    fontWeight: 400,
  },
  textStyle: {
    flex: 1,
    justifyContent: 'flex-end',
    textAlign: 'right',
  },
  dropListContainer: {
    width: width * 0.4,
    flex: 1,
  },
});

export default memo(AllTrips);
