import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source= {require('../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Semijoias cerâmica & artes</Text>
      <Text style={styles.subtitle}>Beleza artesanal para você brilhar</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Catalog')}
      >
        <Text style={styles.buttonText}>Catálogo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonPromotions}
        onPress={() => navigation.navigate('Promotions')}
      >
        <Text style={styles.buttonText}>Promoções</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContact}
        onPress={() => navigation.navigate('Contact')}
      >
        <Text style={styles.buttonText}>Contato</Text>
      </TouchableOpacity>
      <Text style={styles.copyright}>© 2023 Semijoias cerâmica & artes - Todos os direitos reservados</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#f4a261',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonPromotions: {
    backgroundColor: '#a9a9f5',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonContact: {
    backgroundColor: '#98d7a5',
    padding: 15,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  copyright: {
    fontSize: 12,
    color: '#666',
    position: 'absolute',
    bottom: 10,
  },
});

export default HomeScreen;