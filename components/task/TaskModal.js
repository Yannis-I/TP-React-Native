import React, { useState } from "react";
import { StyleSheet, View, Text, Alert, Modal, TextInput, Keyboard } from "react-native";
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
    Keyboard.dismiss();
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
            numberOfLines={2}
            maxLength={80}
            style={styles.modalText}
            onChangeText={(text) => setInputValue(text)}
            onSubmitEditing={handlePressClose}
            value={inputValue}
          ></TextInput>
          <TouchableRipple style={styles.selectButton} onPress={handlDelete}>
            <Text style={styles.supressText}>Supprimer</Text>
          </TouchableRipple>
          <TouchableRipple
            style={[styles.button, styles.buttonClose]}
            onPress={() => handlePressClose()}
          >
            <Text style={styles.textStyle}>Enregistrer</Text>
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
    minWidth: "75%",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
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
    width: 200,
    marginBottom: 5,
    textAlign: "center",
    fontWeight: "bold",
    color: "rgba(0, 0, 0, 0.5)",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
  },
});
