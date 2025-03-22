import {useSelector} from 'react-redux';
import {useAppSelector} from './useAppSelector';
import {RootState} from '../../store/store';

export const useIsLoggedIn = () => {
  const isLoggedIn = useAppSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );

  return isLoggedIn;
};
