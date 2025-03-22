import {NavigationContainerRef, StackActions} from '@react-navigation/native';
import {createRef} from 'react';

export const navigationRef = createRef<NavigationContainerRef<any>>();

export function cNavigate(name: string, params: any) {
  if (navigationRef.current?.isReady()) {
    navigationRef.current?.navigate(name, params);
  }
}

export function cPush(name: string, params: any) {
  if (navigationRef.current?.isReady()) {
    navigationRef.current?.dispatch(StackActions.push(name, params));
  }
}

export function cReplace(name: string, params: any) {
  if (navigationRef.current?.isReady()) {
    navigationRef.current?.dispatch(StackActions.replace(name, params));
  }
}

export function cPushOrReplace(name: string, params: any, replace?: boolean) {
  if (replace) {
    cReplace(name, params);
  } else {
    cPush(name, params);
  }
}
export function cPop(count = 1) {
  if (navigationRef.current?.isReady() && navigationRef.current?.canGoBack()) {
    navigationRef.current?.dispatch(StackActions.pop(count));
  }
}

export function cPopToScreenViaKey(key: string) {
  if (navigationRef.current?.isReady()) {
    const state = navigationRef.current?.getState() ?? {};
    const routeIndex = state.routes?.findIndex(item => item.key === key);
    if (routeIndex > -1 && state?.index > -1 && state?.index > routeIndex) {
      navigationRef.current?.dispatch(
        StackActions.pop(state.index - routeIndex),
      );
    }
  }
}

export function cPopToTop() {
  if (navigationRef.current?.isReady()) {
    navigationRef.current?.dispatch(StackActions.popToTop());
  }
}

export function cStackReset(name: string, params = {}) {
  const index = 0;
  const routes = [{name, params}];
  navigationRef.current?.reset({index, routes});
}
