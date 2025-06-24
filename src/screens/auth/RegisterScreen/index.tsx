import React, { useRef } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
} from 'react-native';
import Button from '../../../components/common/Button';
import OutlinedTextField from '../../../components/common/OutlinedTextField';
import { useAppTheme } from '../../../theme/theme.provider';
import * as styles from './styles';
import useRegisterScreen from './useRegisterScreen';

export default function RegisterScreen() {
  const { theme, themed } = useAppTheme();

  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);

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
    loading,
    error,
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
          placeholder="Enter your username"
          returnKeyType="next"
          submitBehavior={'submit'}
          onSubmitEditing={() => emailRef.current && emailRef.current.focus()}
        />
      </View>
      <View style={themed(styles.inputContainer)}>
        <Text style={themed(styles.inputLabel)}>Email:</Text>
        <OutlinedTextField
          ref={emailRef}
          value={email}
          onChangeText={setEmail}
          error={emailError}
          setError={setEmailError}
          placeholder="Enter your email"
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
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          error={passwordError}
          setError={setPasswordError}
          placeholder="Enter your password"
          returnKeyType="next"
          submitBehavior={'submit'}
          onSubmitEditing={() =>
            confirmPasswordRef.current && confirmPasswordRef.current.focus()
          }
        />
      </View>
      <View style={themed(styles.inputContainer)}>
        <Text style={themed(styles.inputLabel)}>Confirm Password:</Text>
        <OutlinedTextField
          ref={confirmPasswordRef}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry={true}
          error={confirmPasswordError}
          setError={setConfirmPasswordError}
          placeholder="Confirm your password"
          returnKeyType="done"
          onSubmitEditing={handleRegister}
        />
      </View>

      {error && <Text style={themed(styles.error)}>{error}</Text>}
      <View style={themed(styles.divider)} />
      <Button text="Register" onPress={handleRegister} />

      {loading && (
        <View style={themed(styles.loadingOverlay)}>
          <ActivityIndicator size="large" color={theme.colors.inversePrimary} />
        </View>
      )}
    </KeyboardAvoidingView>
  );
}
