import { KeyboardAvoidingView, Text, View } from 'react-native';
import Button from '../../../components/common/Button';
import OutlinedTextField from '../../../components/common/OutlinedTextField';
import { useAppTheme } from '../../../theme/theme.provider';
import * as styles from './styles';
import useRegisterScreen from './useRegisterScreen';

export default function RegisterScreen() {
  const { themed } = useAppTheme();

  const {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    handleRegister,
    usernameError,
    setUsernameError,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
    confirmPasswordError,
    setConfirmPasswordError,
  } = useRegisterScreen();

  return (
    <KeyboardAvoidingView style={themed(styles.container)}>
      <View style={themed(styles.inputContainer)}>
        <Text style={themed(styles.inputLabel)}>Username:</Text>
        <OutlinedTextField
          value={username}
          onChangeText={setUsername}
          error={usernameError}
          setError={setUsernameError}
        />
      </View>
      <View style={themed(styles.inputContainer)}>
        <Text style={themed(styles.inputLabel)}>Email:</Text>
        <OutlinedTextField
          value={email}
          onChangeText={setEmail}
          error={emailError}
          setError={setEmailError}
        />
      </View>
      <View style={themed(styles.inputContainer)}>
        <Text style={themed(styles.inputLabel)}>Password:</Text>
        <OutlinedTextField
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          error={passwordError}
          setError={setPasswordError}
        />
      </View>
      <View style={themed(styles.inputContainer)}>
        <Text style={themed(styles.inputLabel)}>Confirm Password:</Text>
        <OutlinedTextField
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
          error={confirmPasswordError}
          setError={setConfirmPasswordError}
        />
      </View>
      <View style={themed(styles.divider)} />
      <Button text="Register" onPress={handleRegister} />
    </KeyboardAvoidingView>
  );
}
