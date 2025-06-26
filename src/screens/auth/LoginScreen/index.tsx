import { useRef } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from '../../../components/common/Button';
import OutlinedTextField from '../../../components/common/OutlinedTextField';
import { useAppTheme } from '../../../theme/theme.provider';
import * as styles from './styles';
import useLoginScreen from './useLoginScreen';

export default function LoginScreen() {
  const { themed } = useAppTheme();

  const passwordRef = useRef<TextInput>(null);

  const {
    setEmail,
    setPassword,
    handleLogin,
    handleForgetPassword,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
  } = useLoginScreen();

  return (
    <View style={themed(styles.container)}>
      <View style={themed(styles.inputContainer)}>
        <Text style={themed(styles.inputLabel)}>Email:</Text>
        <OutlinedTextField
          onChangeText={setEmail}
          placeholder="Email"
          error={emailError}
          setError={setEmailError}
          leadingIconName="mail"
          returnKeyType="next"
          submitBehavior={'submit'}
          onSubmitEditing={() =>
            passwordRef.current && passwordRef.current.focus()
          }
        />
      </View>
      <View style={themed(styles.inputContainer)}>
        <Text style={themed(styles.inputLabel)}>Password:</Text>
        <OutlinedTextField
          ref={passwordRef}
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          error={passwordError}
          setError={setPasswordError}
          secureTextEntry={true}
          leadingIconName="key"
          returnKeyType="go"
          submitBehavior={'blurAndSubmit'}
          onSubmitEditing={handleLogin}
        />
      </View>
      <View style={themed(styles.divider)} />
      <Button text="Login" onPress={handleLogin} />
      <View style={themed(styles.divider)} />
      <View style={themed(styles.forgotPasswordContainer)}>
        <Text style={themed(styles.forgotPasswordText)}>
          Forgot your password?{' '}
        </Text>
        <TouchableOpacity onPress={handleForgetPassword}>
          <Text style={themed(styles.forgotPasswordLink)}>Reset here!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
