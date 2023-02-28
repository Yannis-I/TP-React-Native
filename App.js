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
    width: '100%',
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 30,
    padding: 20,
  },
  titre: {
    fontWeight: "bold",
    fontSize: 30,
    color: "rgba(0, 0, 0, 0.5)",
    marginBottom: 20,
  },
});
