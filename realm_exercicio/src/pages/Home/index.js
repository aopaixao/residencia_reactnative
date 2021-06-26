import React from 'react';
import { View, Button, Text } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
      }}>
      <Text text="Cadastro de Usuários com Realm" />
      <Button
        title="Cadastrar"
        onPress={() => navigation.navigate('CadastroUsuario')}
      />
      <Button
        title="Listagem"
        onPress={() => navigation.navigate('ListagemUsuario')}
      />
    </View>
  );
}

export default Home;