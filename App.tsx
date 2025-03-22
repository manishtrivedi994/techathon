import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/store'; // Import the Redux store
import AppNavigator from './src/navigation/AppNavigator'; // Import your navigation component
import ErrorBoundary from './src/components/error-boundry';

const App = () => {
  return (
    <Provider store={store}>
      <ErrorBoundary>
       <AppNavigator />
      </ErrorBoundary>
    </Provider>
  );
};

export default App;