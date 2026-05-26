// @ts-nocheck

import React, { useState } from "react";
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

import Background from "../assets/background.svg";
import CaseCrackersLogo from "../assets/case-crackers-text-logo.svg";

export default function GuessAnswerScreen({ setCurrentScreen, team }) {
  const [answer, setAnswer] = useState("");

  // const team = {
  //   name: "Team 1",
  //   avatar: "🐸",
  //   lives: 2,
  // };


  const currentTeam = team || {
  name: "Team 1",
  avatar: "🐸",
  lives: 3,
};


  const goBack = () => {
    setCurrentScreen("gameScreen");
    console.log("Terug naar game screen");
  };

  const sendAnswer = () => {
    console.log("Antwoord verzonden:", answer);

    // Hier kun je later checken of het antwoord goed is
    // setCurrentScreen("gameScreen");
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
              {/* <Text style={styles.avatarText}>{team.avatar}</Text> */}
              <Text style={styles.avatarText}>{currentTeam.avatar}</Text>
            </View>

            {/* <Text style={styles.teamName}>{team.name}</Text> */}
            <Text style={styles.teamName}>{currentTeam.name}</Text>
          </View>

          <View style={styles.heartsRow}>
            {/* <Heart filled={team.lives >= 1} />
            <Heart filled={team.lives >= 2} />
            <Heart filled={team.lives >= 3} /> */}

            <Heart filled={currentTeam.lives >= 1} />
            <Heart filled={currentTeam.lives >= 2} />
            <Heart filled={currentTeam.lives >= 3} />
          </View>

          <Text style={styles.questionText}>
            Beschrijf wat er is gebeurd{"\n"}en hoe het is gebeurd
          </Text>

          {/* <TextInput
            style={styles.input}
            placeholder="Typ de oplossing"
            placeholderTextColor="#BDBDBD"
            value={answer}
            onChangeText={setAnswer}
          /> */}

          <TextInput
            style={styles.input}
            placeholder="Typ de oplossing"
            placeholderTextColor="#BDBDBD"
            value={answer}
            onChangeText={setAnswer}
            multiline={true}
            textAlignVertical="top"
          />

          <TouchableOpacity
            style={styles.sendButton}
            onPress={sendAnswer}
            activeOpacity={0.85}
          >
            <Text style={styles.sendButtonText}>Verzenden</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

function Heart({ filled }) {
  return <Text style={[styles.heart, !filled && styles.emptyHeart]}>♥</Text>;
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

heart: {
  fontFamily: "LondrinaSolid",
  color: "#FF1308",
  fontSize: 56,
  lineHeight: 60,
},

  emptyHeart: {
    color: "#74004E",
  },

  questionText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 25,
    lineHeight: 31,
    textAlign: "center",
    marginBottom: 20,
  },

  // input: {
  //   width: "100%",
  //   height: 64,
  //   backgroundColor: "#FFFFFF",
  //   borderRadius: 17,
  //   paddingHorizontal: 24,
  //   fontFamily: "LondrinaSolid",
  //   fontSize: 21,
  //   color: "#222222",
  //   marginBottom: 20,
  // },

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

  sendButtonText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 34,
    lineHeight: 40,
    textAlign: "center",
  },
});