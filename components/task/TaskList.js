import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Keyboard,
  FlatList,
} from "react-native";
import { TouchableRipple } from "react-native-paper";
import Task from "./Task";

export default function TaskList() {
  const [taskList, setTaskList] = useState([
    { id: 1, text: "Faire les courses", state: "done" },
    {
      id: 2,
      text: "Aller à la salle de sport 3 fois par semaine",
      state: "todo",
    },
    { id: 3, text: "Monter à plus de 5000m d'altitude", state: "todo" },
    { id: 4, text: "Acheter mon premier appartement", state: "todo" },
    { id: 5, text: "Perdre 5 kgs", state: "todo" },
    { id: 6, text: "Gagner en productivité", state: "todo" },
    { id: 7, text: "Apprendre un nouveau langage", state: "todo" },
    { id: 8, text: "Faire une mission en freelance", state: "todo" },
    { id: 9, text: "Organiser un meetup autour de la tech", state: "todo" },
    { id: 10, text: "Faire un triathlon", state: "todo" },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    let id = null;
    let i = 1;
    while (id == null) {
      if (taskList.findIndex((task) => task.id == i) === -1) {
        console.log(taskList.findIndex((task) => task.id == i));
        id = i;
        console.log("i : ", i);
        console.log("id : ", id);
      }
      i++;
    }
    if (inputValue != "" && !/^\s*$/.test(inputValue)) {
      setTaskList([...taskList, { id: id, text: inputValue, state: "todo" }]);
      setInputValue("");
      Keyboard.dismiss();
    }
    console.log(taskList);
  };

  const toggleCompleted = (id) => {
    const updatedTaskList = taskList.map((task) =>
      id === task.id
        ? task.state == "todo"
          ? { ...task, state: "done" }
          : { ...task, state: "todo" }
        : task
    );

    setTaskList(updatedTaskList);
  };

  const updateTask = (id, text) => {
    const updatedTaskList = taskList.map((task) =>
      id === task.id ? { ...task, text: text } : task
    );
    setTaskList(updatedTaskList);
  };

  const deleteTask = (id) => {
    let tempTaskList = [...taskList];
    const index = tempTaskList.findIndex((task) => task.id == id);
    if (index !== -1) {
      tempTaskList.splice(index, 1);
    }
    setTaskList([...tempTaskList]);
  };

  const taskElement = ({ item }) => (
    <View>
      <Task
        index={item.id}
        task={item}
        updateTask={updateTask}
        deleteTask={deleteTask}
        onClick={toggleCompleted}
      />
      <View style={styles.separator}></View>
    </View>
  );

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
          onSubmitEditing={handleAddTask}
          value={inputValue}
        ></TextInput>
      </View>
      <FlatList
        data={taskList}
        renderItem={taskElement}
        keyExtractor={(item) => item.id}
      />
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
    flex: 1,
  },
  plus: {
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    borderRadius: 5,
    padding: 3,
    marginLeft: 4,
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "lightgrey",
  },
});
