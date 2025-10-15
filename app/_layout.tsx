import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";
import { DatabaseProvider } from "@/components/DatabaseProvider";
import { ActivitiesProvider } from "@/components/ActivitiesProvider";
import React from "react";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <DatabaseProvider>
      <ActivitiesProvider>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="modal"
              options={{
                presentation: "modal",
                title: "Modal",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="add-activity-screen"
              options={{
                headerShown:false,
              }}
            />
          </Stack>
          <StatusBar style="auto" />
        </ThemeProvider>
      </ActivitiesProvider>
    </DatabaseProvider>
  );
}
