import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, ScrollView } from "react-native";
import graduationData from "../static/graduation.json";
import kataData from "../static/kata.json";
import defenseData from "../static/defense.json";
import blowsData from "../static/blows.json"; 
import baseData from "../static/base.json"; 
import GraduationDetailCard from "../components/GraduationDetailCard";

export default function GraduationScreen() {
  const [selectedGraduation, setSelectedGraduation] = useState(null);

  const getRelatedData = (ids, data) => data.filter((item) => ids.includes(item.id));

  const handleGraduationSelect = (graduation) => {
    setSelectedGraduation(graduation);
  };

  const handleBack = () => {
    setSelectedGraduation(null);
  };

  if (selectedGraduation) {
    return (
      <GraduationDetailCard
        graduation={selectedGraduation}
        kataData={kataData}
        defenseData={defenseData}
        blowsData={blowsData}
        baseData={baseData}
        onBack={handleBack}
      />
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Graduações</Text>
      {graduationData.map((graduation) => (
        <TouchableOpacity
          key={graduation.id}
          style={[styles.card, { shadowColor: graduation.color || '#000', borderColor: graduation.color || '#000' }]} // Definindo cor padrão
          onPress={() => handleGraduationSelect(graduation)}
        >
          <Text style={styles.cardText}>{graduation.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  card: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    borderWidth: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "#fff",
  },
  cardText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000000", 
  },
});
