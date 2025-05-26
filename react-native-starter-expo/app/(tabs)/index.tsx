import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import ProductCard from '../../components/ProductCard';

// Exemple de données statiques (à remplacer par des vraies données plus tard)
const products = [
  {
    id: '1',
    name: 'Produit 1',
    price: 49.99,
    image: 'https://picsum.photos/150',
  },
  {
    id: '2',
    name: 'Produit 2',
    price: 79.99,
    image: 'https://picsum.photos/200',
  },
  {
    id: '3',
    name: 'Produit 3',
    price: 95.49,
    image: 'https://picsum.photos/400',
  },
];

export default function Home() {
  const router = useRouter();

  const handlePressProduct = (id: string) => {
    router.push(`/product/${id}`); // Exemple route produit à créer plus tard
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenue sur la boutique</Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <ProductCard product={item} onPress={() => handlePressProduct(item.id)} />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#fff',
  },
  listContent: {
    paddingHorizontal: 0,
  },
});
