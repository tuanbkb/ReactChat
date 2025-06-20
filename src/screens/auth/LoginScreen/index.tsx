import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import Button from '../../../components/common/Button';
import { AuthStackNames } from '../../../navigation/routes';
import { useAppTheme } from '../../../theme/theme.provider';
import * as styles from './styles';
import useLoginScreen from './useLoginScreen';
import OutlinedTextField from '../../../components/common/OutlinedTextField';

export default function LoginScreen() {
  const { themed } = useAppTheme();
  const navigation = useNavigation();

  const { username, setUsername, password, setPassword, handleLogin, handleForgetPassword } = useLoginScreen();

  return (
    <View style={themed(styles.container)}>
      <Text style={themed(styles.title)}>Login to ReactChat</Text>
      <View style={themed(styles.inputContainer)}>
        <Text style={themed(styles.inputLabel)}>Username:</Text>
        <OutlinedTextField
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
        />
      </View>
      <View style={themed(styles.inputContainer)}>
        <Text style={themed(styles.inputLabel)}>Password:</Text>
        <OutlinedTextField
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
        />
      </View>
      <View style={themed(styles.divider)} />
      <Button text="Login" onPress={handleLogin} />
      <View style={themed(styles.divider)} />
      <Button text="Forget Password?" onPress={handleForgetPassword} style="outlined" />
    </View>
  );
}
