import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store'; // Import the Redux store
import AppNavigator from './src/navigation/AppNavigator'; // Import your navigation component

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;