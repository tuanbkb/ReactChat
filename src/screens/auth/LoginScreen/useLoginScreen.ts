import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { AuthStackParamList } from '../../../navigation/paramLists';
import { AuthStackNames } from '../../../navigation/routes';
import { Keyboard } from 'react-native';
import { useAppDispatch } from '../../../redux/hook';
import { signInEmailPassword } from '../../../stores/user.slice';

export default function useLoginScreen() {
  type Props = NativeStackScreenProps<
    AuthStackParamList,
    typeof AuthStackNames.Login
  >;
  const navigation = useNavigation<Props['navigation']>();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const validateInput = () => {
    let isValid = true;
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setEmailError('Invalid email address');
      isValid = false;
    }
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      isValid = false;
    }
    return isValid;
  };

  const handleLogin = () => {
    Keyboard.dismiss();
    if (validateInput()) {
      dispatch(signInEmailPassword({ email, password }));
    }
  };

  const handleForgetPassword = () => {
    navigation.navigate(AuthStackNames.ForgotPassword);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleForgetPassword,
    emailError,
    setEmailError,
    passwordError,
    setPasswordError,
  };
}
