import { Text, TouchableOpacity } from 'react-native';
import { useAppTheme } from '../../../theme/theme.provider';
import * as styles from './styles'

interface FilledButtonProps {
  text: string,
  onPress: () => void;
}

export default function FilledButton({
  text,
  onPress
}: FilledButtonProps) {
  const {theme, themed} = useAppTheme();

  return (
    <TouchableOpacity onPress={onPress} style={themed(styles.buttonContainer)}>
      <Text style={themed(styles.buttonText)}>{text}</Text>
    </TouchableOpacity>
  );
}