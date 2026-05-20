// @ts-nocheck

import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Background from "../assets/background.svg";
import CaseCrackersLogo from "../assets/case-crackers-text-logo.svg";

export default function GoodJobScreen({ setCurrentScreen }) {
  const openReflection = () => {
    setCurrentScreen("reflectionScreen");
    console.log("Reflectie scherm geopend");
  };

  return (
    <View style={styles.page}>
      <Background
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        style={styles.background}
      />

      <View style={styles.content}>
        <CaseCrackersLogo width={175} height={80} style={styles.logo} />

        <View style={styles.teamRow}>
          <Text style={styles.teamAvatar}>🧐</Text>
          <Text style={styles.teamName}>Team 1</Text>
        </View>

        <Text style={styles.checkIcon}>✓</Text>

        <Text style={styles.title}>Goed gedaan!</Text>

        <Text style={styles.description}>
          Jullie hebben de zaak opgelost.{"\n"}
          Laten we samen kijken wat er{"\n"}
          precies is gebeurd...
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={openReflection}
          activeOpacity={0.85}
        >
          <Text style={styles.buttonText}>Wat is er gebeurd?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#4D0060",
  },

  background: {
    position: "absolute",
    top: 0,
    left: 0,
  },

  content: {
    flex: 1,
    alignItems: "center",
    paddingTop: 55,
    paddingHorizontal: 34,
    paddingBottom: 38,
  },

  logo: {
    marginBottom: 45,
  },

  teamRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },

  teamAvatar: {
    fontSize: 28,
    marginRight: 10,
  },

  teamName: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 24,
  },

  checkIcon: {
    fontFamily: "LondrinaSolid",
    color: "#00E130",
    fontSize: 145,
    lineHeight: 150,
    marginBottom: 10,
    textShadowColor: "#003B10",
    textShadowOffset: { width: 5, height: 5 },
    textShadowRadius: 0,
  },

  title: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 48,
    lineHeight: 54,
    textAlign: "center",
    marginBottom: 20,
  },

  description: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 17,
    lineHeight: 20,
    textAlign: "center",
    marginBottom: "auto",
  },

  button: {
    width: "100%",
    height: 55,
    backgroundColor: "#FD9B34",
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 23,
  },
});