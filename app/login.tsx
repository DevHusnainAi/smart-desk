import { MaterialIcons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedView } from "@/components/themed-view";
import { useToast } from "@/context/toast-context";

export default function LoginScreen() {
  const router = useRouter();
  const { showToast } = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFocused, setIsFocused] = useState<string | null>(null);

  const handleLogin = () => {
    if (!email || !password) {
      showToast("Please enter email and password", "error");
      return;
    }

    // Simulate login success
    showToast("Welcome back, Sebastian!", "success");

    // Navigate to main app after short delay
    setTimeout(() => {
      router.replace("/(tabs)");
    }, 500);
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <ThemedView className="flex-1 bg-white">
        <SafeAreaView edges={["top", "bottom"]} className="flex-1">
          <View className="flex-1 px-8 justify-center">
            {/* Header / Logo */}
            <Animated.View
              entering={FadeInUp.delay(200).duration(1000).springify()}
              className="items-center mb-16"
            >
              <View className="w-24 h-24 rounded-3xl bg-green-50 items-center justify-center mb-6 shadow-sm rotate-3 border border-green-100">
                <MaterialIcons name="desk" size={48} color="#19e66b" />
              </View>
              <Text className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">
                SmartDesk
              </Text>
              <Text className="text-lg text-slate-500 font-medium">
                Elevate your workspace
              </Text>
            </Animated.View>

            {/* Form */}
            <Animated.View
              entering={FadeInDown.delay(400).duration(1000).springify()}
              className="gap-5"
            >
              {/* Email Input */}
              <View>
                <Text className="text-xs font-bold text-slate-500 uppercase ml-1 mb-2 tracking-wider">
                  Email
                </Text>
                <View
                  className={`flex-row items-center gap-4 bg-gray-50 rounded-2xl p-4 border transition-all ${
                    isFocused === "email"
                      ? "border-green-400 bg-green-50/20"
                      : "border-gray-100"
                  }`}
                >
                  <MaterialIcons
                    name="mail-outline"
                    size={22}
                    color={isFocused === "email" ? "#19e66b" : "#94a3b8"}
                  />
                  <TextInput
                    placeholder="hello@example.com"
                    placeholderTextColor="#94a3b8"
                    value={email}
                    onChangeText={setEmail}
                    onFocus={() => setIsFocused("email")}
                    onBlur={() => setIsFocused(null)}
                    className="flex-1 text-base font-medium text-slate-900"
                    autoCapitalize="none"
                  />
                </View>
              </View>

              {/* Password Input */}
              <View>
                <Text className="text-xs font-bold text-slate-500 uppercase ml-1 mb-2 tracking-wider">
                  Password
                </Text>
                <View
                  className={`flex-row items-center gap-4 bg-gray-50 rounded-2xl p-4 border transition-all ${
                    isFocused === "password"
                      ? "border-green-400 bg-green-50/20"
                      : "border-gray-100"
                  }`}
                >
                  <MaterialIcons
                    name="lock-outline"
                    size={22}
                    color={isFocused === "password" ? "#19e66b" : "#94a3b8"}
                  />
                  <TextInput
                    placeholder="••••••••"
                    placeholderTextColor="#94a3b8"
                    value={password}
                    onChangeText={setPassword}
                    onFocus={() => setIsFocused("password")}
                    onBlur={() => setIsFocused(null)}
                    className="flex-1 text-base font-medium text-slate-900"
                    secureTextEntry
                  />
                </View>
              </View>

              {/* Forgot Password */}
              <TouchableOpacity className="self-end">
                <Text className="text-sm text-green-600 font-bold">
                  Forgot Password?
                </Text>
              </TouchableOpacity>

              {/* Login Button */}
              <TouchableOpacity
                onPress={handleLogin}
                className="w-full h-16 bg-[#19e66b] rounded-2xl items-center justify-center mt-4 shadow-lg shadow-green-200 active:scale-[0.98]"
              >
                <Text className="text-white text-lg font-bold">Log In</Text>
              </TouchableOpacity>
            </Animated.View>

            {/* Footer */}
            <Animated.View
              entering={FadeInDown.delay(600).duration(1000)}
              className="mt-12 flex-row items-center justify-center gap-2"
            >
              <Text className="text-slate-500 font-medium">New here?</Text>
              <TouchableOpacity>
                <Text className="text-green-600 font-bold text-base">
                  Create Account
                </Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </SafeAreaView>
      </ThemedView>
    </>
  );
}
