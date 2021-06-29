import React, { Component, useEffect, useState } from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import axios from 'axios';

import stylesProduto from './styles';

const Produto = () => {

  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getProdutos();
  }, []);

  getProdutos = () => {
    setIsLoading(true);
    axios.get('https://residencia-ecommerce.herokuapp.com/produto')
      .then((response) => {
        //console.log(response.data);
        setProdutos(response.data);
        setIsLoading(false);
      }).catch(function (error) {
        console.log(error);
        setIsLoading(false);
      });
  }

  return (
    <SafeAreaView>
      {(isLoading) ?
        <View style={stylesProduto.containerAct}>
          <ActivityIndicator size="large" color="#5500dc" />
        </View>
        :
        <FlatList
          data={produtos}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={stylesProduto.listItem}>
              <Image
                source={{ uri: item.url }}
                style={stylesProduto.productImage}
              />
              <View style={stylesProduto.productInfo}>
                <Text style={stylesProduto.listItemText}>{item.nome}</Text>
              </View>
              <View style={stylesProduto.productInfo}>
                <Text style={stylesProduto.listItemText}>{item.descricao}</Text>
              </View>
              <View style={stylesProduto.productInfo}>
                <Text style={stylesProduto.listItemText}>{item.valorUnitario}</Text>
              </View>
            </View>
          )}
        />
      }
    </SafeAreaView>
  );

};

export default Produto;
