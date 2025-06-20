import { Provider } from 'react-redux';
import AppNavigator from './src/navigation/AppNavigation';
import ThemeProvider from './src/theme/theme.provider';
import { persistor, store } from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <AppNavigator />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
