import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';

const ContactScreen = () => {
  const openWhatsApp = () => Linking.openURL('https://wa.me/3899110687');
  const openInstagram = () => Linking.openURL('https://instagram.com/semijoiasceramicaartes');
  const openEmail = () => Linking.openURL('mailto:contato@semijoias.com.br');

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.contactItem} onPress={openWhatsApp}>
        <Text style={styles.contactText}>WhatsApp: (38)9911-0687</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contactItem} onPress={openInstagram}>
        <Text style={styles.contactText}>Instagram: @semijoiaaceramicaartes</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.contactItem} onPress={openEmail}>
        <Text style={styles.contactText}>E-mail: cirleisouza@hotmail.com.br</Text>
      </TouchableOpacity>
      <Text style={styles.hours}>Horário de Atendimento</Text>
      <Text style={styles.hoursText}>Segunda a Sexta: Aberto 24 horas</Text>
      <Text style={styles.hoursText}>Sábado: Aberto 24 horas</Text>
      <Text style={styles.hoursText}>Domingo: Aberto 24 horas</Text>
    </View>
  );
};

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
  contactItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
  },
  contactText: {
    fontSize: 16,
    color: '#2e8b57',
  },
  hours: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    textAlign: 'center',
  },
  hoursText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
  },
});

export default ContactScreen;