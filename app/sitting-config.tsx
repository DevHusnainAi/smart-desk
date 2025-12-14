import { MaterialIcons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedView } from "@/components/themed-view";
import { FormRow } from "@/components/ui/form-row";

export default function SittingConfigScreen() {
  const router = useRouter();

  const [minSitTime, setMinSitTime] = useState("20");
  const [maxSitTime, setMaxSitTime] = useState("45");
  const [sitHeight, setSitHeight] = useState("70");
  const [warning, setWarning] = useState("LED");

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
            <Text className="text-lg font-bold text-textPrimary">
              Sitting Configuration
            </Text>
            <View className="w-10" />
          </View>
        </SafeAreaView>

        <ScrollView
          className="flex-1 px-4 pt-4"
          showsVerticalScrollIndicator={false}
        >
          <View className="bg-surface rounded-xl border border-gray-200 overflow-hidden">
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
            </View>
          </View>

          <TouchableOpacity className="mt-6 mb-8 bg-primary rounded-xl h-14 items-center justify-center">
            <Text className="text-black text-base font-bold">
              Save Configuration
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ThemedView>
    </>
  );
}
