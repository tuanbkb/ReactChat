import { View, Text } from 'react-native';
import * as styles from './styles';
import { useAppTheme } from '../../../theme/theme.provider';
import LandingIllustration from '../../../components/common/LandingIllustration/LandingIllustration';
import Button from '../../../components/common/Button';
import { useNavigation } from '@react-navigation/native';
import { AuthStackParamList } from '../../../navigation/paramLists';
import { AuthStackNames } from '../../../navigation/routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export default function BeginScreen() {
  const { themed } = useAppTheme();

  type navigationProps = NativeStackNavigationProp<AuthStackParamList, typeof AuthStackNames.Begin>;
  const navigation = useNavigation<navigationProps>();

  const handleLogin = () => {
    navigation.navigate(AuthStackNames.Login);
  }

  const handleRegister = () => {
    navigation.navigate(AuthStackNames.Register);
  }

  return (
    <View style={themed(styles.container)}>
      <View style={themed(styles.subContainer)}>
        <LandingIllustration />
      </View>
      <View style={themed(styles.subContainer)}>
        <Text style={themed(styles.title)}>Welcome to ReactChat</Text>
        <Text style={themed(styles.subtitle)}>Connect with your friends and family</Text>
        <View style={themed(styles.divider)} />
        <Button text='Login' onPress={handleLogin} fillMaxWidth={true} />
        <View style={themed(styles.divider)} />
        <Button text='Register' onPress={handleRegister} style='outlined' fillMaxWidth={true} />
      </View>
    </View>
  );
}
