import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { TouchableRipple } from "react-native-paper";
import Task from "./Task";

export default function TaskList() {
  const [taskList, setTaskList] = useState([
    { text: "Faire les courses", state: "done" },
    { text: "Aller à la salle de sport 3 fois par semaine", state: "todo" },
    { text: "Monter à plus de 5000m d'altitude", state: "todo" },
    { text: "Acheter mon premier appartement", state: "todo" },
    { text: "Perdre 5 kgs", state: "todo" },
    { text: "Gagner en productivité", state: "todo" },
    { text: "Apprendre un nouveau langage", state: "todo" },
    { text: "Faire une mission en freelance", state: "todo" },
    { text: "Organiser un meetup autour de la tech", state: "todo" },
    { text: "Faire un triathlon", state: "todo" },
  ]);

  const [inputValue, setInputValue] = useState("");
  const handleAddTask = () => {
    if (inputValue != "" && !/^\s*$/.test(inputValue)) {
      setTaskList([...taskList, { text: inputValue, state: "todo" }]);
      setInputValue("");
    }
  };

  const toggleCompleted = (id) => {
    const updatedTaskList = taskList.map((task, index) =>
      id === index
        ? task.state == "todo"
          ? { ...task, state: "done" }
          : { ...task, state: "todo" }
        : task
    );

    setTaskList(updatedTaskList);
  };

  const updateTask = (id, text) => {
    const updatedTaskList = taskList.map((task, index) =>
      id === index ? { ...task, text: text } : task
    );
    setTaskList(updatedTaskList);
  };

  const deleteTask = (id) => {
    let tempTaskList = [...taskList];
    tempTaskList.splice(id, 1);

    setTaskList(tempTaskList);
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <TouchableRipple onPress={handleAddTask}>
          <Text style={styles.plus}>➕</Text>
        </TouchableRipple>
        <TextInput
          style={styles.input}
          placeholder="Ajoutez une nouvelle tâche"
          onChangeText={(text) => setInputValue(text)}
          value={inputValue}
        ></TextInput>
      </View>
      {taskList.map((task, index) => (
        <View key={index}>
          <Task
            index={index}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
            onClick={toggleCompleted}
          />
          <View style={styles.separator}></View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 3,
  },
  input: {
    marginLeft: 20,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "darkgrey",
    borderRadius: 20,
    margin: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
    width: "100%",
  },
  plus: {
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: 5,
    padding: 3,
    paddingBottom: 1,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "lightgrey",
  },
});
