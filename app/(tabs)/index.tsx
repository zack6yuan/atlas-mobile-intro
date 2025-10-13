import { Platform, StyleSheet, Button, Text, View, Alert } from "react-native";
import { Link } from "expo-router";
import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { FlashList } from "@shopify/flash-list"
import React from "react";

export default function AddActivitiyScreen() {
  const { activities } = useActivitiesContext();
  return (
    <View style={styles.container}>
      <View style={styles.list}>
      {activities.map((activity) => (
        <Text key={activity.id}>
          {activity.steps} steps on {new Date(activity.date).toLocaleString()}
        </Text>
      ))}
      </View>
      <Link style={styles.button} href={"/add-activity-screen"} replace>
        <Text style={styles.buttonText}>Add Activity</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
    justifyContent: "center",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  button: {
    backgroundColor: "#1ED2AF",
    color: "white",
    padding: 16,
    width: "100%",
    textAlign: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
  },
  heading: {
    fontSize: 24,
  },
});
