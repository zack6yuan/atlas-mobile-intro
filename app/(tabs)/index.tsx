import { Image } from 'expo-image';
import { Platform, StyleSheet, Button, Text } from 'react-native';
import { useActivities } from "@/hooks/useActivities"
import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { useActivitiesContext } from '@/components/ActivitiesProvider';

export default function HomeScreen() {
  const { activities } = useActivitiesContext();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.stepContainer}>
        {activities.map((activity) => (
          <Text key={activity.id}>
            {activity.steps} steps on{" "}
            {new Date(activity.date).toLocaleString()}
          </Text>
        ))}
        <Link style={styles.button} href={"/add-activity-screen"} replace>
          <Text style={styles.buttonText}>Add Activity</Text>
        </Link>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  button: {
    backgroundColor: "#1ED2AF",
    color: "white",
    padding: 16,
    width: "100%",
    textAlign: "center",
  },
  buttonText: {
    color: "white"
  },
  heading: {
    fontSize: 24,
  },
});
