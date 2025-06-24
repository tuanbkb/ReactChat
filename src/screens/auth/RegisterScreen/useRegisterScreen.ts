import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../redux/hook';
import { selectError, selectLoading, signUpEmailPassword, userActions } from '../../../stores/user.slice';
import { Keyboard } from 'react-native';

export default function useRegisterScreen() {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const [usernameError, setUsernameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState<
    string | null
  >(null);

  const loading = useAppSelector(selectLoading);
  const error = useAppSelector(selectError);
  const dispatch = useAppDispatch();

  // Reset error when component mounts
  useEffect(() => {
    dispatch(userActions.clearError());
  }, [dispatch]);

  const validateInput = () => {
    let isValid = true;
    if (username.length < 3) {
      setUsernameError('Username must be at least 3 characters long');
      isValid = false;
    }
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setEmailError('Invalid email address');
      isValid = false;
    }
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      isValid = false;
    }
    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      isValid = false;
    }
    return isValid;
  };

  const handleRegister = () => {
    Keyboard.dismiss();
    if (validateInput()) {
      dispatch(signUpEmailPassword({ username, email, password }));
    }
  };

  return {
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
  };
}
