import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface TabToggleProps {
  leftLabel: string;
  rightLabel: string;
  activeTab: "left" | "right";
  onTabChange: (tab: "left" | "right") => void;
  className?: string; // Keep for container custom classes
}

export function TabToggle({
  leftLabel,
  rightLabel,
  activeTab,
  onTabChange,
  className = "",
}: TabToggleProps) {
  return (
    <View className={`flex-row bg-gray-100 rounded-lg p-1 ${className}`}>
      <TouchableOpacity
        onPress={() => onTabChange("left")}
        style={{
          flex: 1,
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 6,
          backgroundColor: activeTab === "left" ? "#ffffff" : "transparent",
          shadowOpacity: activeTab === "left" ? 0.05 : 0,
          elevation: activeTab === "left" ? 1 : 0, // simple native shadow
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 14,
            fontWeight: "600",
            color: activeTab === "left" ? "#0f172a" : "#64748b",
          }}
        >
          {leftLabel}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onTabChange("right")}
        style={{
          flex: 1,
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 6,
          backgroundColor: activeTab === "right" ? "#ffffff" : "transparent",
          shadowOpacity: activeTab === "right" ? 0.05 : 0,
          elevation: activeTab === "right" ? 1 : 0,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 14,
            fontWeight: "600",
            color: activeTab === "right" ? "#0f172a" : "#64748b",
          }}
        >
          {rightLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
