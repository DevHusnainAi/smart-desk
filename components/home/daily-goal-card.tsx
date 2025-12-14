import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

interface DailyGoalCardProps {
  current: number;
  target: number;
}

export function DailyGoalCard({ current, target }: DailyGoalCardProps) {
  const percentage = Math.round((current / target) * 100);
  const remaining = Math.max(0, target - current);

  return (
    <View className="bg-white rounded-[24px] p-6 mb-8 shadow-md shadow-gray-200 border border-gray-100">
      <View className="flex-row items-center justify-between mb-4">
        <View>
          <Text className="text-lg font-bold text-slate-900">Daily Goal</Text>
          <Text className="text-sm text-slate-500">
            {current} of {target} hours stood
          </Text>
        </View>
        <View className="bg-green-50 px-3 py-1.5 rounded-full border border-green-100 flex-row items-center gap-1">
          <MaterialIcons name="trending-up" size={16} color="#15803d" />
          <Text className="text-sm font-bold text-green-700">
            {percentage}%
          </Text>
        </View>
      </View>

      <View className="h-5 bg-gray-100 rounded-full overflow-hidden mb-4 relative">
        {/* Progress Bar Background */}
        <View className="absolute inset-0 w-full h-full bg-gray-100" />
        {/* Progress Bar Fill */}
        <View
          className="h-full bg-[#19e66b] rounded-full shadow-sm"
          style={{ width: `${percentage}%` }}
        />
        {/* Shine Effect */}
        <View
          className="absolute top-0 right-0 bottom-0 border-r border-white/20"
          style={{ width: `${percentage}%` }}
        />
      </View>

      <Text className="text-xs font-medium text-slate-400 text-center bg-gray-50 py-3 rounded-xl overflow-hidden">
        🎉 You're crushing it! Just{" "}
        <Text className="text-slate-900 font-bold">{remaining} more hours</Text>{" "}
        to reach your goal.
      </Text>
    </View>
  );
}
