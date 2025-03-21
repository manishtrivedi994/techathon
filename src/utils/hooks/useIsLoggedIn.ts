import {useSelector} from 'react-redux';

export const useIsLoggedIn = () => {
  //   const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const isLoggedIn = true;
  return isLoggedIn;
};
