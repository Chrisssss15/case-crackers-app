// @ts-nocheck

import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Background from "../assets/background.svg";
import CaseCrackersLogo from "../assets/case-crackers-text-logo.svg";

export default function GameScreen({ setCurrentScreen, teams, setSelectedTeam }) {
  const gameTeams =
    teams && teams.length > 0
      ? teams
      : [
          {
            id: 1,
            name: "Team 1",
            avatar: "🐸",
            lives: 3,
            buttonColor: "#FD9B34",
          },
          {
            id: 2,
            name: "Team 2",
            avatar: "🐷",
            lives: 3,
            buttonColor: "#F242DE",
          },
        ];

  console.log("Teams in gameScreen:", gameTeams);

  const goBack = () => {
    setCurrentScreen("chooseCaseScreen");
    console.log("Terug naar case kiezen");
  };

  const guessAnswer = (team) => {
    setSelectedTeam(team);
    setCurrentScreen("guessAnswerScreen");
    console.log(team.name + " gaat antwoord raden");
    console.log("Team levens bij openen antwoordscherm:", team.lives);
  };

  const openDigitalHint = () => {
    console.log("Digitale hint is nog op slot");
  };

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

        <View style={styles.teamsContainer}>
          {gameTeams.map((team) => (
            <TeamTurnBlock
              key={team.id}
              team={team}
              onGuess={() => guessAnswer(team)}
            />
          ))}
        </View>

        <TouchableOpacity
          style={styles.hintButton}
          onPress={openDigitalHint}
          activeOpacity={0.85}
        >
          <Text style={styles.hintButtonText}>Digitale hint 🔒</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function TeamTurnBlock({ team, onGuess }) {
  const lives = Number(team.lives ?? 3);

  console.log("Hartjes renderen voor:", team.name, "levens:", lives);

  return (
    <View style={styles.teamBlock}>
      <View style={styles.teamInfo}>
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>{team.avatar}</Text>
        </View>

        <Text style={styles.teamName}>{team.name}</Text>
      </View>

      <View style={styles.heartsRow}>
        <Heart filled={lives >= 1} />
        <Heart filled={lives >= 2} />
        <Heart filled={lives >= 3} />
      </View>

      <TouchableOpacity
        style={[styles.guessButton, { backgroundColor: team.buttonColor }]}
        onPress={onGuess}
        activeOpacity={0.85}
      >
        <Text style={styles.guessButtonText}>Antwoord raden</Text>
      </TouchableOpacity>
    </View>
  );
}

function Heart({ filled }) {
  return (
    <Text style={[styles.heart, !filled && styles.emptyHeart]}>
      {filled ? "♥︎" : "♡"}
    </Text>
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
    marginBottom: 90,
  },

  teamsContainer: {
    width: "100%",
    gap: 80,
    marginBottom: 88,
  },

  teamBlock: {
    width: "100%",
    alignItems: "center",
  },

  teamInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 22,
  },

  avatarCircle: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: "#FD9B34",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 18,
  },

  avatarText: {
    fontSize: 38,
  },

  teamName: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 34,
    lineHeight: 40,
  },

  heartsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 18,
    marginBottom: 28,
  },

  heart: {
    fontFamily: "LondrinaSolid",
    color: "#FF1308",
    fontSize: 56,
    lineHeight: 60,
  },

  emptyHeart: {
    color: "#74004E",
  },

  guessButton: {
    width: "92%",
    height: 56,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  guessButtonText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 34,
    lineHeight: 40,
    textAlign: "center",
  },

  hintButton: {
    width: "100%",
    height: 68,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.02)",
  },

  hintButtonText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 31,
    lineHeight: 38,
    textAlign: "center",
  },
});