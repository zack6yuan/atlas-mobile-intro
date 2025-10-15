import React from "react";
import { View, StyleSheet, Text } from "react-native";

interface activityProps {
  activity: {
    id: string;
    date: Date;
    steps: number;
  }
}

export function Activity({ activity }: activityProps) {
  return (
    <View>
      <Text style={styles.activityText}>
        {new Date(activity.date).toLocaleString()}
      </Text>
      <Text style={styles.stepCount}>Steps: {activity.steps}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  activityText: {
    paddingLeft: 15,
  },
  stepCount: {
    fontSize: 35,
    paddingLeft: 15,
  }
})
