import { MaterialIcons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedView } from "@/components/themed-view";
import { FormRow } from "@/components/ui/form-row";
import { TabToggle } from "@/components/ui/tab-toggle";

export default function DeskConfigScreen() {
  const router = useRouter();
  const [configType, setConfigType] = useState<"left" | "right">("left");

  // Standing config
  const [minStandTime, setMinStandTime] = useState("10");
  const [maxStandTime, setMaxStandTime] = useState("45");
  const [standHeight, setStandHeight] = useState("110");
  const [warning, setWarning] = useState("LED");
  const [celebrationTime, setCelebrationTime] = useState("15");
  const [celebration, setCelebration] = useState("LED");

  // Sitting config
  const [minSitTime, setMinSitTime] = useState("20");
  const [maxSitTime, setMaxSitTime] = useState("60");
  const [sitHeight, setSitHeight] = useState("70");

  const isStanding = configType === "left";

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
              className="w-10 h-10 items-center justify-center"
            >
              <MaterialIcons name="arrow-back" size={24} color="#334155" />
            </TouchableOpacity>
            <View className="flex-1 items-center">
              {/* Current Session Badge */}
              <View className="bg-primary/10 px-4 py-1.5 rounded-full">
                <Text className="text-xs font-bold text-primary uppercase tracking-wide">
                  Current Session
                </Text>
              </View>
            </View>
            <View className="w-10" />
          </View>
        </SafeAreaView>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {/* Tab Toggle */}
          <View className="px-4 pt-4 pb-2">
            <TabToggle
              leftLabel="Standing Config"
              rightLabel="Sitting Config"
              activeTab={configType}
              onTabChange={setConfigType}
            />
          </View>

          {/* Configuration Form */}
          <View className="px-4 pt-4">
            <View className="bg-surface rounded-xl border border-gray-200 overflow-hidden">
              {isStanding ? (
                <View className="px-4">
                  <FormRow
                    label="Min Stand Time"
                    value={minStandTime}
                    onChangeText={setMinStandTime}
                    suffix="min"
                  />
                  <FormRow
                    label="Max Stand Time"
                    value={maxStandTime}
                    onChangeText={setMaxStandTime}
                    suffix="min"
                  />
                  <FormRow
                    label="Stand Height"
                    value={standHeight}
                    onChangeText={setStandHeight}
                    suffix="cm"
                  />
                  <FormRow label="Warning" value={warning} editable={false} />
                  <FormRow
                    label="Celebration Time"
                    value={celebrationTime}
                    onChangeText={setCelebrationTime}
                    suffix="min"
                  />
                  <FormRow
                    label="Celebration"
                    value={celebration}
                    editable={false}
                  />
                </View>
              ) : (
                <View className="px-4">
                  <FormRow
                    label="Min Sit Time"
                    value={minSitTime}
                    onChangeText={setMinSitTime}
                    suffix="min"
                  />
                  <FormRow
                    label="Max Sit Time"
                    value={maxSitTime}
                    onChangeText={setMaxSitTime}
                    suffix="min"
                  />
                  <FormRow
                    label="Sit Height"
                    value={sitHeight}
                    onChangeText={setSitHeight}
                    suffix="cm"
                  />
                  <FormRow label="Warning" value={warning} editable={false} />
                  <FormRow
                    label="Celebration Time"
                    value={celebrationTime}
                    onChangeText={setCelebrationTime}
                    suffix="min"
                  />
                  <FormRow
                    label="Celebration"
                    value={celebration}
                    editable={false}
                  />
                </View>
              )}
            </View>

            {/* Save Button */}
            <TouchableOpacity className="mt-6 mb-8 bg-primary rounded-xl h-14 items-center justify-center active:scale-[0.98]">
              <Text className="text-black text-base font-bold">
                Save Configuration
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ThemedView>
    </>
  );
}
