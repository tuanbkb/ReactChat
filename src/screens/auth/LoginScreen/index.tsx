import { Text, TouchableOpacity, View } from 'react-native';
import { useAppTheme } from '../../../theme/theme.provider';
import * as styles from './styles';
import FilledButton from '../../../components/common/FilledButton';
import { useNavigation } from '@react-navigation/native';
import { AuthStackNames } from '../../../navigation/routes';

export default function LoginScreen() {
  const { themed, themeType, setThemeType} = useAppTheme();
  const navigation = useNavigation();

  const handleToSignUp = () => {
    navigation.navigate(AuthStackNames.SignUp);
  }

  const handleChangeTheme = () => {
    setThemeType(themeType === 'light' ? 'dark' : 'light');
  }

  return (
    <View style={themed(styles.container)}>

      <FilledButton
        text='Change Theme'
        onPress={handleChangeTheme}
      />
      <FilledButton
        text='To Sign Up'
        onPress={handleToSignUp}
      />
      <Text>This is the login screen</Text>
    </View>
  );
}
