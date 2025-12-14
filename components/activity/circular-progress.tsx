import React from "react";
import { Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

interface CircularProgressProps {
  totalMinutes: number;
  standingMinutes: number;
  sittingMinutes: number;
  size?: number;
  strokeWidth?: number;
}

export function CircularProgress({
  totalMinutes,
  standingMinutes,
  sittingMinutes,
  size = 200,
  strokeWidth = 12,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const center = size / 2;

  const standingPercentage = (standingMinutes / totalMinutes) * 100;
  const progress = (standingPercentage / 100) * circumference;
  const strokeDashoffset = circumference - progress;

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  return (
    <View className="items-center justify-center">
      <View className="relative" style={{ width: size, height: size }}>
        {/* Background circle */}
        <Svg width={size} height={size}>
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke="#e5e7eb"
            strokeWidth={strokeWidth}
            fill="none"
          />
          {/* Progress circle */}
          <Circle
            cx={center}
            cy={center}
            r={radius}
            stroke="#19e66b"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            transform={`rotate(-90 ${center} ${center})`}
          />
        </Svg>

        {/* Center text */}
        <View className="absolute inset-0 items-center justify-center">
          <Text className="text-4xl font-bold text-textPrimary">
            {formatTime(totalMinutes)}
          </Text>
          <Text className="text-xs font-medium text-slate-400 uppercase tracking-wide mt-1">
            Total Active
          </Text>
        </View>
      </View>
    </View>
  );
}
