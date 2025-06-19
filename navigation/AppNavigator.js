import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';
import CatalogScreen from '../screens/CatalogScreen';
import PromotionsScreen from '../screens/PromotionsScreen';
import ContactScreen from '../screens/ContactScreen';
import { CartProvider } from '../context/CartContext';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Semijoias Cerâmica & Artes', headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetailsScreen}
            options={{ title: 'Detalhes do Produto', headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ title: 'Carrinho', headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name="Catalog"
            component={CatalogScreen}
            options={{ title: 'Catálogo de Produtos', headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name="Promotions"
            component={PromotionsScreen}
            options={{ title: 'Promoções', headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name="Contact"
            component={ContactScreen}
            options={{ title: 'Fale Conosco', headerTitleAlign: 'center' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
};

export default AppNavigator;