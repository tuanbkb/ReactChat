import LoginScreen from './src/screens/auth/LoginScreen';
import ThemeProvider from './src/theme/theme.provider';

function App() {
  return (
    <ThemeProvider>
      <LoginScreen />
    </ThemeProvider>
  );
}

export default App;
