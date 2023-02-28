import TaskList from "./components/task/TaskList";
import { StyleSheet, View, Text, ImageBackground } from "react-native";

import fond from "./assets/fond.jpeg";

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={fond} resizeMode="cover" style={styles.image}>
        <Text style={styles.titre}>TODO</Text>
        <TaskList />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    height: "100%",
  },
  image: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    height: "100%",
  },
  titre: {
    fontWeight: "bold",
    fontSize: 30,
    color: "rgba(0, 0, 0, 0.5)",
    marginBottom: 20,
  },
});
