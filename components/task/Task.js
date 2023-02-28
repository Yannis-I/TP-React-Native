import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { TouchableRipple } from "react-native-paper";
import TaskModal from "./TaskModal";

export default function Task({ task, onClick, index, updateTask, deleteTask }) {
  const [isSelected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(true);
  };

  return (
    <View style={styles.container}>
      <TaskModal
        index={index}
        isSelected={isSelected}
        setSelected={setSelected}
        task={task}
        updateTask={updateTask}
        deleteTask={deleteTask}
      ></TaskModal>
      <Text
        style={styles.check}
        onPress={() => {
          onClick(index);
        }}
      >
        {task.state == "todo" ? "⬜" : "✅"}
      </Text>
      <TouchableRipple onPress={handleClick} style={styles.taskPressable}>
        <Text
          style={
            task.state == "todo"
              ? [styles.task, styles.todo]
              : [styles.task, styles.done]
          }
        >
          {task.text}
        </Text>
      </TouchableRipple>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: 5,
  },
  task: { fontSize: 15 },
  taskPressable: {
    width: "90%",
    marginLeft: 15,
    marginRight: 15,
    padding: 10,
  },
  check: {
    borderWidth: 2,
    borderColor: "darkgrey",
    borderStyle: "solid",
    paddingTop: 3,
    paddingBottom: 0,
    paddingLeft: 3,
    paddingRight: 3,
    borderRadius: 5,
  },
  todo: { color: "black" },
  done: { color: "green" },
});
