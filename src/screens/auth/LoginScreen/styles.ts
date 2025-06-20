import { TextStyle, ViewStyle } from "react-native";
import { ThemedStyle } from "../../../theme";

export const container: ThemedStyle<ViewStyle> = ({colors, spacing}) => ({
  flex: 1,
  backgroundColor: colors.background,
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.lg,
  justifyContent: 'center',
});

export const text: ThemedStyle<TextStyle> = ({colors, fontSizes}) => ({
  color: colors.onBackground,
  fontSize: fontSizes.bodyMedium
});

export const inputContainer: ThemedStyle<ViewStyle> = ({spacing}) => ({
  gap: spacing.xxs,
  marginVertical: spacing.xs,
});

export const inputLabel: ThemedStyle<TextStyle> = ({colors, fontSizes, spacing}) => ({
  marginLeft: spacing.lg,
  color: colors.onBackground,
  fontSize: fontSizes.labelLarge,
  fontWeight: 'bold',
});

export const divider: ThemedStyle<ViewStyle> = ({spacing}) => ({
  marginVertical: spacing.xs,
});

export const forgotPasswordContainer: ThemedStyle<ViewStyle> = () => ({
  flexDirection: 'row',
  justifyContent: 'center',
});

export const forgotPasswordText: ThemedStyle<TextStyle> = ({colors, fontSizes}) => ({
  color: colors.outline,
  fontSize: fontSizes.labelLarge,
  fontStyle: 'italic',
});

export const forgotPasswordLink: ThemedStyle<TextStyle> = ({colors, fontSizes}) => ({
  color: colors.primary,
  fontSize: fontSizes.labelLarge,
  fontWeight: 'bold',
});
