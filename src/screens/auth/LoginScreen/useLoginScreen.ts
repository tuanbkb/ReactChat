import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { AuthStackParamList } from '../../../navigation/paramLists';
import { AuthStackNames } from '../../../navigation/routes';

export default function useLoginScreen() {
  type Props = NativeStackScreenProps<
    AuthStackParamList,
    typeof AuthStackNames.Login
  >;
  const navigation = useNavigation<Props['navigation']>();

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const validateInput = () => {
    let isValid = true;
    if (username.length < 3) {
      setUsernameError('Username must be at least 3 characters long');
      isValid = false;
    }
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      isValid = false;
    }
    return isValid;
  };

  const handleLogin = () => {
    if (validateInput()) {
      console.log('Logging in...');
    }
  };

  const handleForgetPassword = () => {
    navigation.navigate(AuthStackNames.ForgotPassword);
  };

  return {
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
  };
}
