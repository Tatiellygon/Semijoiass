import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PromotionsScreen = () => (
  <View style={styles.container}>
    <View style={styles.promotion}>
      <Text style={styles.promotionText}>Semana do Estilo</Text>
      <Text style={styles.discount}>30% OFF em Brincos</Text>
    </View>
    <View style={styles.promotion}>
      <Text style={styles.promotionText}>Semana do Estilo</Text>
      <Text style={styles.discount}>20% OFF em Pulseiras</Text>
    </View>
    <View style={styles.promotion}>
      <Text style={styles.promotionText}>Semana do Estilo</Text>
      <Text style={styles.discount}>   40% OFF na compra{'\n'}de 1 Pulseira e 1 Brinco</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  promotion: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  promotionText: {
    fontSize: 16,
    color: '#666',
  },
  discount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e8b57',
  },
});

export default PromotionsScreen;
