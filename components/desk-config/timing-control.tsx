import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface TimingControlProps {
  label: string;
  value: number;
  onChange: (val: number) => void;
  icon: keyof typeof MaterialIcons.glyphMap;
  iconBgColor: string;
  iconColor: string;
}

export function TimingControl({
  label,
  value,
  onChange,
  icon,
  iconBgColor,
  iconColor,
}: TimingControlProps) {
  return (
    <View className="flex-row items-center justify-between p-4 border-b border-slate-100 dark:border-slate-800 last:border-b-0">
      <View className="flex-row items-center gap-3">
        <View
          className={`flex items-center justify-center w-8 h-8 rounded-full ${iconBgColor}`}
        >
          <MaterialIcons name={icon} size={18} color={iconColor} />
        </View>
        <Text className="text-base font-semibold text-slate-800 dark:text-slate-200">
          {label}
        </Text>
      </View>
      <View className="flex-row items-center gap-2 bg-slate-50 dark:bg-black/20 rounded-lg p-1">
        <TouchableOpacity
          onPress={() => onChange(Math.max(0, value - 1))}
          className="w-8 h-8 items-center justify-center rounded-md bg-white dark:bg-slate-700 shadow-sm"
        >
          <MaterialIcons name="remove" size={18} color="#475569" />
        </TouchableOpacity>
        <Text className="text-base font-bold w-8 text-center text-textPrimary">
          {value}
        </Text>
        <TouchableOpacity
          onPress={() => onChange(value + 1)}
          className="w-8 h-8 items-center justify-center rounded-md bg-white dark:bg-slate-700 shadow-sm"
        >
          <MaterialIcons name="add" size={18} color="#475569" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
