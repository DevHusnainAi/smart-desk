import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedView } from "@/components/themed-view";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ThemedView className="flex-1 bg-[#f8f9fa]">
      <SafeAreaView
        edges={["top"]}
        className="bg-white border-b border-gray-100 shadow-sm z-10"
      >
        <View className="flex-row items-center justify-between px-6 py-5">
          <View>
            <Text className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
              Good Morning
            </Text>
            <Text className="text-3xl font-extrabold text-slate-900">
              Sebastian
            </Text>
          </View>
          <View className="flex-row gap-4">
            <TouchableOpacity className="w-11 h-11 rounded-full bg-gray-50 items-center justify-center border border-gray-100">
              <MaterialIcons name="qr-code-scanner" size={22} color="#334155" />
            </TouchableOpacity>
            <TouchableOpacity
              className="w-11 h-11 rounded-full bg-gray-50 items-center justify-center border border-gray-100"
              onPress={() => router.navigate("/settings")}
            >
              <MaterialIcons name="settings" size={22} color="#334155" />
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>

      <ScrollView
        className="flex-1 px-6 pt-6"
        showsVerticalScrollIndicator={false}
      >
        {/* Daily Goal Card (Hero) */}
        <View className="bg-white rounded-[24px] p-6 mb-8 shadow-md shadow-gray-200 border border-gray-100">
          <View className="flex-row items-center justify-between mb-4">
            <View>
              <Text className="text-lg font-bold text-slate-900">
                Daily Goal
              </Text>
              <Text className="text-sm text-slate-500">4 of 6 hours stood</Text>
            </View>
            <View className="bg-green-50 px-3 py-1.5 rounded-full border border-green-100 flex-row items-center gap-1">
              <MaterialIcons name="trending-up" size={16} color="#15803d" />
              <Text className="text-sm font-bold text-green-700">65%</Text>
            </View>
          </View>

          <View className="h-5 bg-gray-100 rounded-full overflow-hidden mb-4 relative">
            {/* Progress Bar Background */}
            <View className="absolute inset-0 w-full h-full bg-gray-100" />
            {/* Progress Bar Fill */}
            <View className="h-full bg-[#19e66b] w-[65%] rounded-full shadow-sm" />
            {/* Shine Effect */}
            <View className="absolute top-0 right-0 bottom-0 w-[65%] border-r border-white/20" />
          </View>

          <Text className="text-xs font-medium text-slate-400 text-center bg-gray-50 py-3 rounded-xl overflow-hidden">
            🎉 You're crushing it! Just{" "}
            <Text className="text-slate-900 font-bold">2 more hours</Text> to
            reach your goal.
          </Text>
        </View>

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
          {/* Standing Config */}
          <TouchableOpacity
            onPress={() => router.push("/desk-config")}
            className="flex-1 bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 active:scale-[0.98] transition-transform"
          >
            <View className="w-14 h-14 rounded-2xl bg-green-50 items-center justify-center mb-4 border border-green-100">
              <MaterialIcons
                name="accessibility-new"
                size={28}
                color="#19e66b"
              />
            </View>
            <Text className="text-lg font-bold text-slate-900 mb-1">
              Standing
            </Text>
            <View className="flex-row items-center gap-1">
              <View className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <Text className="text-xs text-green-600 font-bold uppercase tracking-wide">
                Active
              </Text>
            </View>
          </TouchableOpacity>

          {/* Sitting Config */}
          <TouchableOpacity
            onPress={() => router.push("/sitting-config")}
            className="flex-1 bg-white rounded-[24px] p-5 shadow-sm border border-gray-100 active:scale-[0.98] transition-transform"
          >
            <View className="w-14 h-14 rounded-2xl bg-orange-50 items-center justify-center mb-4 border border-orange-100">
              <MaterialIcons name="event-seat" size={28} color="#f97316" />
            </View>
            <Text className="text-lg font-bold text-slate-900 mb-1">
              Sitting
            </Text>
            <Text className="text-xs text-slate-400 font-bold uppercase tracking-wide">
              Default
            </Text>
          </TouchableOpacity>
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
          <View className="items-center mr-4">
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
        <View className="bg-blue-50 rounded-[24px] p-6 mb-8 border border-blue-100 flex-row gap-5 items-center">
          <View className="w-12 h-12 rounded-2xl bg-white items-center justify-center shadow-sm">
            <MaterialIcons name="lightbulb" size={24} color="#3b82f6" />
          </View>
          <View className="flex-1">
            <Text className="text-sm font-bold text-blue-900 mb-1">
              Did you know?
            </Text>
            <Text className="text-xs text-blue-700 leading-5">
              Changing posture every 30 minutes improves focus and energy levels
              by up to 40%.
            </Text>
          </View>
        </View>

        <View className="h-10" />
      </ScrollView>
    </ThemedView>
  );
}
