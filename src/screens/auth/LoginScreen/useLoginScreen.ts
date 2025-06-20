import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useState } from "react"
import { AuthStackParamList } from "../../../navigation/paramLists";
import { AuthStackNames } from "../../../navigation/routes";
import { useNavigation } from "@react-navigation/native";

export default function useLoginScreen() {
  type Props = NativeStackScreenProps<AuthStackParamList, typeof AuthStackNames.Login>;
  const navigation = useNavigation<Props['navigation']>();
  
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    
  }

  const handleForgetPassword = () => {
    navigation.navigate(AuthStackNames.ForgotPassword);
  }

  return { username, setUsername, password, setPassword, handleLogin, handleForgetPassword };
}