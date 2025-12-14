import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Switch, Text, View } from "react-native";

interface HeightControlProps {
  warnHeight: number;
  warningEnabled: boolean;
  onWarnHeightChange: (val: number) => void; // Placeholder for future slider
  onWarningToggle: (val: boolean) => void;
}

export function HeightControl({
  warnHeight,
  warningEnabled,
  onWarnHeightChange,
  onWarningToggle,
}: HeightControlProps) {
  return (
    <View className="bg-surface rounded-2xl shadow-sm overflow-hidden border border-border">
      {/* Warn Height Slider */}
      <View className="p-5 border-b border-slate-100 dark:border-slate-800 gap-4">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-3">
            <View className="items-center justify-center w-8 h-8 rounded-full bg-orange-500/10">
              <MaterialIcons name="height" size={18} color="#f97316" />
            </View>
            <Text className="text-base font-semibold text-slate-800 dark:text-slate-200">
              Warn Height
            </Text>
          </View>
          <Text className="text-xl font-bold text-[#19e66b]">
            {warnHeight}
            <Text className="text-sm font-medium text-slate-400 ml-1">cm</Text>
          </Text>
        </View>
        {/* Visual Slider Simulation */}
        <View className="relative w-full h-8 justify-center">
          <View className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
            <View
              className="h-full bg-[#19e66b]"
              style={{ width: `${((warnHeight - 60) / (130 - 60)) * 100}%` }}
            />
          </View>
          <View
            className="absolute h-6 w-6 bg-white border-2 border-[#19e66b] rounded-full shadow-md items-center justify-center"
            style={{
              left: `${((warnHeight - 60) / (130 - 60)) * 100}%`,
              marginLeft: -12,
            }}
          >
            <View className="w-1.5 h-1.5 bg-[#19e66b] rounded-full" />
          </View>
        </View>
      </View>

      {/* Warning Toggle */}
      <View className="flex-row items-center justify-between p-4">
        <View className="flex-row items-center gap-3">
          <View className="items-center justify-center w-8 h-8 rounded-full bg-red-500/10">
            <MaterialIcons
              name="notifications-active"
              size={18}
              color="#ef4444"
            />
          </View>
          <View>
            <Text className="text-base font-semibold text-slate-800 dark:text-slate-200">
              Warning
            </Text>
            <Text className="text-xs text-slate-400 dark:text-slate-500">
              Alert when height exceeded
            </Text>
          </View>
        </View>
        <Switch
          value={warningEnabled}
          onValueChange={onWarningToggle}
          trackColor={{ false: "#e2e8f0", true: "#19e66b" }}
          thumbColor={"#ffffff"}
        />
      </View>
    </View>
  );
}
