// @ts-nocheck
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

import Login from "./screens/login";
import Homescreen from "./screens/homescreen";
import UploadCaseScreen from "./screens/uploadCaseScreen";
import HowToPlayScreen from "./screens/howToPlayScreen";


export default function App() {
  const [currentScreen, setCurrentScreen] = useState("default");

  const [fontsLoaded] = useFonts({
    LondrinaSolid: require("./assets/fonts/font.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  // if (currentScreen === "login") {
  //   return <Login />;
  // }

  if (currentScreen === "login") {
    return <Login setCurrentScreen={setCurrentScreen} />;
  }

  if (currentScreen === "homescreen") {
    return <Homescreen setCurrentScreen={setCurrentScreen} />;
  }

  if (currentScreen === "uploadCaseScreen") {
    return <UploadCaseScreen />;
  }

  if (currentScreen === "howToPlayScreen") {
  return <HowToPlayScreen setCurrentScreen={setCurrentScreen} />;
}

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Standaard scherm</Text>

        <Text style={styles.text}>
          Dit is je tijdelijke testscherm. Vanaf hier kun je snel naar je
          loginscherm of homescreen gaan.
        </Text>

        <Button
          title="Open loginscherm"
          onPress={() => setCurrentScreen("login")}
        />

        <Button
          title="Open homescreen"
          onPress={() => setCurrentScreen("homescreen")}
        />
        <Button
          title="Open Upload case screen"
          onPress={() => setCurrentScreen("uploadCaseScreen")}
        />
        <Button
          title="Spelregels"
          onPress={() => setCurrentScreen("howToPlayScreen")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    gap: 16,
  },

  title: {
    fontFamily: "LondrinaSolid",
    fontSize: 36,
    color: "#111",
  },

  text: {
    // fontFamily: "LondrinaSolid",
    fontSize: 18,
    textAlign: "center",
    color: "#000000",
  },
});