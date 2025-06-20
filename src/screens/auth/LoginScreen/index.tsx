import { Text, TouchableOpacity, View } from 'react-native';
import Button from '../../../components/common/Button';
import OutlinedTextField from '../../../components/common/OutlinedTextField';
import { useAppTheme } from '../../../theme/theme.provider';
import * as styles from './styles';
import useLoginScreen from './useLoginScreen';

export default function LoginScreen() {
  const { themed } = useAppTheme();

  const {
    username,
    setUsername,
    password,
    setPassword,
    handleLogin,
    handleForgetPassword,
    usernameError,
    setUsernameError,
    passwordError,
    setPasswordError,
  } = useLoginScreen();

  return (
    <View style={themed(styles.container)}>
      <View style={themed(styles.inputContainer)}>
        <Text style={themed(styles.inputLabel)}>Username:</Text>
        <OutlinedTextField
          value={username}
          onChangeText={setUsername}
          placeholder="Username"
          error={usernameError}
          setError={setUsernameError}
          leadingIconName='person'
        />
      </View>
      <View style={themed(styles.inputContainer)}>
        <Text style={themed(styles.inputLabel)}>Password:</Text>
        <OutlinedTextField
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          error={passwordError}
          setError={setPasswordError}
          secureTextEntry={true}
          leadingIconName='key'
        />
      </View>
      <View style={themed(styles.divider)} />
      <Button text="Login" onPress={handleLogin} />
      <View style={themed(styles.divider)} />
      <View style={themed(styles.forgotPasswordContainer)}>
        <Text style={themed(styles.forgotPasswordText)}>Forgot your password?  </Text>
        <TouchableOpacity onPress={handleForgetPassword}>
          <Text style={themed(styles.forgotPasswordLink)}>Reset here!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
