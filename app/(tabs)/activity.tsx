import { MaterialIcons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Circle } from "react-native-svg";

import { ThemedView } from "@/components/themed-view";

export default function ActivityScreen() {
  const router = useRouter();
  const sessionProgress = 60; // 0-100%
  const warningTime = 10; // minutes

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ThemedView className="flex-1 bg-background">
        <SafeAreaView
          edges={["top"]}
          className="bg-white border-b border-gray-200"
        >
          <View className="flex-row items-center justify-between px-5 py-4">
            <Text className="text-3xl font-bold text-textPrimary">
              Activity
            </Text>
            <View className="flex-row gap-3">
              <TouchableOpacity className="w-10 h-10 items-center justify-center">
                <MaterialIcons
                  name="qr-code-scanner"
                  size={24}
                  color="#0f172a"
                />
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
          {/* Session Status Card */}
          <View className="bg-surface rounded-2xl border border-gray-100 p-5 mb-5 shadow-sm">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-sm font-bold text-textSecondary uppercase tracking-wide">
                Active Session
              </Text>
              <View className="bg-green-100 border border-green-200 px-3 py-1 rounded-full flex-row items-center gap-1.5">
                <View className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <Text className="text-xs font-bold text-green-700 uppercase">
                  Standing
                </Text>
              </View>
            </View>

            {/* Progress Bar */}
            <View className="mb-4">
              <View className="h-14 bg-gray-50 rounded-xl overflow-hidden border border-gray-100 relative">
                <View
                  className="h-full bg-primary items-end justify-center pr-3"
                  style={{ width: `${sessionProgress}%` }}
                ></View>
                <View className="absolute inset-0 flex-row items-center justify-between px-4">
                  <Text className="text-sm font-bold text-textPrimary z-10">
                    Progress
                  </Text>
                  <Text className="text-sm font-bold text-textPrimary z-10">
                    30 min
                  </Text>
                </View>
              </View>
            </View>

            {/* Warning */}
            <View className="flex-row items-center gap-3 bg-orange-50 border border-orange-100 px-4 py-3 rounded-xl">
              <View className="w-8 h-8 rounded-full bg-orange-100 items-center justify-center">
                <MaterialIcons name="warning" size={18} color="#ea580c" />
              </View>
              <View>
                <Text className="text-xs font-bold text-orange-800 uppercase mb-0.5">
                  Warning
                </Text>
                <Text className="text-sm font-medium text-orange-700">
                  LED Warning in {warningTime} min
                </Text>
              </View>
            </View>
          </View>

          {/* Work Day Section */}
          <View className="mb-6">
            <View className="flex-row items-center justify-between mb-4 px-1">
              <Text className="text-lg font-bold text-textPrimary">
                Work Day
              </Text>
              <View className="bg-gray-100 px-3 py-1 rounded-full">
                <Text className="text-xs font-bold text-textSecondary">
                  Total: 6h
                </Text>
              </View>
            </View>

            {/* Donut Charts */}
            <View className="flex-row gap-4 mb-5">
              <View className="flex-1 bg-surface rounded-2xl border border-gray-100 p-4 items-center shadow-sm">
                <View className="relative w-32 h-32 items-center justify-center mb-3">
                  <Svg width="128" height="128" viewBox="0 0 128 128">
                    {/* Background Track */}
                    <Circle
                      cx="64"
                      cy="64"
                      r="54"
                      stroke="#eff6ff"
                      strokeWidth="12"
                      fill="transparent"
                    />
                    {/* Progress Circle (67% = 227 offset) */}
                    <Circle
                      cx="64"
                      cy="64"
                      r="54"
                      stroke="#3b82f6"
                      strokeWidth="12"
                      fill="transparent"
                      strokeDasharray="339.292"
                      strokeDashoffset="111.96"
                      strokeLinecap="round"
                      rotation="-90"
                      origin="64, 64"
                    />
                  </Svg>
                  <View className="absolute items-center">
                    <Text className="text-2xl font-bold text-textPrimary">
                      4h
                    </Text>
                    <Text className="text-xs font-medium text-textSecondary">
                      67%
                    </Text>
                  </View>
                </View>
                <Text className="text-sm font-bold text-textPrimary">
                  Working Time
                </Text>
              </View>

              <View className="flex-1 bg-surface rounded-2xl border border-gray-100 p-4 items-center shadow-sm">
                <View className="relative w-32 h-32 items-center justify-center mb-3">
                  <Svg width="128" height="128" viewBox="0 0 128 128">
                    {/* Background Track */}
                    <Circle
                      cx="64"
                      cy="64"
                      r="54"
                      stroke="#fff7ed"
                      strokeWidth="12"
                      fill="transparent"
                    />
                    {/* Progress Circle (33% = ~227 offset) */}
                    <Circle
                      cx="64"
                      cy="64"
                      r="54"
                      stroke="#f97316"
                      strokeWidth="12"
                      fill="transparent"
                      strokeDasharray="339.292"
                      strokeDashoffset="227.32"
                      strokeLinecap="round"
                      rotation="-90"
                      origin="64, 64"
                    />
                  </Svg>
                  <View className="absolute items-center">
                    <Text className="text-2xl font-bold text-textPrimary">
                      2h
                    </Text>
                    <Text className="text-xs font-medium text-textSecondary">
                      33%
                    </Text>
                  </View>
                </View>
                <Text className="text-sm font-bold text-textPrimary">
                  Sitting Time
                </Text>
              </View>
            </View>

            {/* Action Buttons */}
            <View className="flex-row gap-3">
              <TouchableOpacity className="flex-1 bg-white border border-gray-200 rounded-xl h-12 flex-row items-center justify-center gap-2 active:scale-[0.98] shadow-sm">
                <View className="w-2 h-2 rounded-full bg-blue-500" />
                <Text className="text-sm font-bold text-textPrimary">
                  Working
                </Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 bg-white border border-gray-200 rounded-xl h-12 flex-row items-center justify-center gap-2 active:scale-[0.98] shadow-sm">
                <View className="w-2 h-2 rounded-full bg-orange-500" />
                <Text className="text-sm font-bold text-textPrimary">
                  Sitting
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ThemedView>
    </>
  );
}
