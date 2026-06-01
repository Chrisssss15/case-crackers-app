// @ts-nocheck

import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { checkAnswer } from "../services/api";
import Background from "../assets/background.svg";
import CaseCrackersLogo from "../assets/case-crackers-text-logo.svg";
import HeartIcon from "../assets/heart.svg";
import EmptyHeartIcon from "../assets/empty-heart.svg";

export default function GuessAnswerScreen({
  // setCurrentScreen,
  // team,
  // updateTeamLives,
  setCurrentScreen,
  team,
  teams,
  updateTeamLives,
}) {
  const [answer, setAnswer] = useState("");
  const [lives, setLives] = useState(team?.lives ?? 3);
  const [isSending, setIsSending] = useState(false);

  const currentTeam = team || {
    id: 1,
    name: "Team 1",
    avatar: "🐸",
    lives: 3,
  };

  useEffect(() => {
    setLives(currentTeam.lives ?? 3);
  }, [currentTeam.lives]);

  const goBack = () => {
    setCurrentScreen("gameScreen");
    console.log("Terug naar game screen");
  };

  const updateLives = (newLives) => {
    setLives(newLives);

    if (updateTeamLives && currentTeam.id) {
      updateTeamLives(currentTeam.id, newLives);
    }

    console.log("Levens aangepast naar:", newLives);
  };

  const sendAnswer = async () => {
    if (!answer.trim()) {
      alert("Vul eerst een antwoord in.");
      return;
    }

    if (isSending) {
      return;
    }

    setIsSending(true);

    try {
      const result = await checkAnswer(answer);

      console.log("Backend resultaat:", result);

      if (result.correct) {
        // alert(result.reason || "Goed antwoord!");
        setCurrentScreen("goodAnswerScreen");
        return;
      }

      const newLives = lives - 1;

      updateLives(newLives);

      console.log("Fout antwoord voor team:", currentTeam.name);
      console.log("Levens over voor frontend team:", newLives);

      const updatedTeams = (teams || []).map((teamItem) =>
        String(teamItem.id) === String(currentTeam.id)
          ? { ...teamItem, lives: newLives }
          : teamItem
      );

      const allTeamsHaveNoLives =
        updatedTeams.length > 0 &&
        updatedTeams.every((teamItem) => Number(teamItem.lives ?? 3) <= 0);

      if (allTeamsHaveNoLives) {
        alert("Alle teams hebben geen levens meer. Jullie krijgen nu het antwoord.");
        setCurrentScreen("reflectionScreen");
        return;
      }

      // alert(result.reason || "Dat antwoord klopt nog niet helemaal.");
      setCurrentScreen("wrongAnswerScreen");
    } catch (error) {
      console.log("Fout bij checken antwoord:", error);

      alert(error.message || "Kan geen verbinding maken met de backend.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.page}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.pageContent}
        keyboardShouldPersistTaps="handled"
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

          <View style={styles.teamInfo}>
            <View style={styles.avatarCircle}>
              <Text style={styles.avatarText}>{currentTeam.avatar}</Text>
            </View>

            <Text style={styles.teamName}>{currentTeam.name}</Text>
          </View>

          <View style={styles.heartsRow}>
            <Heart filled={lives >= 1} />
            <Heart filled={lives >= 2} />
            <Heart filled={lives >= 3} />
          </View>

          <Text style={styles.questionText}>
            Beschrijf wat er is gebeurd{"\n"}en hoe het is gebeurd
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Typ de oplossing"
            placeholderTextColor="#BDBDBD"
            value={answer}
            onChangeText={setAnswer}
            multiline={true}
            textAlignVertical="top"
            editable={!isSending}
          />

          <TouchableOpacity
            style={[styles.sendButton, isSending && styles.disabledButton]}
            onPress={sendAnswer}
            activeOpacity={0.85}
            disabled={isSending}
          >
            <Text style={styles.sendButtonText}>
              {isSending ? "Checken..." : "Verzenden"}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// function Heart({ filled }) {
//   return (
//     <Text style={[styles.heart, !filled && styles.emptyHeart]}>
//       {filled ? "♥︎" : "♡"}
//     </Text>
//   );
// }

function Heart({ filled }) {
  if (filled) {
    return <HeartIcon width={47} height={43} />;
  }

  return <EmptyHeartIcon width={47} height={43} />;
}


const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#4D0060",
  },

  scrollView: {
    flex: 1,
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
    marginBottom: 92,
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

  questionText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 25,
    lineHeight: 31,
    textAlign: "center",
    marginBottom: 20,
  },

  input: {
    width: "100%",
    height: 180,
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 18,
    fontFamily: "LondrinaSolid",
    fontSize: 21,
    color: "#222222",
    marginBottom: 20,
  },

  sendButton: {
    width: "100%",
    height: 68,
    backgroundColor: "#FD9B34",
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },

  disabledButton: {
    opacity: 0.6,
  },

  sendButtonText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 34,
    lineHeight: 40,
    textAlign: "center",
  },
});