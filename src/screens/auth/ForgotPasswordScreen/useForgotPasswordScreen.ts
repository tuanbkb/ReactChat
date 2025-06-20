import { useState } from "react";

export default function useForgotPasswordScreen() {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string | null>(null);

  const validateInput = () => {
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      setEmailError('Invalid email address');
      return false;
    }
    return true;
  };

  const handleResetPassword = () => {
    if (validateInput()) {
      console.log('Resetting password...');
    }
  };

  return { email, setEmail, emailError, setEmailError, handleResetPassword };
}