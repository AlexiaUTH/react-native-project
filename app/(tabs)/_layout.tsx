import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#A81012', // Couleur de fond sombre élégante
          height: 80, // Hauteur du bottom navigation
          borderTopWidth: 0, // Pas de bordure
          borderRadius: 15, // Coins arrondis
          marginHorizontal: 10, // Marges sur les côtés pour l'espacement
          shadowColor: '#000', // Couleur de l'ombre
          shadowOpacity: 0.1, // Opacité de l'ombre
          shadowOffset: { width: 0, height: -5 }, // Position de l'ombre
          shadowRadius: 10, // Rayon de l'ombre
        },
        tabBarLabelStyle: {
          fontSize: 12, // Taille de la police
          fontFamily: 'SpaceMono', // Police personnalisée (par exemple chargée via `useFonts`)
          marginBottom: 5, // Espacement sous le label
        },
        tabBarActiveTintColor: '#ffffff', // Couleur active (rouge vif)
        tabBarInactiveTintColor: '#000000', // Couleur inactive (bleu clair doux)
        tabBarIconStyle: {
          // size: 20, // Taille des icônes
        },
        headerShown: useClientOnlyValue(false, true),
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color, size }) => <AntDesign name="home" size={size} color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="Category"
        options={{
          // title: 'Categorie',
          tabBarIcon: ({ color, size }) => <AntDesign name="menufold" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Cart"
        options={{
          title: 'Panier',
          tabBarIcon: ({ color, size }) => <FontAwesome name="shopping-bag" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <AntDesign name="user" size={size} color={color} />,
        }}
      />

    </Tabs>
  );
}
