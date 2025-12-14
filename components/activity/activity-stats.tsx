import React from 'react';
import { Text, View } from 'react-native';

interface ActivityStatsProps {
  standingMinutes: number;
  sittingMinutes: number;
  standingGoal: number;
  nextNudgeMinutes: number;
}

export function ActivityStats({
  standingMinutes,
  sittingMinutes,
  standingGoal,
  nextNudgeMinutes,
}: ActivityStatsProps) {
  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <View className="flex-row gap-3">
      {/* Standing */}
      <View className="flex-1 bg-surface rounded-2xl p-4 shadow-sm border border-border">
        <View className="flex-row items-center gap-2 mb-2">
          <View className="h-2 w-2 rounded-full bg-[#19e66b]" />
          <Text className="text-xs font-semibold text-slate-400 uppercase">
            Standing
          </Text>
        </View>
        <Text className="text-2xl font-bold text-textPrimary">
          {formatTime(standingMinutes)}
        </Text>
        <Text className="text-xs text-[#4e976b] dark:text-[#8abf9e] mt-1">
          Goal: {standingGoal} min
        </Text>
      </View>

      {/* Sitting */}
      <View className="flex-1 bg-surface rounded-2xl p-4 shadow-sm border border-border">
        <View className="flex-row items-center gap-2 mb-2">
          <View className="h-2 w-2 rounded-full bg-orange-500" />
          <Text className="text-xs font-semibold text-slate-400 uppercase">
            Sitting
          </Text>
        </View>
        <Text className="text-2xl font-bold text-textPrimary">
          {formatTime(sittingMinutes)}
        </Text>
        <Text className="text-xs text-orange-500 dark:text-orange-400 mt-1">
          Next: {nextNudgeMinutes} mins
        </Text>
      </View>
    </View>
  );
}
