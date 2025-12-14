import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Switch, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedView } from "@/components/themed-view";

interface SmartHomeIntegration {
  id: string;
  name: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  iconColor: string;
  iconBgColor: string;
  connected: boolean;
}

interface DeviceConfigItem {
  id: string;
  label: string;
  value: string | number | boolean;
  type: "text" | "number" | "boolean";
  icon: keyof typeof MaterialIcons.glyphMap;
}

const smartHomeIntegrations: SmartHomeIntegration[] = [
  {
    id: "smart-home",
    name: "Smart Home",
    icon: "home",
    iconColor: "#3b82f6",
    iconBgColor: "bg-blue-50",
    connected: true,
  },
  {
    id: "google-home",
    name: "Google Home",
    icon: "g-translate",
    iconColor: "#ea4335",
    iconBgColor: "bg-red-50",
    connected: false,
  },
  {
    id: "apple-home",
    name: "Apple Home",
    icon: "apple",
    iconColor: "#000000",
    iconBgColor: "bg-gray-50",
    connected: false,
  },
  {
    id: "home-assistant",
    name: "Assistant",
    icon: "home-repair-service",
    iconColor: "#18bcf2",
    iconBgColor: "bg-cyan-50",
    connected: true,
  },
];

const deviceConfig: DeviceConfigItem[] = [
  {
    id: "auto-connect",
    label: "Auto Connect",
    value: true,
    type: "boolean",
    icon: "bluetooth-connected",
  },
  {
    id: "mqtt",
    label: "MQTT Connection",
    value: false,
    type: "boolean",
    icon: "cloud-queue",
  },
  {
    id: "led",
    label: "LED Stripe",
    value: false,
    type: "boolean",
    icon: "light-mode",
  },
  {
    id: "led-count",
    label: "LED Count",
    value: 40,
    type: "number",
    icon: "format-list-numbered",
  },
  {
    id: "oled",
    label: "OLED Display",
    value: false,
    type: "boolean",
    icon: "monitor",
  },
  {
    id: "utc",
    label: "Timezone (UTC)",
    value: 1,
    type: "number",
    icon: "schedule",
  },
  {
    id: "min-height",
    label: "Min Desk Height",
    value: 66,
    type: "number",
    icon: "vertical-align-bottom",
  },
  {
    id: "max-height",
    label: "Max Desk Height",
    value: 110,
    type: "number",
    icon: "vertical-align-top",
  },
];

export default function SettingsScreen() {
  const router = useRouter();

  return (
    <ThemedView className="flex-1 bg-background">
      <SafeAreaView
        edges={["top"]}
        className="bg-white border-b border-gray-200"
      >
        <View className="px-5 py-4">
          <Text className="text-3xl font-bold text-textPrimary">Settings</Text>
        </View>
      </SafeAreaView>

      <ScrollView
        className="flex-1 px-5 pt-6"
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Card */}
        <View className="flex-row items-center bg-white p-4 rounded-2xl border border-gray-100 shadow-sm mb-8">
          <View className="w-16 h-16 rounded-full bg-gray-100 items-center justify-center border border-gray-200 mr-4">
            <MaterialIcons name="person" size={40} color="#94a3b8" />
          </View>
          <View className="flex-1">
            <Text className="text-xl font-bold text-textPrimary">
              Sebastian
            </Text>
            <Text className="text-sm text-textSecondary">Pro Member</Text>
          </View>
          <TouchableOpacity className="bg-gray-50 p-2 rounded-full border border-gray-200">
            <MaterialIcons name="edit" size={20} color="#64748b" />
          </TouchableOpacity>
        </View>

        {/* Integrations Section */}
        <View className="mb-8">
          <Text className="text-lg font-bold text-textPrimary mb-4">
            Integrations
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="overflow-visible -mx-5 px-5"
          >
            {/* Health Settings Link */}
            <TouchableOpacity
              onPress={() => router.push("/health-settings")}
              className="mr-4 bg-white w-32 p-4 rounded-2xl border border-gray-100 shadow-sm items-center"
            >
              <View className="w-12 h-12 rounded-full bg-red-50 items-center justify-center mb-3">
                <MaterialIcons name="favorite" size={24} color="#ef4444" />
              </View>
              <Text
                className="text-sm font-bold text-textPrimary mb-1 text-center"
                numberOfLines={1}
              >
                Health
              </Text>
              <Text className="text-xs font-medium text-textSecondary">
                Configure
              </Text>
            </TouchableOpacity>

            {smartHomeIntegrations.map((item) => (
              <TouchableOpacity
                key={item.id}
                className="mr-4 bg-white w-32 p-4 rounded-2xl border border-gray-100 shadow-sm items-center"
              >
                <View
                  className={`w-12 h-12 rounded-full ${item.iconBgColor} items-center justify-center mb-3`}
                >
                  <MaterialIcons
                    name={item.icon}
                    size={24}
                    color={item.iconColor}
                  />
                </View>
                <Text
                  className="text-sm font-bold text-textPrimary mb-1 text-center"
                  numberOfLines={1}
                >
                  {item.name}
                </Text>
                <Text
                  className={`text-xs font-medium ${
                    item.connected ? "text-green-600" : "text-gray-400"
                  }`}
                >
                  {item.connected ? "Connected" : "Connect"}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Device Configuration */}
        <View className="mb-10">
          <Text className="text-lg font-bold text-textPrimary mb-4">
            Device Configuration
          </Text>
          <View className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            {deviceConfig.map((item, index) => (
              <View
                key={item.id}
                className={`flex-row items-center justify-between p-4 ${
                  index !== deviceConfig.length - 1
                    ? "border-b border-gray-50"
                    : ""
                }`}
              >
                <View className="flex-row items-center gap-3 flex-1">
                  <View className="w-8 h-8 rounded-lg bg-gray-50 items-center justify-center">
                    <MaterialIcons name={item.icon} size={18} color="#64748b" />
                  </View>
                  <Text className="text-base font-medium text-textPrimary">
                    {item.label}
                  </Text>
                </View>

                {item.type === "boolean" ? (
                  <View pointerEvents="none">
                    <Switch
                      value={item.value as boolean}
                      trackColor={{ false: "#e2e8f0", true: "#bbf7d0" }}
                      thumbColor={item.value ? "#19e66b" : "#f1f5f9"}
                    />
                  </View>
                ) : (
                  <View className="flex-row items-center gap-2 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                    <Text className="text-sm font-semibold text-textPrimary">
                      {item.value}
                    </Text>
                    {item.id.includes("height") && (
                      <Text className="text-xs text-textSecondary">cm</Text>
                    )}
                  </View>
                )}
              </View>
            ))}

            <TouchableOpacity
              className="p-4 flex-row items-center justify-center border-t border-gray-100 bg-gray-50/50 active:bg-gray-100"
              onPress={() => router.push("/desk-config")}
            >
              <Text className="text-primary font-bold mr-2">
                Advanced Desk Config
              </Text>
              <MaterialIcons name="arrow-forward" size={16} color="#19e66b" />
            </TouchableOpacity>
          </View>

          {/* Log Out Button */}
          <TouchableOpacity
            onPress={() => router.replace("/login")}
            className="bg-red-50 p-4 rounded-2xl items-center justify-center border border-red-100 mt-6 active:scale-[0.98]"
          >
            <Text className="text-red-500 font-bold">Log Out</Text>
          </TouchableOpacity>
        </View>

        <View className="items-center mb-8">
          <Text className="text-xs text-textSecondary">App Version 1.0.2</Text>
        </View>
      </ScrollView>
    </ThemedView>
  );
}
