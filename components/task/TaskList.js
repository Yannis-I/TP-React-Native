import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
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
    setTaskList([...taskList, { text: inputValue, state: "todo" }]);
  };

  const toggleCompleted = (id) => {
    const updateTaskList = taskList.map((task, index) =>
      id === index
        ? task.state == "todo"
          ? { ...task, state: "done" }
          : { ...task, state: "todo" }
        : task
    );

    setTaskList(updateTaskList);
  };

  return (
    <View>
      <View style={styles.inputContainer}>
        <Text style={styles.plus} onPress={handleAddTask}>
          ➕
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Ajoutez une nouvelle tâche"
          onChangeText={(text) => setInputValue(text)}
          value={inputValue}
        ></TextInput>
      </View>
      {taskList.map((task, index) => (
        <Task key={index} index={index} task={task} onClick={toggleCompleted} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
  },
  input: {
    marginLeft: 20,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "darkgrey",
    borderRadius: 20,
    margin: 5,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
});
