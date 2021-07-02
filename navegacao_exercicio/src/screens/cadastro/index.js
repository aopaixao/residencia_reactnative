import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Cadastro = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>Página/Screen Cadastro</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.txtBtn}>Ir para a Página/Screen Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#ff0000',
  },
  txtBtn: {
    color: '#fff',
  }
});

export default Cadastro;