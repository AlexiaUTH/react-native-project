import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const categories = [
  { id: '1', name: 'Électronique', image: require('../../assets/images/adaptive-icon.png') },
  { id: '2', name: 'Mode', image: require('../../assets/images/adaptive-icon.png') },
  { id: '3', name: 'Maison', image: require('../../assets/images/adaptive-icon.png') },
  { id: '4', name: 'Sports', image: require('../../assets/images/adaptive-icon.png') },
  { id: '5', name: 'Livres', image: require('../../assets/images/adaptive-icon.png') },
];

const CategoryListScreen = ({ navigation }: { navigation: any }) => {
  const renderItem = ({ item }: { item: { id: string; name: string; image: any } }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => navigation.navigate('CategoryDetail', { categoryId: item.id, categoryName: item.name })}
    >
      <Image source={item.image} style={styles.categoryImage} />
      <View style={styles.textContainer}>
        <Text style={styles.categoryText}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#000000",
  },
  categoryItem: {
    width: screenWidth,
    height: 150,
    marginBottom: 10,
  },
  categoryImage: {
    // border: 1px solid black,
    borderRadius: 25,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default CategoryListScreen;