import { Text, View } from "react-native";
import * as styles from './styles';
import { useAppTheme } from "../../../theme/theme.provider";
import OutlinedTextField from "../../../components/common/OutlinedTextField";
import useForgotPasswordScreen from "./useForgotPasswordScreen";
import Button from "../../../components/common/Button";

export default function ForgotPasswordScreen() {
  const { themed } = useAppTheme();

  const { email, setEmail, emailError, setEmailError, handleResetPassword } = useForgotPasswordScreen();

  return (
    <View style={themed(styles.container)}>
      <Text style={themed(styles.title)}>Forgot Password</Text>
      <View style={themed(styles.divider)} />
      <Text style={themed(styles.subtitle)}>Enter your email you used to register</Text>
      <Text style={themed(styles.subtitle)}>We will send you a link to reset your password</Text>
      <View style={themed(styles.divider)} />
      <View style={themed(styles.inputContainer)}>
        <Text style={themed(styles.inputLabel)}>Email:</Text>
        <OutlinedTextField
          value={email}
          onChangeText={setEmail}
          error={emailError}
          setError={setEmailError}
          placeholder="Enter your email"
        />
      </View>
      <View style={themed(styles.divider)} />
      <Button text="Confirm" onPress={handleResetPassword} fillMaxWidth={true} />
    </View>
  );
}