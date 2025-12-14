import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

export function QuickTipCard() {
  return (
    <View className="bg-blue-50 rounded-[24px] p-6 mb-8 border border-blue-100 flex-row gap-5 items-center">
      <View className="w-12 h-12 rounded-2xl bg-white items-center justify-center shadow-sm">
        <MaterialIcons name="lightbulb" size={24} color="#3b82f6" />
      </View>
      <View className="flex-1">
        <Text className="text-sm font-bold text-blue-900 mb-1">
          Did you know?
        </Text>
        <Text className="text-xs text-blue-700 leading-5">
          Changing posture every 30 minutes improves focus and energy levels by
          up to 40%.
        </Text>
      </View>
    </View>
  );
}
