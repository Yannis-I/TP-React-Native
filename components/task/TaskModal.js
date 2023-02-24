import React, { useState } from "react";
import { StyleSheet, View, Text, Alert, Modal, TextInput } from "react-native";
import { TouchableRipple } from "react-native-paper";

export default function TaskModal({
  index,
  isSelected,
  setSelected,
  task,
  updateTask,
  deleteTask,
}) {
  const [inputValue, setInputValue] = useState(task.text);

  const handlePressClose = () => {
    if (inputValue != "" && !/^\s*$/.test(inputValue)) {
      setSelected(!isSelected);
      updateTask(index, inputValue);
    } else {
      setSelected(!isSelected);
      setInputValue(task.text);
    }
  };

  const handlDelete = () => {
    setSelected(!isSelected);
    deleteTask(index);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isSelected}
      onRequestClose={() => {
        setSelected(!isSelected);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            editable
            multiline
            numberOfLines={3}
            maxLength={80}
            style={styles.modalText}
            onChangeText={(text) => setInputValue(text)}
            value={inputValue}
          ></TextInput>
          <TouchableRipple style={styles.selectButton} onPress={handlDelete}>
            <Text style={styles.supressText}>Supprimer</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.button, styles.buttonClose]}
            onPress={() => handlePressClose()}
          >
            <Text style={styles.textStyle}>Fermer</Text>
          </TouchableRipple>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  selectButton: {
    padding: 10,
  },
  supressText: {
    color: "red",
  },
  buttonClose: {
    marginTop: 10,
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    height: "fit-content",
  },
});
