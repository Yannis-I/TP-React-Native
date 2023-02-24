import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import TaskModal from "./TaskModal";

export default function Task({ task, onClick, index }) {
  const [isSelected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(true);
  };

  return (
    <View style={styles.container}>
       <TaskModal isSelected={isSelected} setSelected={setSelected} task={task} ></TaskModal>
      <Text onPress={() => onClick(index)}>
        {task.state == "todo" ? "⬜" : "✅"}
      </Text>
        <Pressable onPress={handleClick}>
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
