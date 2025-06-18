import AppNavigator from './src/navigation/AppNavigation';
import ThemeProvider from './src/theme/theme.provider';

function App() {
  return (
    <ThemeProvider>
      <AppNavigator />
    </ThemeProvider>
  );
}

export default App;
