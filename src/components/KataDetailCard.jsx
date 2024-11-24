import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function KataDetailCard({ kata, graduation, onBack }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{kata.name}</Text>
      <Text style={styles.subTitle}>{kata.translation}</Text>
      <Text style={styles.description}>{kata.meaning}</Text>
      <Text style={styles.detail}>Movimentos: {kata.movement}</Text>
      <Text style={styles.detail}>Graduação:</Text>
      {graduation ? (
        <>
          <Text style={[styles.detail, { color: graduation.color }]}>
            {graduation.name}
          </Text>
          <Text style={styles.detail}>{graduation.description}</Text>
        </>
      ) : (
        <Text style={styles.detail}>Graduação não encontrada</Text>
      )}
      <Button title="Voltar" onPress={onBack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    margin: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  subTitle: {
    fontSize: 18,
    fontStyle: "italic",
    marginBottom: 8,
    color: "#555",
  },
  description: {
    fontSize: 16,
    marginBottom: 12,
    color: "#666",
  },
  detail: {
    fontSize: 14,
    color: "#777",
    marginBottom: 6,
  },
});
