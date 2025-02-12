// import { StyleSheet, Text, View } from "react-native";

// export default function NotFound() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>404 - Not Found</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 20,
//     backgroundColor: "#25292E"
//   },
//   text: {
//     color: "#ffffff",
//     fontSize: 20
//   }
// })


import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import { Animated } from "react-native";

export default function NotFound() {
  const router = useRouter();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
      <AntDesign name="frowno" size={80} color="#FF6B6B" />
      <Text style={styles.text}>Oops! Page Not Found</Text>
      <Text style={styles.subText}>
        The page you're looking for doesn't exist.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => router.replace("/")}>
        <Text style={styles.buttonText}>Go Home</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#25292E",
  },
  text: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  subText: {
    color: "#a0a0a0",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#FF6B6B",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
