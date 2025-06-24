import { TextStyle, ViewStyle } from "react-native";
import { ThemedStyle } from "../../../theme";

export const container: ThemedStyle<ViewStyle> = ({colors, spacing}) => ({
  flex: 1,
  backgroundColor: colors.background,
  paddingVertical: spacing.md,
  paddingHorizontal: spacing.lg,
  justifyContent: 'center',
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

export const error: ThemedStyle<TextStyle> = ({colors, fontSizes}) => ({
  color: colors.error,
  fontSize: fontSizes.labelLarge,
  fontStyle: 'italic',
  textAlign: 'center',
});

export const loadingOverlay: ThemedStyle<ViewStyle> = () => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
});