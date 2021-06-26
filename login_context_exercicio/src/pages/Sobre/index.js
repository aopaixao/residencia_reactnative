import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../../context/AuthContext';

const Sobre = ({ navigation }) => {
  const { state, signout } = useContext(AuthContext);

  return (
    <View style={styles.master}>
      <Text style={styles.header}>Sobre</Text>
      <Button onPress={signout} title="Logout" type="clear" />
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
    marginBottom: 8,
  },
});

export default Sobre;