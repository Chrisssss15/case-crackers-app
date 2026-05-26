// @ts-nocheck

import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { getCases } from "../services/api";
import Background from "../assets/background.svg";
import CaseCrackersLogo from "../assets/case-crackers-text-logo.svg";

export default function ChooseCaseScreen({ setCurrentScreen }) {
  const [searchText, setSearchText] = useState("");
  const [selectedCase, setSelectedCase] = useState(null);
  const [cases, setCases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCases() {
      try {
        const backendCases = await getCases();
        setCases(backendCases);
      } catch (error) {
        console.log("Fout bij ophalen case:", error);
        alert(error.message || "Kon de case niet ophalen.");
      } finally {
        setLoading(false);
      }
    }

    loadCases();
  }, []);

  const goBack = () => {
    setCurrentScreen("teamsScreen");
    console.log("Terug naar teams screen");
  };

  const openCase = (caseItem) => {
    setSelectedCase(caseItem);
    console.log("Gekozen case:", caseItem.victim);
    console.log("Case titel:", caseItem.title);
    console.log("Case beschrijving:", caseItem.description);
  };

  const goNext = () => {
    if (!selectedCase) {
      alert("Kies eerst een case.");
      return;
    }

    setCurrentScreen("gameScreen");
  };

  const filteredCases = cases.filter((item) =>
    item.victim.toLowerCase().includes(searchText.toLowerCase())
  );

  if (loading) {
    return (
      <View style={styles.page}>
        <Background style={styles.background} />

        <View style={styles.content}>
          <CaseCrackersLogo style={styles.logo} />
          <Text style={styles.title}>Cases laden...</Text>
        </View>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.pageContent}
      showsVerticalScrollIndicator={false}
    >
      <Background style={styles.background} />

      <View style={styles.content}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={goBack}
          activeOpacity={0.8}
        >
          <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>

        <CaseCrackersLogo style={styles.logo} />

        <Text style={styles.title}>Kies een case</Text>

        <Text style={styles.sectionTitle}>Wie is het slachtoffer?</Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Zoek op naam"
          placeholderTextColor="#BDBDBD"
          value={searchText}
          onChangeText={setSearchText}
        />

        <Text style={styles.otherCasesTitle}>Andere cases</Text>

        {filteredCases.length === 0 ? (
          <Text style={styles.noCasesText}>Geen cases gevonden.</Text>
        ) : (
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardsRow}
          >
            {filteredCases.map((item) => (
              <CaseCard
                key={item.id}
                victim={item.victim}
                isSelected={selectedCase?.id === item.id}
                onPress={() => openCase(item)}
              />
            ))}
          </ScrollView>
        )}

        <TouchableOpacity
          style={styles.nextButton}
          onPress={goNext}
          activeOpacity={0.85}
        >
          <Text style={styles.nextButtonText}>Ga verder</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function CaseCard({ victim, onPress, isSelected }) {
  return (
    <TouchableOpacity
      style={[styles.caseCard, isSelected && styles.selectedCaseCard]}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <Text style={styles.cardTopText}>SLACHTOFFER</Text>

      <View style={styles.cardImageArea}>
        <Text style={styles.questionMarkLeft}>?</Text>
        <Text style={styles.questionMarkRight}>?</Text>

        <View style={styles.magnifierCircle}>
          <View style={styles.avatarHead} />
          <View style={styles.avatarBody} />
        </View>

        <View style={styles.magnifierHandle} />
      </View>

      <Text style={styles.cardName}>{victim}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#4D0060",
  },

  pageContent: {
    minHeight: "100%",
    position: "relative",
    overflow: "hidden",
  },

  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  content: {
    flex: 1,
    paddingHorizontal: 35,
    paddingTop: 58,
    paddingBottom: 70,
    minHeight: 874,
  },

  backButton: {
    width: 56,
    height: 56,
    justifyContent: "center",
    marginBottom: 24,
  },

  backButtonText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 58,
    lineHeight: 58,
  },

  logo: {
    alignSelf: "center",
    width: 219,
    height: 44,
    marginBottom: 80,
  },

  title: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 38,
    lineHeight: 45,
    textAlign: "center",
    marginBottom: 110,
  },

  sectionTitle: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 34,
    lineHeight: 40,
    textAlign: "center",
    marginBottom: 36,
  },

  searchInput: {
    width: "100%",
    height: 64,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    paddingHorizontal: 22,
    fontFamily: "LondrinaSolid",
    fontSize: 20,
    color: "#222222",
    marginBottom: 95,
  },

  otherCasesTitle: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 34,
    lineHeight: 40,
    textAlign: "center",
    marginBottom: 40,
  },

  noCasesText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 24,
    lineHeight: 30,
    textAlign: "center",
    marginBottom: 40,
  },

  cardsRow: {
    paddingRight: 35,
    gap: 24,
  },

  caseCard: {
    width: 195,
    height: 250,
    backgroundColor: "#56ACE8",
    borderRadius: 14,
    paddingTop: 20,
    paddingHorizontal: 14,
    borderWidth: 5,
    borderColor: "#6EC2FF",
    position: "relative",
  },

  cardTopText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 23,
    lineHeight: 28,
    textAlign: "center",
    marginBottom: 18,
  },

  cardImageArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  questionMarkLeft: {
    position: "absolute",
    left: 0,
    top: 28,
    fontFamily: "LondrinaSolid",
    color: "#FFD75E",
    fontSize: 52,
    transform: [{ rotate: "-10deg" }],
  },

  questionMarkRight: {
    position: "absolute",
    right: 0,
    top: 40,
    fontFamily: "LondrinaSolid",
    color: "#FFD75E",
    fontSize: 52,
    transform: [{ rotate: "12deg" }],
  },

  magnifierCircle: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 8,
    borderColor: "#D9782C",
    backgroundColor: "#F2B272",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarHead: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#DCEBFA",
    marginBottom: 6,
  },

  avatarBody: {
    width: 48,
    height: 28,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "#DCEBFA",
  },

  magnifierHandle: {
    position: "absolute",
    width: 42,
    height: 12,
    backgroundColor: "#D9782C",
    borderRadius: 8,
    bottom: 36,
    right: 28,
    transform: [{ rotate: "28deg" }],
  },

  cardName: {
    position: "absolute",
    bottom: 50,
    left: 0,
    right: 0,
    fontFamily: "LondrinaSolid",
    color: "#1C2DCC",
    fontSize: 30,
    lineHeight: 34,
    textAlign: "center",
    transform: [{ rotate: "-8deg" }],
  },

  selectedCaseCard: {
    borderColor: "#FFFFFF",
    borderWidth: 6,
  },

  nextButton: {
    width: "100%",
    height: 68,
    backgroundColor: "#FD9B34",
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 45,
  },

  nextButtonText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 34,
    lineHeight: 40,
    textAlign: "center",
  },
});