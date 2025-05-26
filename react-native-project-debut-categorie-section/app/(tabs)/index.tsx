// import { StyleSheet } from 'react-native';
// import { Text, View } from '@/components/Themed';

// export default function TabOneScreen() {
//   return (
//     <View style={styles.container}>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });

import React from 'react';
import { View, Text, FlatList } from 'react-native';
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
];

export default function Home() {
  const router = useRouter();

  const handlePressProduct = (id: string) => {
    router.push(`/product/${id}`); // Exemple route produit à créer plus tard
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>
        Bienvenue sur la boutique
      </Text>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <ProductCard product={item} onPress={() => handlePressProduct(item.id)} />
        )}
      />
    </View>
  );
}
