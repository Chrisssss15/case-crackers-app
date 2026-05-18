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

export default function HowToPlayScreen({ setCurrentScreen }) {
  const goBack = () => {
    setCurrentScreen("homescreen");
  };

  return (
    <ScrollView
      contentContainerStyle={styles.page}
      showsVerticalScrollIndicator={false}
    >
      <Background style={styles.background} />

      <View style={styles.content}>
        <Text style={styles.title}>Hoe werkt het spel?</Text>

        <View style={styles.textBox}>
          <Text style={styles.stepTitle}>1. Lees de zaak</Text>
          <Text style={styles.text}>
            Bekijk goed wat er is gebeurd en let op belangrijke details.
          </Text>

          <Text style={styles.stepTitle}>2. Verzamel hints</Text>
          <Text style={styles.text}>
            Gebruik hints om dichter bij de oplossing te komen.
          </Text>

          <Text style={styles.stepTitle}>3. Los de zaak op</Text>
          <Text style={styles.text}>
            Denk goed na en kies wie volgens jou de dader is.
          </Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={goBack}>
          <Text style={styles.buttonText}>Terug</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    minHeight: "100%",
    backgroundColor: "#5A006D",
    position: "relative",
    overflow: "hidden",
  },

  background: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },

  content: {
    alignItems: "center",
    paddingHorizontal: 30,
    paddingTop: 80,
    paddingBottom: 60,
  },

  title: {
    fontFamily: "LondrinaSolid",
    fontSize: 44,
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 40,
  },

  textBox: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    marginBottom: 40,
  },

  stepTitle: {
    fontFamily: "LondrinaSolid",
    fontSize: 28,
    color: "#5A006D",
    marginBottom: 6,
  },

  text: {
    fontFamily: "LondrinaSolid",
    fontSize: 20,
    color: "#333333",
    marginBottom: 22,
    lineHeight: 24,
  },

  button: {
    width: "100%",
    height: 68,
    backgroundColor: "#FD9B34",
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontFamily: "LondrinaSolid",
    fontSize: 34,
    color: "#FFFFFF",
  },
});