import { TextStyle, ViewStyle } from "react-native";
import { ThemedStyle } from "../../../theme";

export const overlay: ThemedStyle<ViewStyle> = ({spacing}) => ({
  borderWidth: spacing.xxxs,
  borderColor: 'transparent',
});

export const overlayFocused: ThemedStyle<ViewStyle> = ({spacing}) => ({
  borderWidth: spacing.xxxxs,
  borderColor: 'transparent',
});

export const container: ThemedStyle<ViewStyle> = ({colors, spacing}) => ({
  padding: spacing.md,
  borderRadius: spacing.xl,
  borderWidth: spacing.xxxxs,
  borderColor: colors.outline,
});

export const focusedContainer: ThemedStyle<ViewStyle> = ({colors, spacing}) => ({
  borderColor: colors.primary,
  borderWidth: spacing.xxxs,
});

export const textInput: ThemedStyle<TextStyle> = ({colors, fontSizes, spacing}) => ({
  fontSize: fontSizes.bodyMedium,
  color: colors.onBackground,
  paddingVertical: spacing.sm,
});