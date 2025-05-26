// import { StyleSheet } from 'react-native';
// import { Text, View } from '@/components/Themed';

// export default function Cart() {
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



import React, { useState } from "react";
import { View, Text, Button, Alert, FlatList, StyleSheet, Image } from "react-native";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const TaskManager = () => {

  const [tasks, setTasks] = useState([
    { id: "1", title: "Acheter du lait", image: "https://picsum.photos/50", price: 2.5, quantity: 1 },
    { id: "2", title: "Faire du sport", image: "https://picsum.photos/50", price: 0, quantity: 1 },
    { id: "3", title: "Lire un livre", image: "https://picsum.photos/50", price: 10, quantity: 1 },
  ]);

  const increaseQuantity = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, quantity: task.quantity + 1 } : task
      )
    );
  };

  const decreaseQuantity = (taskId: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId && task.quantity > 1
          ? { ...task, quantity: task.quantity - 1 }
          : task
      )
    );
  }  

  const handleDeleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    console.log(`Tâche ${taskId} supprimée`);
  };

  const handleEditTask = (taskId: string) => {
    console.log(`Tâche ${taskId} modifiée`);
    // Ici, tu pourrais naviguer vers un écran pour modifier la tâche.
  };

  const showTaskOptions = (taskId: string, taskTitle: string) => {
    Alert.alert(
      "",
        `Êtes-vous sûr de vouloir supprimer "${taskTitle}" ?`,
      [
        {
          text: "Supprimer",
          onPress: () => handleDeleteTask(taskId),
          style: "destructive",
        },
        {
          text: "Annuler",
          onPress: () => console.log("Action annulée"),
          style: "cancel",
        },
      ]
    );
  };

  const renderTask = ({ item }: { item: { id: string; title: string; image: string; price: number; quantity: number } }) => (
    <View style={styles.taskItem}>
      <Image source={{ uri: item.image }} style={styles.taskImage} />
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.taskTitle}>{item.title}</Text>
        <Text style={styles.taskPrice}>{item.price} €</Text>
      </View>
      <View style={styles.quantityContainer}>
        <Button title="-" onPress={() => decreaseQuantity(item.id)} />
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <Button title="+" onPress={() => increaseQuantity(item.id)} />
      </View>
      <MaterialIcons name="delete" size={30} color="#A81012" onPress={() => showTaskOptions(item.id, item.title)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderTask}
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
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  taskImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  taskPrice: {
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
    fontWeight: "bold",
  },
});

export default TaskManager;