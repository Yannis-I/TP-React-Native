import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function Task(props) {
  return (
    <View style={styles.container}>
      <Text
        style={
          props.state == "todo"
            ? [styles.task, styles.todo]
            : [styles.task, styles.done]
        }
      >
        {props.text}
      </Text>
      <Text>{props.state == "todo" ? "⬜" : "✅"}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  todo: { color: "black" },
  done: { color: "green" },
});
