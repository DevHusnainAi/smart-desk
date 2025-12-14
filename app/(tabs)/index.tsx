import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { DailyGoalCard } from "@/components/home/daily-goal-card";
import { DeskControlCard } from "@/components/home/desk-control-card";
import { GreetingHeader } from "@/components/home/greeting-header";
import { QuickTipCard } from "@/components/home/quick-tip-card";
import { ThemedView } from "@/components/themed-view";
import { Skeleton } from "@/components/ui/skeleton";

export default function HomeScreen() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <ThemedView className="flex-1 bg-[#f8f9fa]">
        <SafeAreaView
          edges={["top"]}
          className="bg-white border-b border-gray-100 shadow-sm z-10"
        >
          <View className="flex-row items-center justify-between px-6 py-5">
            <View>
              <Skeleton width={100} height={16} style={{ marginBottom: 4 }} />
              <Skeleton width={180} height={36} />
            </View>
            <View className="flex-row gap-4">
              <Skeleton width={44} height={44} borderRadius={22} />
              <Skeleton width={44} height={44} borderRadius={22} />
            </View>
          </View>
        </SafeAreaView>

        <View className="flex-1 px-6 pt-6">
          <Skeleton
            width="100%"
            height={200}
            borderRadius={24}
            style={{ marginBottom: 32 }}
          />

          <View className="flex-row items-center justify-between mb-4">
            <Skeleton width={120} height={24} />
            <Skeleton width={60} height={20} />
          </View>

          <View className="flex-row gap-4 mb-8">
            <Skeleton style={{ flex: 1 }} height={160} borderRadius={24} />
            <Skeleton style={{ flex: 1 }} height={160} borderRadius={24} />
          </View>

          <Skeleton width="100%" height={100} borderRadius={24} />
        </View>
      </ThemedView>
    );
  }

  return (
    <ThemedView className="flex-1 bg-[#f8f9fa]">
      <GreetingHeader name="Sebastian" />

      <ScrollView
        className="flex-1 px-6 pt-6"
        showsVerticalScrollIndicator={false}
      >
        {/* Daily Goal Card (Hero) */}
        <DailyGoalCard current={4} target={6} />

        {/* Desk Configuration */}
        <View className="flex-row items-center justify-between mb-4 px-1">
          <Text className="text-lg font-bold text-slate-900">
            Desk Controls
          </Text>
          <TouchableOpacity onPress={() => router.push("/desk-config")}>
            <Text className="text-sm font-bold text-[#19e66b]">Manage</Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row gap-4 mb-8">
          <DeskControlCard
            title="Standing"
            icon="accessibility-new"
            type="standing"
            isActive
            onPress={() => router.push("/desk-config")}
          />
          <DeskControlCard
            title="Sitting"
            icon="event-seat"
            type="sitting"
            onPress={() => router.push("/sitting-config")}
          />
        </View>

        {/* Weekly Streak / Achievements (Filler Content) */}
        <Text className="text-lg font-bold text-slate-900 mb-4 px-1">
          Weekly Streak
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="-mx-6 px-6 mb-8"
        >
          {/* Day 1 */}
          <View className="items-center mr-4 pl-6">
            <View className="w-12 h-12 rounded-full bg-green-100 items-center justify-center border border-green-200 mb-2">
              <MaterialIcons name="check" size={20} color="#15803d" />
            </View>
            <Text className="text-xs font-bold text-slate-600">Mon</Text>
          </View>
          {/* Day 2 */}
          <View className="items-center mr-4">
            <View className="w-12 h-12 rounded-full bg-green-100 items-center justify-center border border-green-200 mb-2">
              <MaterialIcons name="check" size={20} color="#15803d" />
            </View>
            <Text className="text-xs font-bold text-slate-600">Tue</Text>
          </View>
          {/* Day 3 */}
          <View className="items-center mr-4">
            <View className="w-12 h-12 rounded-full bg-green-100 items-center justify-center border border-green-200 mb-2">
              <MaterialIcons name="check" size={20} color="#15803d" />
            </View>
            <Text className="text-xs font-bold text-slate-600">Wed</Text>
          </View>
          {/* Day 4 */}
          <View className="items-center mr-4">
            <View className="w-12 h-12 rounded-full bg-green-500 items-center justify-center border border-green-600 shadow-md shadow-green-200 mb-2">
              <MaterialIcons
                name="local-fire-department"
                size={24}
                color="white"
              />
            </View>
            <Text className="text-xs font-bold text-slate-900">Thu</Text>
          </View>
          {/* Day 5 */}
          <View className="items-center mr-4">
            <View className="w-12 h-12 rounded-full bg-gray-100 items-center justify-center border border-gray-200 mb-2">
              <Text className="text-xs font-bold text-gray-400">Fri</Text>
            </View>
            <Text className="text-xs font-bold text-gray-400">Fri</Text>
          </View>
        </ScrollView>

        {/* Quick Tip / Insight */}
        <QuickTipCard />

        <View className="h-10" />
      </ScrollView>
    </ThemedView>
  );
}
