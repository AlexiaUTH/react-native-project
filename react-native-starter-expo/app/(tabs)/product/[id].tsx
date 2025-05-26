import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button, Alert } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useCart } from '../../../context/CartContext';

// Exemple de données statiques (à remplacer par fetch ou contexte plus tard)
const products = [
  {
    id: '1',
    name: 'Produit 1',
    price: 49.99,
    description: "Description du produit 1, super qualité, etc.",
    image: 'https://picsum.photos/150',
  },
  {
    id: '2',
    name: 'Produit 2',
    price: 79.99,
    description: "Description du produit 2, encore mieux !",
    image: 'https://picsum.photos/200',
  },
  {
    id: '3',
    name: 'Produit 3',
    price: 95.49,
    image: 'https://picsum.photos/400',
  },
];

export default function ProductDetail() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { addToCart } = useCart();
  const router = useRouter();

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <View style={styles.center}>
        <Text>Produit introuvable</Text>
      </View>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    Alert.alert('Panier', `${product.name} ajouté au panier !`);
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Ajouter au panier" onPress={handleAddToCart} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 8,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 12,
  },
  price: {
    fontSize: 22,
    color: '#888',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 10,
  },
});
