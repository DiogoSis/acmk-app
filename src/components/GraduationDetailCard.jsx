import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../styles/colors"; 

export default function GraduationDetailCard({
  graduation,
  kataData,
  defenseData,
  blowsData,
  baseData,
  onBack,
}) {
  const getRelatedData = (ids, data) =>
    data.filter((item) => ids.includes(item.id));

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.glassCard,
          {
            shadowColor: graduation.color,
          },
        ]}
      >
        <Text style={styles.title}>{graduation.name}</Text>
        <Text style={styles.description}>{graduation.description}</Text>

        <Text style={styles.sectionTitle}>Katas</Text>
        {getRelatedData(graduation.kata, kataData).map((kata) => (
          <Text key={kata.id} style={styles.item}>
            {kata.name} - {kata.translation}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>Defesas</Text>
        {getRelatedData(graduation.defense, defenseData).map((defense) => (
          <Text key={defense.id} style={styles.item}>
            {defense.name} - {defense.translation}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>Ataques</Text>
        {getRelatedData(graduation.blows, blowsData).map((blows) => (
          <Text key={blows.id} style={styles.item}>
            {blows.name} - {blows.translation}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>Bases</Text>
        {getRelatedData(graduation.base, baseData).map((base) => (
          <Text key={base.id} style={styles.item}>
            {base.name} - {base.translation}
          </Text>
        ))}

        <TouchableOpacity
          style={[
            styles.button,
            { backgroundColor: graduation.color || "#000" },
          ]}
          onPress={onBack}
        >
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    padding: 14,
  },
  glassCard: {
    flex: 1,
    padding: 26,
    borderRadius: 12,
    maxWidth: 400,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
    color: colors.black,
  },
  description: {
    fontSize: 16,
    color: colors.black,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.black,
    marginTop: 16,
  },
  item: {
    fontSize: 16,
    color: colors.black,
    marginTop: 8,
  },
  button: {
    padding: 12,
    marginTop: 26,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
  },
  buttonText: {
    color: colors.background,
    fontSize: 18,
    fontWeight: 600,
  },
});
