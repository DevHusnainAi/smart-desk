import { View, type ViewProps } from "react-native";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedView({
  lightColor,
  darkColor,
  className = "",
  ...otherProps
}: ThemedViewProps) {
  // Always use light theme - ignore dark colors
  const customStyle = lightColor ? { backgroundColor: lightColor } : undefined;

  return <View className={className} style={customStyle} {...otherProps} />;
}
