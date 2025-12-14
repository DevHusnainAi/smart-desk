import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface QuickControlsProps {
  onUp: () => void;
  onDown: () => void;
  onPreset: () => void;
}

export function QuickControls({ onUp, onDown, onPreset }: QuickControlsProps) {
  return (
    <View className="bg-surface rounded-2xl p-4 shadow-sm border border-border">
      <View className="flex-row items-center justify-between mb-3">
        <Text className="text-base font-bold text-textPrimary">
          Quick Controls
        </Text>
        <Text className="text-sm text-[#4e976b] dark:text-[#8abf9e] font-medium">
          Height: 74cm
        </Text>
      </View>

      <View className="flex-row gap-3">
        {/* Up Button */}
        <TouchableOpacity
          onPress={onUp}
          className="flex-1 aspect-square items-center justify-center gap-2 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 active:scale-95"
        >
          <MaterialIcons name="arrow-upward" size={24} color="#64748b" />
          <Text className="text-sm font-bold text-slate-600 dark:text-slate-300">
            Up
          </Text>
        </TouchableOpacity>

        {/* Down Button */}
        <TouchableOpacity
          onPress={onDown}
          className="flex-1 aspect-square items-center justify-center gap-2 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 active:scale-95"
        >
          <MaterialIcons name="arrow-downward" size={24} color="#64748b" />
          <Text className="text-sm font-bold text-slate-600 dark:text-slate-300">
            Down
          </Text>
        </TouchableOpacity>

        {/* Preset Button */}
        <TouchableOpacity
          onPress={onPreset}
          className="flex-1 aspect-square items-center justify-center gap-2 bg-[#19e66b] rounded-xl active:scale-95  shadow-lg shadow-[#19e66b]/20"
        >
          <MaterialIcons name="bookmark" size={24} color="#000000" />
          <Text className="text-sm font-bold text-black">Preset 1</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
