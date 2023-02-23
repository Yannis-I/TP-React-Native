import React, { useState } from "react";
import { View } from "react-native";
import Task from "./Task";

export default function TaskList() {
  const [taskList, setTaskList] = useState([
    { text: "Faire les courses", state: "done" },
    { text: "Aller à la salle de sport 3 fois par semaine", state: "todo" },
    { text: "Monter à plus de 5000m d altitude", state: "todo" },
    { text: "Acheter mon premier appartement", state: "todo" },
    { text: "Perdre 5 kgs", state: "todo" },
    { text: "Gagner en productivité", state: "todo" },
    { text: "Apprendre un nouveau langage", state: "todo" },
    { text: "Faire une mission en freelance", state: "todo" },
    { text: "Organiser un meetup autour de la tech", state: "todo" },
    { text: "Faire un triathlon", state: "todo" },
  ]);

  return (
    <View>
      {taskList.map((task, index) => (
        <Task key={index} text={task.text} state={task.state} />
      ))}
    </View>
  );
}
