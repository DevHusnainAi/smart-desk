import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedView } from "@/components/themed-view";
import { TabToggle } from "@/components/ui/tab-toggle";

// Mock data for 7 days
const activityData = [
  { date: "12 Dec", standing: 4.5, sitting: 3.5 },
  { date: "13 Dec", standing: 5.2, sitting: 2.8 },
  { date: "14 Dec", standing: 3.8, sitting: 4.2 },
  { date: "15 Dec", standing: 6.0, sitting: 2.0 },
  { date: "16 Dec", standing: 4.8, sitting: 3.2 },
  { date: "17 Dec", standing: 5.5, sitting: 2.5 },
  { date: "18 Dec", standing: 4.2, sitting: 3.8 },
];

const postureData = [2, 5, 8, 6, 9, 7, 4, 10, 6, 8];

export default function StatsScreen() {
  const router = useRouter();
  const [viewType, setViewType] = useState<"left" | "right">("left");

  const maxHours = 8;

  return (
    <ThemedView className="flex-1 bg-background">
      <SafeAreaView
        edges={["top"]}
        className="bg-white border-b border-gray-200"
      >
        <View className="flex-row items-center justify-between px-5 py-4">
          <Text className="text-3xl font-bold text-textPrimary">
            Date Selection
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

      <ScrollView
        className="flex-1 px-4 pt-4"
        showsVerticalScrollIndicator={false}
      >
        {/* Tab Toggle */}
        <View className="mb-6">
          <TabToggle
            leftLabel="Standing"
            rightLabel="Sitting"
            activeTab={viewType}
            onTabChange={setViewType}
          />
        </View>

        {/* Horizontal Bar Chart (Activity) */}
        <View className="bg-surface rounded-2xl border border-gray-100 p-5 mb-6 shadow-sm">
          <Text className="text-lg font-bold text-textPrimary mb-4">
            Weekly Activity
          </Text>
          <View className="gap-4">
            {activityData.map((day, index) => {
              const totalHours = day.standing + day.sitting;
              const standingWidth = (day.standing / maxHours) * 100;
              const sittingWidth = (day.sitting / maxHours) * 100;

              return (
                <View key={index} className="flex-row items-center gap-3">
                  <Text className="text-sm font-semibold text-textSecondary w-14">
                    {day.date}
                  </Text>
                  <View className="flex-1 h-8 bg-gray-50 rounded-lg flex-row overflow-hidden border border-gray-100 relative">
                    {/* Grid lines background */}
                    <View className="absolute inset-0 flex-row justify-between px-1">
                      {[0, 25, 50, 75, 100].map((v) => (
                        <View key={v} className="h-full w-[1px] bg-white/20" />
                      ))}
                    </View>
                    <View
                      className="bg-cyan-500 h-full opacity-90"
                      style={{ width: `${standingWidth}%` }}
                    />
                    <View
                      className="bg-teal-400 h-full opacity-90"
                      style={{ width: `${sittingWidth}%` }}
                    />
                  </View>
                  <Text className="text-sm font-bold text-textPrimary w-10 text-right">
                    {totalHours.toFixed(1)}h
                  </Text>
                </View>
              );
            })}
          </View>
          <View className="flex-row items-center justify-center gap-6 mt-4 pt-4 border-t border-gray-100">
            <View className="flex-row items-center gap-2">
              <View className="w-3 h-3 rounded-full bg-cyan-500" />
              <Text className="text-xs font-bold text-textSecondary">
                Standing
              </Text>
            </View>
            <View className="flex-row items-center gap-2">
              <View className="w-3 h-3 rounded-full bg-teal-400" />
              <Text className="text-xs font-bold text-textSecondary">
                Sitting
              </Text>
            </View>
          </View>
        </View>

        {/* Posture Changes */}
        <View className="mb-6">
          <Text className="text-lg font-bold text-textPrimary mb-3 px-1">
            Posture Changes
          </Text>
          <View className="bg-surface rounded-2xl border border-gray-100 p-5 shadow-sm">
            <View className="flex-row items-end justify-between h-48 pb-2">
              {postureData.map((value, index) => {
                const heightPercent = (value / 10) * 100;
                return (
                  <View
                    key={index}
                    className="flex-1 items-center justify-end px-1"
                  >
                    <View
                      className="w-full bg-purple-500 rounded-t-sm opacity-90 shadow-sm"
                      style={{ height: `${heightPercent}%` }}
                    />
                  </View>
                );
              })}
            </View>
            <View className="w-full h-[1px] bg-gray-200 mb-2" />
            <View className="flex-row justify-between mt-1">
              <Text className="text-xs font-bold text-textSecondary">
                9:00 AM
              </Text>
              <Text className="text-xs font-bold text-textSecondary">
                5:00 PM
              </Text>
            </View>
          </View>
        </View>

        {/* Export Button */}
        <TouchableOpacity className="bg-white border border-gray-200 rounded-xl h-14 items-center justify-center mb-8 active:scale-[0.98] shadow-sm">
          <View className="flex-row items-center gap-2">
            <MaterialIcons name="file-download" size={20} color="#0f172a" />
            <Text className="text-base font-bold text-textPrimary">
              Export Data
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </ThemedView>
  );
}
