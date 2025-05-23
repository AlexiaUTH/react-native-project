import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function Splash() {
  useEffect(() => {
    const prepare = async () => {
      // Simule un chargement de 2 secondes
      await new Promise(resolve => setTimeout(resolve, 2000));
      await SplashScreen.hideAsync();
    };
    prepare();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>WildMoon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff', // fond clair
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FF6600', // couleur personnalisée
    fontFamily: 'SpaceMono', // ou une autre police que tu charges via expo-font
  },
});