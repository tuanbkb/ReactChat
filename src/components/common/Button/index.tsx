import { Text, TouchableOpacity } from 'react-native';
import { useAppTheme } from '../../../theme/theme.provider';
import * as styles from './styles';

interface ButtonProps {
  text: string;
  onPress: () => void;
  style?: 'filled' | 'outlined';
  fillMaxWidth?: boolean;
}

export default function Button({
  text,
  onPress,
  style = 'filled',
  fillMaxWidth = false,
}: ButtonProps) {
  const { themed } = useAppTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        style === 'filled'
          ? themed(styles.filledButtonContainer)
          : themed(styles.outlinedButtonContainer),
        fillMaxWidth && themed(styles.fillMaxWidth)
      ]}
    >
      <Text
        style={
          style === 'filled'
            ? themed(styles.filledButtonText)
            : themed(styles.outlinedButtonText)
        }
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
