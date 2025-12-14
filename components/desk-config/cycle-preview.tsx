import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

interface CyclePreviewProps {
  startStandTime: number;
  constantTime: number;
}

export function CyclePreview({
  startStandTime,
  constantTime,
}: CyclePreviewProps) {
  return (
    <View className="bg-surface rounded-2xl p-5 shadow-sm border border-border mb-6">
      <View className="flex-row justify-between items-end mb-4">
        <View>
          <Text className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
            Cycle Preview
          </Text>
          <Text className="text-xl font-bold text-textPrimary mt-1">
            <Text className="text-[#19e66b]">{startStandTime}m</Text> Stand /{" "}
            {constantTime - startStandTime}m Sit
          </Text>
        </View>
        <View className="bg-[#19e66b]/10 rounded-lg p-1.5">
          <MaterialIcons name="timelapse" size={20} color="#19e66b" />
        </View>
      </View>
      {/* Visual Bar */}
      <View className="h-8 w-full flex-row rounded-lg overflow-hidden relative">
        <View
          className="bg-[#19e66b] items-center justify-center relative"
          style={{ width: "33%" }}
        >
          <Text className="text-[10px] font-bold text-white z-10">STAND</Text>
        </View>
        <View
          className="bg-slate-200 dark:bg-slate-700 items-center justify-center relative"
          style={{ width: "67%" }}
        >
          <Text className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
            SIT
          </Text>
        </View>
      </View>
      <View className="flex-row justify-between mt-2 px-1">
        <Text className="text-xs text-slate-400 font-medium">0m</Text>
        <Text className="text-xs text-slate-400 font-medium">
          {startStandTime}m
        </Text>
        <Text className="text-xs text-slate-400 font-medium">
          {constantTime}m
        </Text>
      </View>
    </View>
  );
}
