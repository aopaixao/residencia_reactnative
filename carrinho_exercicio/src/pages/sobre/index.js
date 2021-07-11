import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Sobre = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Sobre;