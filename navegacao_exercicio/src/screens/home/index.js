import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>Página/Screen Home</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Cadastro")}
      >
        <Text style={styles.txtBtn}>Ir para a Página/Screen Cadastro</Text>
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

export default Home;