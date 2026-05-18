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

import Background from "../assets/background.svg";

export default function CaseSubmit() {
  const [caseText, setCaseText] = useState("");

  const sendCase = () => {
    console.log("Case ingezonden:", caseText);
  };

  return (
    <KeyboardAvoidingView
      style={styles.page}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.pageContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Background style={styles.background} />

        <View style={styles.content}>
          <Image
            source={require("../assets/case-crackers-logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />

          <Text style={styles.title}>Case inzenden</Text>

          <Text style={styles.description}>
            Heb jij ooit een digitaal incident meegemaakt en wil je daar een
            case van maken voor het spel? Stuur jouw verhaal naar ons op, dan
            kijken wij of we het kunnen verwerken in een nieuwe case!
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Typ jouw voorstel voor een case"
            placeholderTextColor="#BBBBBB"
            value={caseText}
            onChangeText={setCaseText}
            multiline
            textAlignVertical="top"
          />

          <TouchableOpacity
            style={styles.sendButton}
            onPress={sendCase}
            activeOpacity={0.85}
          >
            <Text style={styles.sendButtonText}>Verzenden</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
    paddingHorizontal: 37,
    paddingTop: 90,
    paddingBottom: 70,
    minHeight: 874,
  },

  logo: {
    width: "100%",
    height: 180,
    marginBottom: 45,
  },

  title: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 38,
    lineHeight: 45,
    textAlign: "center",
    marginBottom: 85,
  },

  description: {
    width: 321,
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 18,
  },

  input: {
    width: "100%",
    minHeight: 62,
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 12,
    fontFamily: "LondrinaSolid",
    fontSize: 17,
    lineHeight: 22,
    color: "#333333",
    marginBottom: 18,
  },

  sendButton: {
    width: "100%",
    height: 53,
    backgroundColor: "#F242DE",
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },

  sendButtonText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 32,
    lineHeight: 38,
    textAlign: "center",
  },
});