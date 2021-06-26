import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar, FlatList, View } from 'react-native';
import realm_user, { listUsers } from "../../../data/user/user_db";

const ListagemUsuario = () => {
  const [user, setUser] = useState(listUsers());

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={listUsers()}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text>{item.user_id}</Text>
                <Text>{item.user_name}</Text>
                <Text>{item.user_email}</Text>
              </View>
            )
          }} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    padding: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  btn: {
    color: '#ffcc00',
  }
});

export default ListagemUsuario;