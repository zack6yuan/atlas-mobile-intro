import {
  Platform,
  StyleSheet,
  Button,
  Text,
  View,
  Alert,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { FlashList } from "@shopify/flash-list";
import React, { useState } from "react";

interface activityProps {
  id: string;
  date: Date;
  steps: number;
}

export default function AddActivitiyScreen() {
  const { activities, deleteAllActivities } = useActivitiesContext();

  const [steps, setSteps] = useState<number>(0);
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        {activities.map((activity: activityProps) => (
          <View key={activity.id}>
            <Text style={styles.activityText}>
              {new Date(activity.date).toLocaleString()}
            </Text>
            <Text style={styles.stepCount}>
              Steps: {activity.steps}
            </Text>
          </View>
        ))}
      </View>
      <View>
        <Link style={styles.addButton} href={"/add-activity-screen"} replace>
          <Text style={styles.buttonText}>Add Activity</Text>
        </Link>
        <Pressable style={styles.deleteButton} onPress={() => { 
          deleteAllActivities(steps, new Date());}}>
          <Text style={styles.deleteButtonText}>Delete all activities</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEF9E6",
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
  deleteButtonText: {
    textAlign: "center",
    color: "white",
  },
  deleteButton: {
    backgroundColor: "#D00214",
    width: "100%",
    textAlign: "center",
    padding: 16,
  },
  addButton: {
    backgroundColor: "#1ED2AF",
    color: "white",
    padding: 16,
    width: "100%",
    textAlign: "center",
  },
  list: {
    backgroundColor: "white",
    width: "94%",
    paddingTop: 10,
    paddingBottom: 10,
    marginBottom: 10,
    borderColor: "black",
    borderWidth: 4,
  },
  activityText: {
    paddingLeft: 15,
  },
  stepCount: {
    fontSize: 35,
    paddingLeft: 15,
  },
  addActivityButton: {
    backgroundColor: "#1ED2AF",
    textAlign: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  }
});
