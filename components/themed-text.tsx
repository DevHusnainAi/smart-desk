import { Text, type TextProps } from "react-native";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({
  lightColor,
  darkColor,
  type = "default",
  className = "",
  ...rest
}: ThemedTextProps) {
  // Always use light theme
  const customStyle = lightColor ? { color: lightColor } : undefined;

  // Default text styles for light theme
  let defaultClassName = "text-textPrimary";

  switch (type) {
    case "title":
      defaultClassName = "text-3xl font-bold text-textPrimary";
      break;
    case "defaultSemiBold":
      defaultClassName = "text-base font-semibold text-textPrimary";
      break;
    case "subtitle":
      defaultClassName = "text-lg font-medium text-textSecondary";
      break;
    case "link":
      defaultClassName = "text-base text-primary";
      break;
  }

  return (
    <Text
      className={`${defaultClassName} ${className}`.trim()}
      style={customStyle}
      {...rest}
    />
  );
}
