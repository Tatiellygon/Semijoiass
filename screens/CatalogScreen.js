import React, { useContext } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { products } from '../data/products';
import { CartContext } from '../context/CartContext';

function CatalogScreen({ navigation }) {
  const { addToCart } = useContext(CartContext);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <TouchableOpacity
        onPress={() => navigation.navigate('ProductDetails', { product: item })}
        style={styles.cardContent}
      >
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">{item.name}</Text>
          <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          addToCart(item);
          alert(`${item.name} adicionado ao carrinho!`);
        }}
        style={styles.addButton}
      >
        <Text style={styles.add}>Adicionar ao Carrinho</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Coleção Primavera 2025</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    width: '47%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  cardContent: {
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  textContainer: {
    marginTop: 5,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 3,
  },
  price: {
    fontSize: 14,
    color: '#2e8b57',
    textAlign: 'center',
  },
  addButton: {
    marginTop: 5,
    padding: 5,
    width: '100%',
    alignItems: 'center',
  },
  add: {
    fontSize: 12,
    color: '#4682b4',
    textDecorationLine: 'underline',
  },
  list: {
    justifyContent: 'space-around',
  },
});

export default CatalogScreen;