import React, { useContext, useEffect, useState } from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity, Button
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';

import stylesProduto from './styles';
import CarrinhoContext from '../../../context/CarrinhoContext';

const ListagemProdutos = () => {
  const navigation = useNavigation();
  const [produtos, setProdutos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { addProduto } = useContext(CarrinhoContext);

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
          renderItem={({ item }) => {
            return (
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
                <View>
                  <TouchableOpacity
                    style={stylesProduto.btnAddCart}
                    onPress={() => addProduto({ item })}
                  >
                    <Icon name="add-circle-outline" type="ionicon" size={36} color='#ffcc00' />
                  </TouchableOpacity>
                </View>
              </View>
            )
          }}
        />
      }
    </SafeAreaView>
  );

};

export default ListagemProdutos;
