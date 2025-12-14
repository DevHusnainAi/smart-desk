import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Switch, Text, View } from "react-native";

export interface ConnectionMethod {
  id: string;
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  status: string;
  isEnabled: boolean;
  iconColor: string;
  iconBgColor: string;
}

interface ConnectionMethodItemProps {
  method: ConnectionMethod;
  onToggle: (id: string, enabled: boolean) => void;
}

export function ConnectionMethodItem({
  method,
  onToggle,
}: ConnectionMethodItemProps) {
  const isDisabled = !method.isEnabled && method.status === "Not Connected";

  return (
    <View
      className={`flex-row items-center gap-4 bg-surface px-4 py-4 rounded-xl shadow-sm border border-slate-100 dark:border-white/5 ${
        isDisabled ? "opacity-80" : ""
      }`}
    >
      {/* Icon */}
      <View
        className={`flex items-center justify-center rounded-full shrink-0 w-12 h-12 ${method.iconBgColor}`}
      >
        <MaterialIcons name={method.icon} size={24} color={method.iconColor} />
      </View>

      {/* Name and status */}
      <View className="flex-1 min-w-0">
        <Text
          className={`text-base font-bold truncate ${
            isDisabled
              ? "text-gray-500 dark:text-gray-400"
              : "text-textPrimary"
          }`}
        >
          {method.name}
        </Text>
        <Text
          className={`text-xs font-medium truncate ${
            isDisabled
              ? "text-gray-400 dark:text-gray-600"
              : "text-[#4e976b] dark:text-[#8abf9e]"
          }`}
        >
          {method.status}
        </Text>
      </View>

      {/* Toggle */}
      <View className="shrink-0">
        <Switch
          value={method.isEnabled}
          onValueChange={(enabled) => onToggle(method.id, enabled)}
          trackColor={{ false: "#e2e8f0", true: "#19e66b" }}
          thumbColor={"#ffffff"}
        />
      </View>
    </View>
  );
}
