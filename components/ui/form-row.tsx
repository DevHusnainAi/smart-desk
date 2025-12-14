import React from "react";
import { Text, TextInput, View } from "react-native";

interface FormRowProps {
  label: string;
  value: string | number;
  onChangeText?: (text: string) => void;
  suffix?: string;
  editable?: boolean;
}

export function FormRow({
  label,
  value,
  onChangeText,
  suffix = "",
  editable = true,
}: FormRowProps) {
  return (
    <View className="flex-row items-center justify-between py-4 border-b border-gray-200">
      <Text className="text-base text-textPrimary font-medium flex-1">
        {label}
      </Text>
      <View className="flex-row items-center gap-2">
        {editable ? (
          <TextInput
            value={String(value)}
            onChangeText={onChangeText}
            keyboardType="numeric"
            className="bg-gray-100 px-4 py-2 rounded-lg text-textPrimary font-semibold min-w-[80px] text-right"
          />
        ) : (
          <View className="bg-gray-100 px-4 py-2 rounded-lg min-w-[80px]">
            <Text className="text-textPrimary font-semibold text-right">
              {value}
            </Text>
          </View>
        )}
        {suffix && (
          <Text className="text-textSecondary text-sm w-12">{suffix}</Text>
        )}
      </View>
    </View>
  );
}
