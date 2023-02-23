import React, { useState } from "react";
import { Button, View } from "react-native";
import PetitCoeur from "./PetitCoeur";

export default function ButtonLike() {
  const [afficherComposant, setAfficherComposant] = useState(false);

  const handlePress = () => {
    setAfficherComposant(!afficherComposant);
  };

  return (
    <View>
      {afficherComposant && <PetitCoeur />}
      <Button title="Click moi dessus" onPress={handlePress} />
    </View>
  );
}
