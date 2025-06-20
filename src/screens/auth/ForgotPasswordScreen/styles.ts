import { TextStyle, ViewStyle } from "react-native";
import { ThemedStyle } from "../../../theme";

export const container: ThemedStyle<ViewStyle> = ({colors, spacing}) => ({
  flex: 1,
  backgroundColor: colors.background,
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.lg,
  justifyContent: 'center',
  alignItems: 'center',
});

export const title: ThemedStyle<TextStyle> = ({colors, fontSizes}) => ({
  fontSize: fontSizes.headlineMedium,
  fontWeight: 'bold',
  color: colors.onSurface,
});

export const subtitle: ThemedStyle<TextStyle> = ({colors, fontSizes}) => ({
  fontSize: fontSizes.labelLarge,
  color: colors.onSurfaceVariant,
  fontStyle: 'italic',
});

export const divider: ThemedStyle<ViewStyle> = ({spacing}) => ({
  height: spacing.md,
});

export const inputContainer: ThemedStyle<ViewStyle> = ({spacing}) => ({
  gap: spacing.xxs,
  marginVertical: spacing.xs,
  width: '100%',
});

export const inputLabel: ThemedStyle<TextStyle> = ({colors, fontSizes, spacing}) => ({
  color: colors.onBackground,
  fontSize: fontSizes.labelLarge,
  fontWeight: 'bold',
  marginLeft: spacing.lg,
});