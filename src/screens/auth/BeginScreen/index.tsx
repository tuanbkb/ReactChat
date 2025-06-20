import { View, Text } from 'react-native';
import * as styles from './styles';
import { useAppTheme } from '../../../theme/theme.provider';
import LandingIllustration from '../../../components/common/LandingIllustration/LandingIllustration';
import Button from '../../../components/common/Button';

export default function BeginScreen() {
  const { themed } = useAppTheme();

  return (
    <View style={themed(styles.container)}>
      <View style={themed(styles.subContainer)}>
        <LandingIllustration />
      </View>
      <View style={themed(styles.subContainer)}>
        <Text style={themed(styles.title)}>Welcome to ReactChat</Text>
        <Text style={themed(styles.subtitle)}>Connect with your friends and family</Text>
        <View style={themed(styles.divider)} />
        <Button text='Login' onPress={() => {}} fillMaxWidth={true} />
        <View style={themed(styles.divider)} />
        <Button text='Sign Up' onPress={() => {}} style='outlined' fillMaxWidth={true} />
      </View>
    </View>
  );
}
