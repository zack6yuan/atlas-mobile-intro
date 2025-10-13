import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Link } from 'expo-router';

export default function AddActivityScreen() {
  return (
    <View style={styles.container}>
      <Text>Add Activity Screen</Text>
      <TextInput placeholder="Enter steps" />
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
  button: {
    backgroundColor: "#D00414",
    color: "white",
    padding: 16,
    width: "100%",
    textAlign: "center",
  },
  buttonText: {
    color: "white"
  }
});