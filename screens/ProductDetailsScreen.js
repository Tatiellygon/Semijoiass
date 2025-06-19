import React, { useContext } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';

const ProductDetailsScreen = ({ route, navigation }) => {
  const { product } = route.params || {};
  const { cart, addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    if (!product) {
      alert('Produto não encontrado!');
      return;
    }
    addToCart(product);
    alert(`${product.name || 'Produto'} adicionado ao carrinho!`);
  };

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.error}>Erro: Produto não encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.name}>{product.name || 'Nome indisponível'}</Text>
      <Text style={styles.price}>
        R$ {product.price ? product.price.toFixed(2) : '0.00'}
      </Text>
      <Text style={styles.description}>
        {product.description || 'Descrição indisponível'}
      </Text>
      <Button title="Adicionar ao Carrinho" onPress={handleAddToCart} color="#2e8b57" />
      <Button
        title="Ver Carrinho"
        onPress={() => navigation.navigate('Cart', { cart })}
        color="#4682b4"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    color: '#2e8b57',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default ProductDetailsScreen;