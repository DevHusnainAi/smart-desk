import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface DeviceCardProps {
  deviceName: string;
  deviceImage?: string;
  batteryLevel: number;
  isConnected: boolean;
  lastSynced: string;
  onSync: () => void;
}

export function DeviceCard({
  deviceName,
  deviceImage,
  batteryLevel,
  isConnected,
  lastSynced,
  onSync,
}: DeviceCardProps) {
  return (
    <View className="bg-surface rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-white/5">
      {/* Image Area */}
      <View className="relative w-full h-48 bg-gray-100 dark:bg-gray-800">
        {deviceImage ? (
          <Image
            source={{ uri: deviceImage }}
            className="w-full h-full"
            resizeMode="cover"
          />
        ) : (
          <View className="w-full h-full items-center justify-center bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
            <MaterialIcons name="desk" size={80} color="#64748b" />
          </View>
        )}

        {/* Gradient overlay */}
        <View className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

        {/* Device info overlay */}
        <View className="absolute bottom-4 left-4 right-4 flex-row justify-between items-end">
          <View>
            <Text className="text-xs font-medium text-white/80 mb-1">
              Current Device
            </Text>
            <Text className="text-2xl font-bold text-white tracking-tight">
              {deviceName}
            </Text>
          </View>

          {/* Battery indicator */}
          <View className="bg-white/20 backdrop-blur-md rounded-lg px-2 py-1 flex-row items-center gap-1">
            <MaterialIcons name="battery-full" size={14} color="#19e66b" />
            <Text className="text-xs font-bold text-white">
              {batteryLevel}%
            </Text>
          </View>
        </View>
      </View>

      {/* Controls Area */}
      <View className="p-5 gap-4">
        {/* Connection status */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <View
              className={`h-2.5 w-2.5 rounded-full ${
                isConnected ? "bg-[#19e66b]" : "bg-gray-400"
              }`}
            />
            <Text className="text-[#4e976b] dark:text-[#8abf9e] text-sm font-medium">
              {isConnected
                ? `Connected • Last synced: ${lastSynced}`
                : "Disconnected"}
            </Text>
          </View>
        </View>

        {/* Sync button */}
        <TouchableOpacity
          onPress={onSync}
          className="w-full flex-row items-center justify-center gap-2 h-12 bg-[#19e66b] hover:bg-green-400 rounded-xl active:scale-[0.98]"
        >
          <MaterialIcons name="sync" size={20} color="#000000" />
          <Text className="text-black text-base font-bold">Sync Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
