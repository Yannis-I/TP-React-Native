import React from "react";
import { View, StyleSheet } from "react-native";

export default function PetitCoeur() {
  return (
    <View>
      <div className="petitCoeur" style={stylesCoeur.petitCoeur}>
        🖕
      </div>
    </View>
  );
}

const stylesCoeur = StyleSheet.create({
  petitCoeur: {
    fontSize: 155,
  },
});
