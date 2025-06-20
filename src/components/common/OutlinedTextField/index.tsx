import React, { useState } from "react";
import { TextInput, View } from "react-native";
import * as styles from "./styles"
import { useAppTheme } from "../../../theme/theme.provider";

interface OutlinedTextFieldProps {
  value: string,
  onChangeText: (value: string) => void,
  placeholder?: string,
  multiline?: boolean,
  numberOfLines?: number,
  editable?: boolean
}

export default function OutlinedTextField({
  value,
  onChangeText,
  placeholder,
  multiline,
  numberOfLines,
  editable
}: OutlinedTextFieldProps) {
  const {themed} = useAppTheme();
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={isFocused ? themed(styles.overlayFocused) : themed(styles.overlay)}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        multiline={multiline}
        numberOfLines={numberOfLines}
        editable={editable}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={[
          themed(styles.container),
          themed(styles.textInput),
          isFocused && themed(styles.focusedContainer),
        ]}
      />
    </View>
  );
}