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
  padding: spacing.xxxs,
  paddingHorizontal: spacing.md,
  borderRadius: spacing.xl,
  borderWidth: spacing.xxxxs,
  borderColor: colors.outline,
  flexDirection: 'row',
  alignItems: 'center',
  gap: spacing.sm,
});

export const errorContainer: ThemedStyle<ViewStyle> = ({colors, spacing}) => ({
  borderColor: colors.error,
  borderWidth: spacing.xxxs,
});

export const focusedContainer: ThemedStyle<ViewStyle> = ({colors, spacing}) => ({
  borderColor: colors.primary,
  borderWidth: spacing.xxxs,
});

export const textInput: ThemedStyle<TextStyle> = ({colors, fontSizes}) => ({
  fontSize: fontSizes.bodyMedium,
  color: colors.onBackground,
  flex: 1,
});

export const errorText: ThemedStyle<TextStyle> = ({colors, fontSizes, spacing}) => ({
  fontSize: fontSizes.labelSmall,
  color: colors.error,
  marginLeft: spacing.lg,
});