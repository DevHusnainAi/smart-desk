import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

interface GreetingHeaderProps {
  name: string;
}

export function GreetingHeader({ name }: GreetingHeaderProps) {
  const router = useRouter();

  return (
    <SafeAreaView
      edges={["top"]}
      className="bg-white border-b border-gray-100 shadow-sm z-10"
    >
      <View className="flex-row items-center justify-between px-6 py-5">
        <View>
          <Text className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
            Good Morning
          </Text>
          <Text className="text-3xl font-extrabold text-slate-900">{name}</Text>
        </View>
        <View className="flex-row gap-4">
          <TouchableOpacity
            className="w-11 h-11 rounded-full bg-gray-50 items-center justify-center border border-gray-100"
            onPress={() => router.push("/scanner")}
          >
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
  );
}
