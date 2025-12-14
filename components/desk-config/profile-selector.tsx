import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export type Profile = "Bank" | "Home" | "Gaming";

interface ProfileSelectorProps {
  activeProfile: Profile;
  onSelect: (profile: Profile) => void;
}

export function ProfileSelector({
  activeProfile,
  onSelect,
}: ProfileSelectorProps) {
  const renderProfileChip = (
    profile: Profile,
    icon: keyof typeof MaterialIcons.glyphMap
  ) => {
    const isActive = activeProfile === profile;
    return (
      <TouchableOpacity
        onPress={() => onSelect(profile)}
        className={`flex-row items-center justify-center h-10 px-5 rounded-full gap-2 border ${
          isActive
            ? "bg-[#19e66b] border-[#19e66b] shadow-lg shadow-[#19e66b]/20"
            : "bg-surface border-slate-100 dark:border-slate-800"
        } active:scale-95 transition-transform`}
      >
        <MaterialIcons
          name={icon}
          size={18}
          color={isActive ? "white" : "#64748b"}
        />
        <Text
          className={`text-sm font-bold ${
            isActive ? "text-white" : "text-slate-600 dark:text-slate-300"
          }`}
        >
          {profile}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View className="mb-6">
      <View className="flex-row items-center justify-between mb-3 px-1">
        <Text className="text-textPrimary text-sm font-bold uppercase tracking-wider opacity-70">
          Active Profile
        </Text>
        <MaterialIcons name="edit" size={14} color="#19e66b" />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row gap-3 pb-1"
      >
        {renderProfileChip("Bank", "account-balance")}
        {renderProfileChip("Home", "home-work")}
        {renderProfileChip("Gaming", "sports-esports")}
      </ScrollView>
    </View>
  );
}
