import {useCallback} from 'react';
import {cPush} from '../../../../navigation/navUtil';

export const useHomeScreen = () => {
  const _onLiveTrack = useCallback(() => {
    cPush('TrackYourCar', {});
  }, []);
  return {_onLiveTrack};
};
