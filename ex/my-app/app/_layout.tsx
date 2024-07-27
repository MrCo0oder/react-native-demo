import { Stack } from "expo-router";
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#A1A3F6",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{ headerTitle: "Home" }} />
      <Stack.Screen
        name="settings/index"
        options={{ headerTitle: "Settings" }}
      />
    </Stack>
  );
}
