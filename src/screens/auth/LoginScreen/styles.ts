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

export const title: ThemedStyle<TextStyle> = ({colors, fontSizes}) => ({
  color: colors.onBackground,
  fontSize: fontSizes.headlineLarge,
  fontWeight: 'bold',
  textAlign: 'center',
});

export const inputContainer: ThemedStyle<ViewStyle> = ({spacing}) => ({
  gap: spacing.xxs,
  marginVertical: spacing.xs,
});

export const inputLabel: ThemedStyle<TextStyle> = ({colors, fontSizes}) => ({
  color: colors.onBackground,
  fontSize: fontSizes.labelLarge,
  fontWeight: 'bold',
});

export const divider: ThemedStyle<ViewStyle> = ({spacing}) => ({
  marginVertical: spacing.xs,
});