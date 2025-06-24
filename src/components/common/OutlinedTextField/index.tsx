import React, { useState, forwardRef } from 'react';
import { KeyboardTypeOptions, Pressable, ReturnKeyTypeOptions, SubmitBehavior, Text, TextInput, View } from 'react-native';
import * as styles from './styles';
import { useAppTheme } from '../../../theme/theme.provider';
import Icon from '@react-native-vector-icons/ionicons';

interface OutlinedTextFieldProps {
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  multiline?: boolean;
  numberOfLines?: number;
  editable?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  returnKeyType?: ReturnKeyTypeOptions;
  leadingIconName?: string;
  error?: string | null;
  setError?: (error: string | null) => void;
  submitBehavior?: SubmitBehavior | undefined;
  onSubmitEditing?: () => void;
}

const OutlinedTextField = forwardRef<TextInput, OutlinedTextFieldProps>(
  (
    {
      value,
      onChangeText,
      placeholder,
      multiline,
      numberOfLines,
      editable,
      secureTextEntry,
      keyboardType,
      returnKeyType,
      leadingIconName,
      error,
      setError,
      submitBehavior,
      onSubmitEditing,
    },
    ref
  ) => {
    const { theme, themed } = useAppTheme();
    const [isFocused, setIsFocused] = useState(false);
    const [isSecureTextEntry, setIsSecureTextEntry] = useState<boolean>(true);

    const handleFocus = () => {
      setIsFocused(true);
    };

    const handleBlur = () => {
      setIsFocused(false);
    };

    return (
      <View
        style={isFocused ? themed(styles.overlayFocused) : themed(styles.overlay)}
      >
        <View
          style={[
            themed(styles.container),
            isFocused && themed(styles.focusedContainer),
            error && themed(styles.errorContainer),
          ]}
        >
          {leadingIconName && (
            <Icon
              name={leadingIconName as any}
              size={24}
              color={theme.colors.onSurfaceVariant}
            />
          )}
          <TextInput
            ref={ref}
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={theme.colors.onSurfaceVariant}
            multiline={multiline}
            numberOfLines={numberOfLines}
            editable={editable}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={themed(styles.textInput)}
            secureTextEntry={secureTextEntry && isSecureTextEntry}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            onPress={() => setError?.(null)}
            submitBehavior={submitBehavior}
            onSubmitEditing={onSubmitEditing}
          />

          {secureTextEntry && (
            <Pressable onPress={() => setIsSecureTextEntry(!isSecureTextEntry)}>
              <Icon
                name={isSecureTextEntry ? 'eye-off' : 'eye'}
                size={24}
                color={theme.colors.onSurfaceVariant}
              />
            </Pressable>
          )}
        </View>
        {error && <Text style={themed(styles.errorText)}>{error}</Text>}
      </View>
    );
  }
);

export default OutlinedTextField;
