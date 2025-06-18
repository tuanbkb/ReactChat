import { Text, TouchableOpacity } from 'react-native';
import { useAppTheme } from '../../../theme/theme.provider';
import * as styles from './styles';

interface FilledButtonProps {
  text: string;
  onPress: () => void;
  fillMaxWidth?: boolean;
}

export default function FilledButton({
  text,
  onPress,
  fillMaxWidth = false,
}: FilledButtonProps) {
  const { themed } = useAppTheme();

  return (
    <TouchableOpacity onPress={onPress} style={themed(styles.buttonContainer)}>
      <Text
        style={[
          themed(styles.buttonText),
          fillMaxWidth && themed(styles.fillMaxWidth),
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
