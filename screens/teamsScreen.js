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

// export default function TeamsScreen({ setCurrentScreen }) {
export default function TeamsScreen({ setCurrentScreen, setGameTeams }) {
  const avatars = ["🐸", "🐻", "🐱", "🐷"];

  const [teams, setTeams] = useState([
    {
      id: 1,
      name: "",
      avatar: "🐸",
    },
    {
      id: 2,
      name: "",
      avatar: "🐷",
    },
  ]);

  const goBack = () => {
    setCurrentScreen("homescreen");
    console.log("Terug naar homescreen");
  };

  const addTeam = () => {
    const newTeamNumber = teams.length + 1;

    const newTeam = {
      id: Date.now(),
      name: "",
      avatar: "🐸",
    };

    setTeams([...teams, newTeam]);
    console.log("Team toegevoegd:", newTeamNumber);
  };

  const changeTeamName = (teamId, newName) => {
    const newTeams = teams.map((team) => {
      if (team.id === teamId) {
        return {
          ...team,
          name: newName,
        };
      }

      return team;
    });

    setTeams(newTeams);
  };

  const changeTeamAvatar = (teamId, newAvatar) => {
    const newTeams = teams.map((team) => {
      if (team.id === teamId) {
        return {
          ...team,
          avatar: newAvatar,
        };
      }

      return team;
    });

    setTeams(newTeams);
  };

  const clearTeamName = (teamId) => {
    const newTeams = teams.map((team) => {
      if (team.id === teamId) {
        return {
          ...team,
          name: "",
        };
      }

      return team;
    });

    setTeams(newTeams);
  };

  //   const goNext = () => {
  //   const teamsForGame = teams.map((team, index) => ({
  //     ...team,
  //     name: team.name.trim() === "" ? `Team ${index + 1}` : team.name,
  //     lives: 3,
  //     buttonColor: index % 2 === 0 ? "#FD9B34" : "#F242DE",
  //   }));

  //   setGameTeams(teamsForGame);
  //   setCurrentScreen("chooseCaseScreen");

  //   console.log("Teams opgeslagen:", teamsForGame);
  // };

const goNext = () => {
  const hasEmptyTeamName = teams.some((team) => team.name.trim() === "");

  if (hasEmptyTeamName) {
    alert("Vul voor elk team een naam in.");
    return;
  }

  const teamsForGame = teams.map((team, index) => ({
    ...team,
    name: team.name.trim(),
    lives: 3,
    buttonColor: index % 2 === 0 ? "#FD9B34" : "#F242DE",
  }));

  setGameTeams(teamsForGame);
  setCurrentScreen("chooseCaseScreen");

  console.log("Teams opgeslagen:", teamsForGame);
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
          <TouchableOpacity
            style={styles.backButton}
            onPress={goBack}
            activeOpacity={0.8}
          >
            <Text style={styles.backButtonText}>←</Text>
          </TouchableOpacity>

          <CaseCrackersLogo style={styles.logo} />

          <Text style={styles.title}>Maak je teams</Text>

          {teams.map((team, index) => (
            <TeamBlock
              key={team.id}
              title={`Team ${index + 1}`}
              team={team}
              avatars={avatars}
              changeTeamName={changeTeamName}
              changeTeamAvatar={changeTeamAvatar}
              clearTeamName={clearTeamName}
            />
          ))}

          <TouchableOpacity
            style={styles.addButton}
            onPress={addTeam}
            activeOpacity={0.85}
          >
            <Text style={styles.addButtonText}>＋ Team toevoegen</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.nextButton}
            onPress={goNext}
            activeOpacity={0.85}
          >
            <Text style={styles.nextButtonText}>Ga verder</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

function TeamBlock({
  title,
  team,
  avatars,
  changeTeamName,
  changeTeamAvatar,
  clearTeamName,
}) {
  return (
    <View style={styles.teamBlock}>
      <Text style={styles.teamTitle}>{title}</Text>

      <Text style={styles.label}>Naam</Text>

      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          value={team.name}
          onChangeText={(text) => changeTeamName(team.id, text)}
          placeholder="Typ de naam"
          placeholderTextColor="#BDBDBD"
        />

        {team.name !== "" && (
          <TouchableOpacity
            onPress={() => clearTeamName(team.id)}
            style={styles.clearButton}
            activeOpacity={0.8}
          >
            <Text style={styles.clearText}>×</Text>
          </TouchableOpacity>
        )}
      </View>

      <Text style={styles.label}>Kies een avatar</Text>

      <View style={styles.avatarRow}>
        {avatars.map((avatar) => (
          <TouchableOpacity
            key={avatar}
            style={[
              styles.avatarButton,
              team.avatar === avatar && styles.selectedAvatar,
            ]}
            onPress={() => changeTeamAvatar(team.id, avatar)}
            activeOpacity={0.85}
          >
            <Text style={styles.avatarText}>{avatar}</Text>

            {team.avatar === avatar && (
              <View style={styles.checkCircle}>
                <Text style={styles.checkText}>✓</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.plusAvatar} activeOpacity={0.85}>
          <Text style={styles.plusAvatarText}>＋</Text>
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
    marginBottom: 22,
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
    marginBottom: 72,
  },

  title: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 38,
    lineHeight: 45,
    textAlign: "center",
    marginBottom: 52,
  },

  teamBlock: {
    width: "100%",
    marginBottom: 48,
  },

  teamTitle: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 34,
    lineHeight: 40,
    textAlign: "center",
    marginBottom: 22,
  },

  label: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 22,
    lineHeight: 28,
    marginBottom: 16,
  },

  inputBox: {
    width: "100%",
    height: 64,
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 22,
    paddingRight: 12,
    marginBottom: 22,
  },

  input: {
    flex: 1,
    fontFamily: "LondrinaSolid",
    fontSize: 24,
    color: "#222222",
    paddingVertical: 0,
  },

  clearButton: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: "#A2A2A2",
    alignItems: "center",
    justifyContent: "center",
  },

  clearText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 21,
    lineHeight: 21,
  },

  avatarRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  avatarButton: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: "#FD9B34",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  selectedAvatar: {
    borderWidth: 3,
    borderColor: "#FFFFFF",
  },

  avatarText: {
    fontSize: 32,
  },

  checkCircle: {
    position: "absolute",
    right: -7,
    top: -8,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  checkText: {
    fontFamily: "LondrinaSolid",
    color: "#222222",
    fontSize: 18,
    lineHeight: 22,
  },

  plusAvatar: {
    width: 62,
    height: 62,
    borderRadius: 31,
    borderWidth: 3,
    borderColor: "#FFFFFF",
    backgroundColor: "rgba(255,255,255,0.45)",
    alignItems: "center",
    justifyContent: "center",
  },

  plusAvatarText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 42,
    lineHeight: 46,
  },

  addButton: {
    width: "100%",
    height: 68,
    backgroundColor: "#0D81FF",
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 31,
  },

  addButtonText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 31,
    lineHeight: 38,
    textAlign: "center",
  },

  nextButton: {
    width: "100%",
    height: 68,
    backgroundColor: "#FD9B34",
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
  },

  nextButtonText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 34,
    lineHeight: 40,
    textAlign: "center",
  },
});