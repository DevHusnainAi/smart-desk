/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        // Light Theme - Clean & Elegant
        background: "#f8f9fa", // Main background - soft grayish white
        surface: "#ffffff", // Cards and elevated surfaces - pure white
        surfaceVariant: "#f3f4f6", // Alternate surface - very light gray

        // Primary Green (from designs)
        primary: {
          DEFAULT: "#19e66b", // Main green for buttons, accents
          light: "#4ade80", // Lighter green for hover states
          dark: "#10b981", // Darker green for pressed states
        },

        // Text colors with proper contrast
        textPrimary: "#0f172a", // Main text - dark slate
        textSecondary: "#64748b", // Secondary text - medium gray
        textTertiary: "#94a3b8", // Tertiary text - light gray

        // Borders
        border: "#e5e7eb", // Default border
        borderStrong: "#d1d5db", // Stronger borders

        // Status colors
        success: "#10b981",
        warning: "#f59e0b",
        error: "#ef4444",
        info: "#3b82f6",

        // Keep existing color mappings for backward compatibility
        icon: {
          light: "#687076",
          dark: "#9BA1A6",
        },
      },
    },
  },
  plugins: [],
};
