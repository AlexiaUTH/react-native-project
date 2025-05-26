import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

type ProductCardProps = {
    product: {
        id: string;
        name: string;
        price: number;
        image: string;
    };
    onPress: () => void;
};

export default function ProductCard({ product, onPress }: ProductCardProps) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 160,
        margin: 8,
        borderRadius: 8,
        backgroundColor: '#fff',
        elevation: 3,
        padding: 10,
    },
    image: {
        width: '100%',
        height: 120,
        borderRadius: 8,
    },
    name: {
        marginTop: 8,
        fontWeight: '600',
        fontSize: 16,
    },
    price: {
        marginTop: 4,
        color: '#888',
    },
});
