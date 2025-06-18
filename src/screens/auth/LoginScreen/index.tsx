import { Text, TouchableOpacity, View } from 'react-native';
import { useAppTheme } from '../../../theme/theme.provider';
import * as styles from './styles';
import FilledButton from '../../../components/common/FilledButton';

export default function LoginScreen() {
  const {theme, themed, themeType, setThemeType} = useAppTheme();

  const handleChangeTheme = () => {
    setThemeType(themeType === 'light' ? 'dark' : 'light');
  }

  return (
    <View style={themed(styles.container)}>

      <FilledButton
        text='Change Theme'
        onPress={handleChangeTheme}
      />
      <Text>This is the login screen</Text>
    </View>
  );
}
