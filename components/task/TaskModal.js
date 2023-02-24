import React, { useState } from "react";
import { StyleSheet, View, Text, Alert, Modal, Pressable } from "react-native";

export default function TaskModal({ isSelected, setSelected, task }) {

  return (
       <Modal
        animationType="slide"
        transparent={true}
        visible={isSelected}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setSelected(!isSelected);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{task.text}</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setSelected(!isSelected)}>
              <Text style={styles.textStyle}>Fermer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
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
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
