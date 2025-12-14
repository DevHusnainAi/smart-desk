import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";

interface UserProfileCardProps {
  name: string;
  membershipType: string;
  avatarUrl?: string;
  isOnline: boolean;
}

export function UserProfileCard({
  name,
  membershipType,
  avatarUrl,
  isOnline,
}: UserProfileCardProps) {
  return (
    <View className="bg-surface p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-white/5">
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-4">
          {/* Avatar with status indicator */}
          <View className="relative">
            <View className="w-14 h-14 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-[#112117] overflow-hidden">
              {avatarUrl ? (
                <Image source={{ uri: avatarUrl }} className="w-full h-full" />
              ) : (
                <View className="w-full h-full items-center justify-center">
                  <MaterialIcons name="person" size={32} color="#64748b" />
                </View>
              )}
            </View>
            {isOnline && (
              <View className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-[#19e66b] border-2 border-white dark:border-[#112117]" />
            )}
          </View>

          {/* Name and membership */}
          <View>
            <Text className="text-lg font-bold text-textPrimary">
              {name}
            </Text>
            <Text className="text-sm font-medium text-[#4e976b] dark:text-[#8abf9e]">
              {membershipType}
            </Text>
          </View>
        </View>

        {/* Online status pill */}
        {isOnline && (
          <View className="flex-row items-center gap-1.5 px-3 py-1 bg-[#19e66b]/10 dark:bg-[#19e66b]/20 rounded-full">
            <View className="h-2 w-2 rounded-full bg-[#19e66b] animate-pulse" />
            <Text className="text-[#19e66b] text-xs font-bold uppercase tracking-wide">
              Online
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}
