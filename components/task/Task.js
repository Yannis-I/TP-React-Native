import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";

export default function Task({ task, onClick, index }) {
  const [isSelected, setSelected] = useState(false);

  const handleClickIn = () => {
    setSelected(true);
  };
  const handleClickOut = () => {
    setSelected(false);
    console.log("là");
  };

  return (
    <View style={styles.container}>
      <Text onPress={() => onClick(index)}>
        {task.state == "todo" ? "⬜" : "✅"}
      </Text>
      {isSelected ? (
        <Pressable onPressOut={handleClickOut}>
          <TextInput
            style={
              task.state == "todo"
                ? [styles.task, styles.todo]
                : [styles.task, styles.done]
            }
            value={task.text}
          ></TextInput>
        </Pressable>
      ) : (
        <Pressable onPress={handleClickIn}>
          <Text
            style={
              task.state == "todo"
                ? [styles.task, styles.todo]
                : [styles.task, styles.done]
            }
          >
            {task.text}
          </Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    margin: 5,
  },
  task: { marginLeft: 25 },
  todo: { color: "black" },
  done: { color: "green" },
});
