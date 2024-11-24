import React, { useState, useEffect } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import KataDetailCard from "../components/KataDetailCard";
import kataData from "../static/kata.json"; 
import graduationData from "../static/graduation.json"; 

export default function KataScreen() {
  const [selectedKata, setSelectedKata] = useState(null);
  const [kataList, setKataList] = useState([]);
  const [graduationList, setGraduationList] = useState([]);

  useEffect(() => {
    // Carrega os dados de katas e graduações
    setKataList(kataData);
    setGraduationList(graduationData);
  }, []);

  const getGraduationDetails = (graduationId) => {
    // Encontra a faixa correspondente à graduação
    return graduationList.find((grad) => grad.id === graduationId);
  };

  if (selectedKata) {
    // Obtém os detalhes da graduação do kata
    const graduationDetails = getGraduationDetails(selectedKata.graduation);
    return (
      <KataDetailCard
        kata={selectedKata}
        graduation={graduationDetails} // Passa os detalhes da graduação
        onBack={() => setSelectedKata(null)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={kataList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.kataItem}
            onPress={() => setSelectedKata(item)}
          >
            <Text style={styles.kataText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 14,
  },
  kataItem: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  kataText: {
    fontSize: 18,
    color: "#333",
  },
});
