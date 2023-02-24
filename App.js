import TaskList from "./components/task/TaskList";
import { StyleSheet, View, Text } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>TODO</Text>
      <TaskList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    padding: 20,
  },
  titre: {
    fontWeight: "bold",
    fontSize: 30,
    color: "rgba(0, 0, 0, 0.5)",
    marginBottom: 20,
  },
});
