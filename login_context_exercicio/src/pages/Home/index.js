import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../../context/AuthContext';

const Home = ({ navigation }) => {
  const { state } = useContext(AuthContext);

  return (
    <View style={styles.master}>
      <Text style={styles.header}>Home</Text>
      <Text style={{ fontSize: 28 }}>Bem-vindo, {state.email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  master: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
  },
});

export default Home;
