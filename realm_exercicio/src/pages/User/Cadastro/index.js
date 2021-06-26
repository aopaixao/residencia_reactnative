import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, KeyboardAvoidingView, TextInput, Button } from 'react-native';
import { addUser } from '../../../data/user/user_db';

const CadastroUsuario = ({ navigation }) => {
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userLogin, setUserLogin] = useState(null);
  const [userPassword, setUserPassword] = useState(null);

  function saveUser() {
    addUser(userName, userEmail, userLogin, userPassword);
    navigation.navigate('Home')
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container} >
        <KeyboardAvoidingView
          behavior="padding"
          style={{ flex: 1, justifyContent: 'space-between' }}>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            onChangeText={user_name => setUserName({ user_name })}
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            onChangeText={user_email => setUserEmail({ user_email })}
          />
          <TextInput
            style={styles.input}
            placeholder="Login"
            onChangeText={user_login => setUserLogin({ user_login })}
            maxLength={100}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            onChangeText={user_password => setUserPassword({ user_password })}
            maxLength={100}
          />
          <Button
            title="Cadastrar"
            style={styles.btn}
            onPress={saveUser}
          />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 6,
    padding: 16,
  },
  input: {
    height: 40,
    margin: 6,
    borderWidth: 1,
  },
  btn: {
    color: '#ffcc00',
  }
});

export default CadastroUsuario;