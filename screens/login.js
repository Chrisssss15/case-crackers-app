// @ts-nocheck

import React, { useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Login({ setCurrentScreen }) {
    const [email, setEmail] = useState("");

  const goNext = () => {
    console.log("Email:", email);
  };

  // const skip = () => {
  //   console.log("Gebruiker slaat over");
  // };
  const skip = () => {
  setCurrentScreen("homescreen");
  console.log("Gaat naar de homescreen");
};

  return (
    <KeyboardAvoidingView
      style={styles.page}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {/* achtergrond vormen */}
        <View style={[styles.darkShape, styles.shapeTop]} />
        <View style={[styles.darkShape, styles.shapeMiddle]} />
        <View style={[styles.darkShape, styles.shapeBottom]} />

        <Text style={[styles.star, styles.starTop]}>★</Text>
        <Text style={[styles.smallStar, styles.starLeft]}>✦</Text>
        <Text style={[styles.whiteStar, styles.starCenter]}>✦</Text>
        <Text style={[styles.star, styles.starRight]}>★</Text>
        <Text style={[styles.star, styles.starBottom]}>★</Text>

        <View style={styles.content}>
        <Image
          source={require("../assets/case-crackers-logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />

          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              placeholder="E-mailadres"
              placeholderTextColor="#BDBDBD"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            {email !== "" && (
              <TouchableOpacity
                onPress={() => setEmail("")}
                style={styles.clearButton}
                activeOpacity={0.8}
              >
                <Text style={styles.clearText}>×</Text>
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity
            style={styles.nextButton}
            onPress={goNext}
            activeOpacity={0.85}
          >
            <Text style={styles.nextButtonText}>Ga verder</Text>
          </TouchableOpacity>

          <Text style={styles.infoText}>
            Door je e-mailadres in te vullen, ga je akkoord met het ontvangen
            van nieuwsbrieven en updates. Je kunt je op elk moment eenvoudig
            afmelden.
          </Text>

          <TouchableOpacity onPress={skip} activeOpacity={0.75}>
            <Text style={styles.skipText}>Sla over</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#5A006D",
  },

  scrollContent: {
    minHeight: "100%",
    backgroundColor: "#5A006D",
    overflow: "hidden",
  },

  content: {
    flexGrow: 1,
    alignItems: "center",
    paddingHorizontal: 34,
    paddingTop: 40,
    paddingBottom: 70,
  },

  logo: {
    width: "115%",
    height: 460,
    marginTop: 20,
    marginBottom: -10,
    zIndex: 2,
  },

  inputBox: {
    width: "100%",
    height: 68,
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 24,
    paddingRight: 12,
    marginBottom: 24,
    zIndex: 3,
  },

  input: {
    flex: 1,
    fontFamily: "LondrinaSolid",
    fontSize: 24,
    color: "#333333",
    paddingVertical: 0,
  },

  clearButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#A2A2A2",
    alignItems: "center",
    justifyContent: "center",
  },

  clearText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 24,
    lineHeight: 26,
  },

  nextButton: {
    width: "100%",
    height: 68,
    backgroundColor: "#FD9B34",
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 38,
    zIndex: 3,
  },

  nextButtonText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 36,
    lineHeight: 42,
  },

  infoText: {
    width: 298,
    fontFamily: "LondrinaSolid",
    color: "#BBBBBB",
    fontSize: 16,
    textAlign: "center",
    lineHeight: 19,
    marginBottom: 120,
    zIndex: 3,
  },

  skipText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 28,
    lineHeight: 34,
    zIndex: 3,
  },

  darkShape: {
    position: "absolute",
    backgroundColor: "#2D003A",
    opacity: 0.55,
    borderRadius: 999,
  },

  shapeTop: {
    width: 430,
    height: 260,
    left: -160,
    top: -80,
    transform: [{ rotate: "-15deg" }],
  },

  shapeMiddle: {
    width: 340,
    height: 280,
    right: -150,
    top: 690,
    transform: [{ rotate: "18deg" }],
  },

  shapeBottom: {
    width: 420,
    height: 260,
    left: -140,
    bottom: -40,
    transform: [{ rotate: "-20deg" }],
  },

  star: {
    position: "absolute",
    color: "#8E1BA8",
    fontSize: 84,
    fontFamily: "LondrinaSolid",
  },

  smallStar: {
    position: "absolute",
    color: "#8E1BA8",
    fontSize: 38,
    fontFamily: "LondrinaSolid",
  },

  whiteStar: {
    position: "absolute",
    color: "#FFFFFF",
    fontSize: 34,
    fontFamily: "LondrinaSolid",
  },

  starTop: {
    top: -22,
    left: 190,
  },

  starLeft: {
    top: 185,
    left: 40,
  },

  starCenter: {
    top: 570,
    left: 245,
  },

  starRight: {
    top: 835,
    right: -22,
    fontSize: 70,
  },

  starBottom: {
    bottom: 105,
    right: 170,
    fontSize: 90,
  },
});