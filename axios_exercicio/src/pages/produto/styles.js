import React from 'react';
import { StyleSheet } from 'react-native';

const stylesProduto = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center'
  },
  containerAct: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  text: {
    fontSize: 20,
    color: '#101010',
    marginTop: 60,
    fontWeight: '700'
  },
  listItem: {
    marginTop: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8
  },
  productInfo: {
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 18,
    width: 200,
    padding: 10
  }
});

export default stylesProduto;