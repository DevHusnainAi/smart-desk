import { MaterialIcons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedView } from "@/components/themed-view";

export default function HealthSettingsScreen() {
  const router = useRouter();
  const [appleHealth, setAppleHealth] = useState(false);
  const [googleHealth, setGoogleHealth] = useState(false);

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ThemedView className="flex-1 bg-background">
        <SafeAreaView
          edges={["top"]}
          className="bg-white border-b border-gray-200"
        >
          <View className="flex-row items-center px-5 py-4 justify-between">
            <TouchableOpacity
              onPress={() => router.back()}
              className="w-10 h-10 items-center justify-center -ml-2"
            >
              <MaterialIcons name="arrow-back" size={24} color="#0f172a" />
            </TouchableOpacity>
            <Text className="text-xl font-bold text-textPrimary">
              Health Settings
            </Text>
            <View className="w-10" />
          </View>
        </SafeAreaView>

        <ScrollView
          className="flex-1 px-5 pt-6"
          showsVerticalScrollIndicator={false}
        >
          {/* Health Apps Card */}
          <View className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-6">
            <View className="px-5 py-4 border-b border-gray-50 bg-gray-50/50">
              <Text className="text-base font-bold text-textPrimary">
                Connect Apps
              </Text>
              <Text className="text-xs text-textSecondary mt-0.5">
                Sync your desk activity with health platforms
              </Text>
            </View>

            {/* Apple Health */}
            <View className="flex-row items-center justify-between p-5 border-b border-gray-50">
              <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 rounded-xl bg-pink-50 items-center justify-center border border-pink-100">
                  <MaterialIcons name="favorite" size={24} color="#ec4899" />
                </View>
                <View>
                  <Text className="text-base font-bold text-textPrimary">
                    Apple Health
                  </Text>
                  <Text className="text-xs text-textSecondary">
                    {appleHealth ? "Connected" : "Not Connected"}
                  </Text>
                </View>
              </View>
              <Switch
                value={appleHealth}
                onValueChange={setAppleHealth}
                trackColor={{ false: "#e2e8f0", true: "#fbcfe8" }}
                thumbColor={appleHealth ? "#ec4899" : "#f1f5f9"}
              />
            </View>

            {/* Google Health */}
            <View className="flex-row items-center justify-between p-5">
              <View className="flex-row items-center gap-4">
                <View className="w-12 h-12 rounded-xl bg-blue-50 items-center justify-center border border-blue-100">
                  <MaterialIcons
                    name="health-and-safety"
                    size={24}
                    color="#3b82f6"
                  />
                </View>
                <View>
                  <Text className="text-base font-bold text-textPrimary">
                    Google Health
                  </Text>
                  <Text className="text-xs text-textSecondary">
                    {googleHealth ? "Connected" : "Not Connected"}
                  </Text>
                </View>
              </View>
              <Switch
                value={googleHealth}
                onValueChange={setGoogleHealth}
                trackColor={{ false: "#e2e8f0", true: "#bfdbfe" }}
                thumbColor={googleHealth ? "#3b82f6" : "#f1f5f9"}
              />
            </View>
          </View>

          <View className="px-2">
            <Text className="text-xs text-textSecondary text-center leading-5">
              Connecting allows SmartDesk to write "Standing Time" and
              "Sedentary Minutes" to your health profile.
            </Text>
          </View>
        </ScrollView>
      </ThemedView>
    </>
  );
}
