import { TextStyle, ViewStyle } from 'react-native';
import { ThemedStyle } from '../../../theme';

export const filledButtonContainer: ThemedStyle<ViewStyle> = ({colors, spacing}) => ({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: colors.primary,
  padding: spacing.sm,
  borderRadius: spacing.xl,
  borderWidth: spacing.xxxs,
  borderColor: 'transparent'
});

export const filledButtonText: ThemedStyle<TextStyle> = ({colors, fontSizes}) => ({
  fontSize: fontSizes.bodyMedium,
  fontWeight: 'bold',
  color: colors.onPrimary,
});

export const outlinedButtonContainer: ThemedStyle<ViewStyle> = ({colors, spacing}) => ({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  padding: spacing.sm,
  borderRadius: spacing.xl,
  borderWidth: spacing.xxxs,
  borderColor: colors.outlineVariant
});

export const outlinedButtonText: ThemedStyle<TextStyle> = ({colors, fontSizes}) => ({
  fontSize: fontSizes.bodyMedium,
  fontWeight: 'bold',
  color: colors.onSurfaceVariant,
});

export const fillMaxWidth: ThemedStyle<ViewStyle> = () => ({
  width: '100%'
});
