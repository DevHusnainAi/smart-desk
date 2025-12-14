import { MaterialIcons } from "@expo/vector-icons";
import React, { useEffect } from "react";
import { Text } from "react-native";
import Animated, { FadeInUp, FadeOutUp } from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export type ToastType = "success" | "error" | "info";

interface ToastProps {
  visible: boolean;
  message: string;
  type: ToastType;
  onHide: () => void;
}

export function Toast({ visible, message, type, onHide }: ToastProps) {
  const insets = useSafeAreaInsets();

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        onHide();
      }, 3000); // Auto hide after 3 seconds
      return () => clearTimeout(timer);
    }
  }, [visible, onHide]);

  if (!visible) return null;

  const getStyles = () => {
    switch (type) {
      case "success":
        return {
          bg: "bg-green-500",
          icon: "check-circle" as const,
        };
      case "error":
        return {
          bg: "bg-red-500",
          icon: "error" as const,
        };
      default:
        return {
          bg: "bg-slate-800",
          icon: "info" as const,
        };
    }
  };

  const style = getStyles();

  return (
    <Animated.View
      entering={FadeInUp.springify()}
      exiting={FadeOutUp}
      className={`absolute left-4 right-4 z-50 rounded-2xl shadow-lg shadow-black/20 flex-row items-center p-4 ${style.bg}`}
      style={{ top: insets.top + 10 }}
    >
      <MaterialIcons name={style.icon} size={24} color="white" />
      <Text className="flex-1 text-white font-bold ml-3 text-base">
        {message}
      </Text>
    </Animated.View>
  );
}
