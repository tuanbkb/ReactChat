import { useState } from "react"

export default function useLoginScreen() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    
  }

  const handleForgetPassword = () => {

  }

  return { username, setUsername, password, setPassword, handleLogin, handleForgetPassword };
}