import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { useActivitiesContext } from '@/components/ActivitiesProvider';

export default function AddActivityScreen() {
  const [steps, setSteps] = useState<number>(0);
  const { insertActivity } = useActivitiesContext();
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Add Activity Screen</Text>
      <TextInput
        placeholder="Enter steps"
        keyboardType="number-pad"
        onChangeText={(value) => setSteps(parseInt(value))}>
      </TextInput>
      <Pressable style={styles.addButton} onPress={() => {
        insertActivity(steps, new Date());
        router.push("/");
      }}>
        <Text style={styles.buttonText}>Add Activity</Text>
      </Pressable>
      <Link style={styles.button} href={"/"} replace>
        <Text style={styles.buttonText}>Go back</Text>
      </Link>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    height: "100%",
    alignItems: "center",
  },
  addButton: {
    backgroundColor: "#1ED2AF",
    color: "white",
    padding: 16,
    width: "100%",
    textAlign: "center",
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#D00414",
    color: "white",
    padding: 16,
    width: "100%",
    textAlign: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  }
});