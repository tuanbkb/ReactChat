import { TextStyle, ViewStyle } from 'react-native';
import { ThemedStyle } from '../../../theme';

export const buttonContainer: ThemedStyle<ViewStyle> = ({colors, spacing}) => ({
  flexDirection: 'row',
  justifyContent: 'center',
  backgroundColor: colors.primary,
  padding: spacing.sm,
  borderRadius: spacing.xl,
});

export const buttonText: ThemedStyle<TextStyle> = ({colors, fontSizes}) => ({
  fontSize: fontSizes.bodyMedium,
  fontWeight: 'bold',
  color: colors.onPrimary
});

export const fillMaxWidth: ThemedStyle<ViewStyle> = () => ({
  width: '100%'
})
