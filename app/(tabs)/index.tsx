import {StyleSheet, Text, View, Pressable} from "react-native";
import { Link } from "expo-router";
import { useActivitiesContext } from "@/components/ActivitiesProvider";
import { FlashList } from "@shopify/flash-list";
import React, { useState } from "react";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";

interface activityProps {
  id: string;
  date: Date;
  steps: number;
}

export default function AddActivitiyScreen({id, date, steps}: activityProps) {
  const { activities, deleteAllActivities } = useActivitiesContext();

  return (
    <View style={styles.container}>
      <FlashList
        data={ activities }
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.activityText}>{new Date(item.date).toLocaleString()}</Text>
            <Text style={styles.stepCount}>Steps: {item.steps}</Text>
          </View>
        )}
        estimatedItemSize={50}
        style={styles.flashStyles}
      />
      <View style={styles.buttonsContainer}>
        <Link style={styles.addActivityButton} href={"/add-activity-screen"} replace>
          <Text style={styles.buttonText}>Add Activity</Text>
        </Link>
        <Pressable style={styles.deleteButton} onPress={() => { 
          deleteAllActivities(steps, new Date());}}>
          <Text style={styles.buttonText}>Delete all activities</Text>
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
    marginBottom: 40,
    borderColor: "black",
    borderWidth: 4,
  },
  activityText: {
    paddingLeft: 15,
    fontSize: 16,
  },
  stepCount: {
    fontSize: 35,
    paddingLeft: 15,
  },
  addActivityButton: {
    backgroundColor: '#1ED2AF',
    width: '100%',
    paddingTop: '16',
    paddingBottom: '16',
    marginTop: -40,
  },
  buttonsContainer: {
    width: '100%',
  },
  listItem: {
    backgroundColor: 'white',
    borderWidth: 4,
    paddingTop: 10,
    paddingBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 15,
  },
  flashStyles: {
    width: '100%',
    marginBottom: 40,
    marginTop: 60
  }
});
