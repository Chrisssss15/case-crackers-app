// @ts-nocheck
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";

// Importeren van alle schermen
import Login from "./screens/login";
import Homescreen from "./screens/homescreen";
import UploadCaseScreen from "./screens/uploadCaseScreen";
import HowToPlayScreen from "./screens/howToPlayScreen";
import TeamsScreen from "./screens/teamsScreen";
import ChooseScreen from "./screens/chooseCaseScreen";
import GameScreen from "./screens/gameScreen";
import GuessAnswerScreen from "./screens/guessAnswerScreen";
import GoodAnswerScreen from "./screens/goodAnswerScreen";
import WrongAnswerScreen from "./screens/wrongAnswerScreen";
import ReflectionScreen from "./screens/reflectionScreen";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState("default"); // Startscherm is "default"
  const [gameTeams, setGameTeams] = useState([]); // Teams worden hier opgeslagen
  const [selectedTeam, setSelectedTeam] = useState(null); // Huidig geselecteerd team voor het raden van antwoorden

  const [fontsLoaded] = useFonts({ // Font inladen
    LondrinaSolid: require("./assets/fonts/font.ttf"),
  });

  if (!fontsLoaded) { // Wacht tot de lettertypen zijn geladen voordat je iets rendert
    return null;
  }

  // Functie om levens bij te houden
  const updateTeamLives = (teamId, newLives) => {
    setGameTeams((oldTeams) =>
      oldTeams.map((team) =>
        team.id === teamId ? { ...team, lives: newLives } : team
      )
    );

    setSelectedTeam((oldTeam) => {
      if (!oldTeam || oldTeam.id !== teamId) {
        return oldTeam;
      }

      return {
        ...oldTeam,
        lives: newLives,
      };
    });

    console.log("Team levens aangepast:", teamId, newLives);
  };


  // De juiste scherm inladen op basis van de huidige van de huidige scherm
  if (currentScreen === "login") {
    return <Login setCurrentScreen={setCurrentScreen} />;
  }

  if (currentScreen === "homescreen") {
    return <Homescreen setCurrentScreen={setCurrentScreen} />;
  }

  if (currentScreen === "uploadCaseScreen") {
    return <UploadCaseScreen setCurrentScreen={setCurrentScreen} />;
  }

  if (currentScreen === "howToPlayScreen") {
    return <HowToPlayScreen setCurrentScreen={setCurrentScreen} />;
  }

    if (currentScreen === "goodAnswerScreen") {
    return <GoodAnswerScreen setCurrentScreen={setCurrentScreen} />;
  }

  if (currentScreen === "reflectionScreen") {
    return <ReflectionScreen setCurrentScreen={setCurrentScreen} />;
  }

  if (currentScreen === "chooseCaseScreen") {
    return <ChooseScreen setCurrentScreen={setCurrentScreen} />;
  }

  // Teams scherm heeft extra props nodig om teams te beheren
  if (currentScreen === "teamsScreen") { 
    return ( // Hier worden de informatie doorgegeven naar de volgende scherm
      <TeamsScreen
        setCurrentScreen={setCurrentScreen}
        setGameTeams={setGameTeams}
      />
    );
  }

  if (currentScreen === "gameScreen") {
    return (
      <GameScreen
        setCurrentScreen={setCurrentScreen}
        teams={gameTeams}
        setSelectedTeam={setSelectedTeam}
      />
    );
  }

  if (currentScreen === "guessAnswerScreen") {
  return (
    <GuessAnswerScreen
      setCurrentScreen={setCurrentScreen}
      team={selectedTeam}
      teams={gameTeams}
      updateTeamLives={updateTeamLives}
    />
  );
}

  if (currentScreen === "wrongAnswerScreen") {
    return (
      <WrongAnswerScreen
        setCurrentScreen={setCurrentScreen}
        team={selectedTeam}
      />
    );
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

        <Button
          title="Teams maken"
          onPress={() => setCurrentScreen("teamsScreen")}
        />

        <Button
          title="Case kiezen"
          onPress={() => setCurrentScreen("chooseCaseScreen")}
        />

        <Button
          title="Game screen"
          onPress={() => setCurrentScreen("gameScreen")}
        />

        <Button
          title="Guess Answer screen"
          onPress={() => setCurrentScreen("guessAnswerScreen")}
        />

        <Button
          title="Good Answer screen"
          onPress={() => setCurrentScreen("goodAnswerScreen")}
        />

        <Button
          title="Reflection screen"
          onPress={() => setCurrentScreen("reflectionScreen")}
        />

        <Button
          title="Wrong Answer screen"
          onPress={() => setCurrentScreen("wrongAnswerScreen")}
        />
      </View>
    </SafeAreaView>
  );
}

// styling
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
    fontSize: 18,
    textAlign: "center",
    color: "#000000",
  },
});