import React from 'react';
import { View, Text, FlatList, Image, Button, Alert, StyleSheet } from 'react-native';
import { useCart } from '../../context/CartContext'; // Suppose qu'on utilise le contexte CartContext
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function CartScreen() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();

  const showRemoveAlert = (id: string, name: string) => {
    Alert.alert(
      "Supprimer l'article",
      `Voulez-vous supprimer "${name}" du panier ?`,
      [
        {
          text: "Annuler",
          style: "cancel",
        },
        {
          text: "Supprimer",
          style: "destructive",
          onPress: () => removeFromCart(id),
        },
      ]
    );
  };

  const renderCartItem = ({ item }: { item: any }) => (
    <View style={styles.cartItem}>
      <Image source={{ uri: item.image }} style={styles.cartImage} />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.cartTitle}>{item.name}</Text>
        <Text style={styles.cartPrice}>{item.price} €</Text>
      </View>
      <View style={styles.quantityContainer}>
        <Button title="-" onPress={() => updateQuantity(item.id, item.quantity - 1)} />
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <Button title="+" onPress={() => updateQuantity(item.id, item.quantity + 1)} />
      </View>
      <MaterialIcons
        name="delete"
        size={24}
        color="#A81012"
        onPress={() => showRemoveAlert(item.id, item.name)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={renderCartItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>Votre panier est vide</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cartImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  cartTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  cartPrice: {
    fontSize: 14,
    color: "#555",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "600",
  },
  emptyText: {
    textAlign: "center",
    fontSize: 18,
    color: "#999",
    marginTop: 50,
  },
});