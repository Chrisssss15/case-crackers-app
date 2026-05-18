// @ts-nocheck

import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";

import Background from "../assets/background.svg";

export default function Homescreen({ setCurrentScreen }) {
  const startGame = () => {
    console.log("Start het spel");
  };

  const openHowItWorks = () => {
    setCurrentScreen("howToPlayScreen");
    console.log("Hoe werkt het spel?");
  };

  const submitCase = () => {
    setCurrentScreen("uploadCaseScreen");
    console.log("Case inzenden");
  };

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.pageContent}
      showsVerticalScrollIndicator={false}
    >
      <Background style={styles.background} />

      <View style={styles.content}>
        <CaseCrackersTextLogo style={styles.logo} />

        <Text style={styles.title}>
          Weet jij het mysterie{"\n"}te ontrafelen...
        </Text>

        <TouchableOpacity
          style={styles.startButton}
          onPress={startGame}
          activeOpacity={0.85}
        >
          <Text style={styles.buttonText}>Start het spel</Text>
        </TouchableOpacity>

        <View style={styles.bottomButtons}>
          <TouchableOpacity
            style={[styles.menuButton, styles.blueButton]}
            onPress={openHowItWorks}
            activeOpacity={0.85}
          >
            <Text style={styles.buttonText}>Hoe werkt het spel?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.menuButton, styles.pinkButton]}
            onPress={submitCase}
            activeOpacity={0.85}
          >
            <Text style={styles.buttonText}>Case inzenden</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

function CaseCrackersTextLogo({ style }) {
  return (
    <View style={style}>
      <Svg width="219" height="44" viewBox="0 0 219 44" fill="none">
        {/* hier blijft jouw volledige logo SVG staan */}
      </Svg>
    </View>
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
    alignItems: "center",
    paddingHorizontal: 41,
    paddingTop: 150,
    paddingBottom: 70,
    minHeight: 874,
  },

  logo: {
    width: 219,
    height: 44,
    marginBottom: 140,
  },

  title: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 38,
    lineHeight: 48,
    textAlign: "center",
    marginBottom: 120,
  },

  startButton: {
    width: "100%",
    height: 53,
    backgroundColor: "#FD9B34",
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 115,
  },

  bottomButtons: {
    width: "100%",
    gap: 23,
  },

  menuButton: {
    width: "100%",
    height: 53,
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },

  blueButton: {
    backgroundColor: "#0D81FF",
  },

  pinkButton: {
    backgroundColor: "#F242DE",
  },

  buttonText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 30,
    textAlign: "center",
    lineHeight: 38,
  },
});