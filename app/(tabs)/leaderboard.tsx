import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedView } from "@/components/themed-view";
import { TabToggle } from "@/components/ui/tab-toggle";

interface LeaderboardUser {
  rank: number;
  name: string;
  role: string;
  score: number;
  avatar?: string;
  change?: number;
}

const mockUsers: LeaderboardUser[] = [
  { rank: 1, name: "Sarah M.", role: "Team Lead", score: 4200 },
  {
    rank: 2,
    name: "David K.",
    role: "Software Engineer",
    score: 3850,
    change: -1,
  },
  { rank: 3, name: "Mike R.", role: "Product Manager", score: 3100 },
  { rank: 4, name: "You", role: "Software Engineer", score: 2850, change: -2 },
  { rank: 5, name: "Jessica T.", role: "Product Manager", score: 2600 },
  { rank: 6, name: "Robert L.", role: "Designer", score: 2450 },
  { rank: 7, name: "Emily W.", role: "Marketing", score: 2200 },
];

export default function LeaderboardScreen() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"left" | "right">("left");

  const topThree = mockUsers.slice(0, 3);
  const restOfUsers = mockUsers.slice(3);

  return (
    <ThemedView className="flex-1 bg-background">
      <SafeAreaView
        edges={["top"]}
        className="bg-white border-b border-gray-200"
      >
        <View className="flex-row items-center justify-between px-5 py-4">
          <Text className="text-3xl font-bold text-textPrimary">
            Leaderboard
          </Text>
          <View className="flex-row gap-3">
            <TouchableOpacity className="w-10 h-10 items-center justify-center">
              <MaterialIcons name="qr-code-scanner" size={24} color="#0f172a" />
            </TouchableOpacity>
            <TouchableOpacity
              className="w-10 h-10 items-center justify-center"
              onPress={() => router.navigate("/settings")}
            >
              <MaterialIcons name="settings" size={24} color="#0f172a" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Tab Toggle */}
        <View className="px-4 pt-4 pb-5">
          <TabToggle
            leftLabel="User"
            rightLabel="Company"
            activeTab={activeTab}
            onTabChange={setActiveTab}
          />
        </View>

        {/* Podium */}
        <View className="px-4 py-8">
          <View className="flex-row items-end justify-center gap-4 h-72">
            {/* 2nd Place - Left */}
            {topThree[1] && (
              <View className="flex-1 items-center">
                <View className="relative mb-3">
                  <View className="w-16 h-16 rounded-full bg-slate-200 border-2 border-slate-300 items-center justify-center overflow-hidden shadow-sm">
                    <MaterialIcons name="person" size={40} color="#94a3b8" />
                  </View>
                  <View className="absolute -bottom-2 -right-1 w-6 h-6 rounded-full bg-slate-500 items-center justify-center border border-white">
                    <Text className="text-white text-xs font-bold">2</Text>
                  </View>
                </View>
                <Text
                  className="text-sm font-bold text-textPrimary mb-0.5"
                  numberOfLines={1}
                >
                  {topThree[1].name}
                </Text>
                <Text className="text-sm font-bold text-primary mb-2">
                  {topThree[1].score.toLocaleString()}
                </Text>
                <View className="bg-slate-100 w-full h-32 rounded-t-lg items-center pt-4 border-t border-slate-200 shadow-sm">
                  <Text className="text-4xl font-bold text-slate-300 opacity-50">
                    2
                  </Text>
                </View>
              </View>
            )}

            {/* 1st Place - Center */}
            {topThree[0] && (
              <View className="flex-1 items-center z-10">
                <View className="relative mb-3">
                  <View className="absolute -top-6">
                    <MaterialIcons
                      name="emoji-events"
                      size={24}
                      color="#eab308"
                    />
                  </View>
                  <View className="w-20 h-20 rounded-full bg-yellow-100 border-2 border-yellow-400 items-center justify-center overflow-hidden shadow-sm">
                    <MaterialIcons name="person" size={50} color="#eab308" />
                  </View>
                  <View className="absolute -bottom-2 -right-1 w-7 h-7 rounded-full bg-yellow-500 items-center justify-center border-2 border-white">
                    <Text className="text-white text-sm font-bold">1</Text>
                  </View>
                </View>
                <Text
                  className="text-base font-bold text-textPrimary mb-0.5"
                  numberOfLines={1}
                >
                  {topThree[0].name}
                </Text>
                <Text className="text-lg font-bold text-primary mb-2">
                  {topThree[0].score.toLocaleString()}
                </Text>
                <View className="bg-yellow-50 w-full h-40 rounded-t-lg items-center pt-4 border-t border-yellow-200 shadow-md">
                  <Text className="text-5xl font-bold text-yellow-300 opacity-50">
                    1
                  </Text>
                </View>
              </View>
            )}

            {/* 3rd Place - Right */}
            {topThree[2] && (
              <View className="flex-1 items-center">
                <View className="relative mb-3">
                  <View className="w-16 h-16 rounded-full bg-orange-100 border-2 border-orange-300 items-center justify-center overflow-hidden shadow-sm">
                    <MaterialIcons name="person" size={40} color="#fb923c" />
                  </View>
                  <View className="absolute -bottom-2 -right-1 w-6 h-6 rounded-full bg-orange-400 items-center justify-center border border-white">
                    <Text className="text-white text-xs font-bold">3</Text>
                  </View>
                </View>
                <Text
                  className="text-sm font-bold text-textPrimary mb-0.5"
                  numberOfLines={1}
                >
                  {topThree[2].name}
                </Text>
                <Text className="text-sm font-bold text-primary mb-2">
                  {topThree[2].score.toLocaleString()}
                </Text>
                <View className="bg-orange-50 w-full h-24 rounded-t-lg items-center pt-4 border-t border-orange-200 shadow-sm">
                  <Text className="text-4xl font-bold text-orange-200 opacity-60">
                    3
                  </Text>
                </View>
              </View>
            )}
          </View>
        </View>

        {/* Top Performers List */}
        <View className="px-5 pb-8">
          <Text className="text-xs font-bold text-textSecondary uppercase tracking-wider mb-4">
            Top Performers
          </Text>

          <View className="gap-3">
            {restOfUsers.map((user, index) => (
              <View
                key={user.rank}
                className="flex-row items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm"
              >
                {/* Rank */}
                <View className="w-8 mr-2 items-center">
                  <Text className="text-base font-bold text-textSecondary">
                    #{user.rank}
                  </Text>
                </View>

                {/* Avatar */}
                <View className="w-10 h-10 rounded-full bg-gray-100 items-center justify-center mr-3 border border-gray-200">
                  <MaterialIcons name="person" size={20} color="#94a3b8" />
                </View>

                {/* Name & Role */}
                <View className="flex-1">
                  <Text className="text-base font-bold text-textPrimary">
                    {user.name}
                  </Text>
                  <Text className="text-xs text-textSecondary">
                    {user.role}
                  </Text>
                </View>

                {/* Score & Change */}
                <View className="items-end">
                  <Text className="text-base font-bold text-primary">
                    {user.score.toLocaleString()}
                  </Text>
                  {user.change !== undefined && (
                    <View className="flex-row items-center gap-0.5 mt-0.5">
                      <MaterialIcons
                        name={
                          user.change > 0 ? "arrow-drop-up" : "arrow-drop-down"
                        }
                        size={16}
                        color={user.change > 0 ? "#10b981" : "#ef4444"}
                      />
                      <Text
                        className={`text-xs font-bold ${
                          user.change > 0 ? "text-green-600" : "text-red-500"
                        }`}
                      >
                        {Math.abs(user.change)}
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}
