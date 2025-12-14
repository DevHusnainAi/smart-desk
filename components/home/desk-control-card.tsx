import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface DeskControlCardProps {
  title: string;
  icon: React.ComponentProps<typeof MaterialIcons>["name"];
  isActive?: boolean;
  onPress: () => void;
  type: "standing" | "sitting";
}

export function DeskControlCard({
  title,
  icon,
  isActive = false,
  onPress,
  type,
}: DeskControlCardProps) {
  const isStanding = type === "standing";
  const bgIconColor = isStanding ? "bg-green-50" : "bg-orange-50";
  const borderIconColor = isStanding ? "border-green-100" : "border-orange-100";
  const iconColor = isStanding ? "#19e66b" : "#f97316";

  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 active:scale-[0.98] transition-transform"
    >
      <View
        className={`w-14 h-14 rounded-2xl ${bgIconColor} items-center justify-center mb-4 border ${borderIconColor}`}
      >
        <MaterialIcons name={icon} size={28} color={iconColor} />
      </View>
      <Text className="text-lg font-bold text-slate-900 mb-1">{title}</Text>
      {isActive ? (
        <View className="flex-row items-center gap-1">
          <View className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <Text className="text-xs text-green-600 font-bold uppercase tracking-wide">
            Active
          </Text>
        </View>
      ) : (
        <Text className="text-xs text-slate-400 font-bold uppercase tracking-wide">
          Default
        </Text>
      )}
    </TouchableOpacity>
  );
}
