import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
import { useActivitiesContext } from '@/components/ActivitiesProvider';

export default function AddActivityScreen() {
  const [steps, setSteps] = useState<number>(0);
  const { insertActivity } = useActivitiesContext();
  const router = useRouter();
  return (
    <View style={styles.container} screenOptions={{headerShown: false}}>
      <Text style={styles.header}>Add Activity</Text>
      <TextInput
        placeholder="Enter steps"
        keyboardType="number-pad"
        style={styles.stepsInput}
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
    backgroundColor: "#FEF9E6",
  },
  addButton: {
    backgroundColor: "#1ED2AF",
    color: "white",
    padding: 16,
    width: "100%",
    textAlign: "center",
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
  },
  stepsInput: {
    backgroundColor: 'white',
    width: '100%',
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: 'black',
    borderWidth: 3,
    marginBottom: 20,
    textAlign: 'left',
    paddingLeft: 10,
    fontSize: 19,
  },
  header: {
    fontSize: 30,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});