import React, { useContext, useState } from 'react';
import { View, SafeAreaView, StyleSheet, FlatList, Text } from 'react-native';
import CarrinhoContext from '../../context/CarrinhoContext';


const Carrinho = () => {

  const context = useContext(CarrinhoContext);
  console.log(context.produtos);

  const valorTotal = context.produtos.reduce((total, prod) => total + prod.item.valorUnitario, 0).toFixed(2);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title} >Itens no Carrinho</Text>
      <FlatList
        data={context.produtos}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.rowcontainer}>
              <Text style={styles.text}>Id: {item.item.id}</Text>
              <Text style={styles.text}>Nome: {item.item.nome}</Text>
              <Text style={styles.text}>Valor: {item.item.valorUnitario}</Text>
            </View>
          )
        }}
      />
      <View>
        <Text style={styles.title} >Total: {valorTotal}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowcontainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 30,
  },
  text: {
    padding: 10,
    fontSize: 20,
    color: '#101010',
  },
  delete: {
    alignSelf: 'flex-end',
    padding: 8,
    fontSize: 15,
  }
});

export default Carrinho;