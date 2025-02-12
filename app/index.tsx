import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Ionicons name="wallet-outline" size={80} color="#FF6B6B" />
        <Text style={styles.title}>Split Bills Easily</Text>
        <Text style={styles.subtitle}>Split expenses with friends and family</Text>

        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => router.push('/exact')}
          >
            <Ionicons name="home" size={32} color="#ffffff" />
            <Text style={styles.optionText}>Exact Split</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.option}
            onPress={() => router.push('/equal')}
          >
            <Ionicons name="people" size={32} color="#ffffff" />
            <Text style={styles.optionText}>Equal Split</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.option}
            onPress={() => router.push('/percentage')}
          >
            <Ionicons name="pie-chart" size={32} color="#ffffff" />
            <Text style={styles.optionText}>Percentage Split</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292E"
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    color: "#ffffff",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  subtitle: {
    color: "#999999",
    fontSize: 18,
    marginBottom: 40,
  },
  optionsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: 20,
  },
  option: {
    backgroundColor: '#3D3D3D',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    width: '45%',
    aspectRatio: 1,
    justifyContent: 'center',
  },
  optionText: {
    color: '#ffffff',
    fontSize: 16,
    marginTop: 10,
    fontWeight: '500',
  },
});
