// // @ts-nocheck

// import React from "react";
// import {
//   ScrollView,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   useWindowDimensions,
// } from "react-native";

// import Background from "../assets/background.svg";
// import CaseCrackersLogo from "../assets/case-crackers-text-logo.svg";

// export default function WrongAnswerScreen({ setCurrentScreen, team }) {
//   const { width, height } = useWindowDimensions();

//   const currentTeam = team || {
//     name: "Team 1",
//     avatar: "🐸",
//     lives: 2,
//   };

//   const isSmallScreen = height < 750;

//   const logoWidth = width * 0.52;
//   const logoHeight = logoWidth * 0.2;

//   const heartSize = isSmallScreen ? width * 0.22 : width * 0.25;
//   const brokenHeartSize = isSmallScreen ? width * 0.18 : width * 0.21;

//   const goNext = () => {
//     setCurrentScreen("gameScreen");
//     console.log("Terug naar het spel na fout antwoord");
//   };

//   return (
//     <ScrollView
//       style={styles.page}
//       contentContainerStyle={[
//         styles.pageContent,
//         {
//           paddingTop: isSmallScreen ? 45 : 65,
//           paddingBottom: isSmallScreen ? 35 : 55,
//         },
//       ]}
//       showsVerticalScrollIndicator={false}
//     >
//       <Background style={styles.background} />

//       <View style={styles.content}>
//         <CaseCrackersLogo
//           style={[
//             styles.logo,
//             {
//               width: logoWidth,
//               height: logoHeight,
//               marginBottom: isSmallScreen ? 65 : 90,
//             },
//           ]}
//         />

//         <View
//           style={[
//             styles.teamInfo,
//             {
//               marginBottom: isSmallScreen ? 55 : 75,
//             },
//           ]}
//         >
//           <View
//             style={[
//               styles.avatarCircle,
//               {
//                 width: width * 0.15,
//                 height: width * 0.15,
//                 borderRadius: width * 0.075,
//               },
//             ]}
//           >
//             <Text
//               style={[
//                 styles.avatarText,
//                 {
//                   fontSize: width * 0.09,
//                 },
//               ]}
//             >
//               {currentTeam.avatar}
//             </Text>
//           </View>

//           <Text
//             style={[
//               styles.teamName,
//               {
//                 fontSize: width * 0.105,
//                 lineHeight: width * 0.12,
//               },
//             ]}
//           >
//             {currentTeam.name}
//           </Text>
//         </View>

//         <View
//           style={[
//             styles.heartsRow,
//             {
//               marginBottom: isSmallScreen ? 65 : 95,
//             },
//           ]}
//         >
//           <Text
//             style={[
//               styles.heart,
//               {
//                 fontSize: heartSize,
//                 lineHeight: heartSize + 10,
//               },
//             ]}
//           >
//             ♥
//           </Text>

//           <Text
//             style={[
//               styles.heart,
//               {
//                 fontSize: heartSize,
//                 lineHeight: heartSize + 10,
//               },
//             ]}
//           >
//             ♥
//           </Text>

//           <Text
//             style={[
//               styles.brokenHeart,
//               {
//                 fontSize: brokenHeartSize,
//                 lineHeight: heartSize + 10,
//               },
//             ]}
//           >
//             💔
//           </Text>
//         </View>

//         <Text
//           style={[
//             styles.title,
//             {
//               fontSize: isSmallScreen ? width * 0.15 : width * 0.18,
//               lineHeight: isSmallScreen ? width * 0.17 : width * 0.2,
//               marginBottom: isSmallScreen ? 25 : 35,
//             },
//           ]}
//         >
//           Helaas!
//         </Text>

//         <Text
//           style={[
//             styles.description,
//             {
//               fontSize: isSmallScreen ? width * 0.07 : width * 0.073,
//               lineHeight: isSmallScreen ? width * 0.085 : width * 0.09,
//               marginBottom: isSmallScreen ? 35 : 55,
//             },
//           ]}
//         >
//           Het antwoord klopt nog niet.{"\n"}
//           Probeer verder en verzamel{"\n"}
//           meer hints.
//         </Text>

//         <TouchableOpacity
//           style={[
//             styles.button,
//             {
//               height: isSmallScreen ? 58 : 68,
//             },
//           ]}
//           onPress={goNext}
//           activeOpacity={0.85}
//         >
//           <Text
//             style={[
//               styles.buttonText,
//               {
//                 fontSize: isSmallScreen ? width * 0.09 : width * 0.1,
//                 lineHeight: isSmallScreen ? width * 0.105 : width * 0.115,
//               },
//             ]}
//           >
//             Ga verder
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   page: {
//     flex: 1,
//     backgroundColor: "#4D0060",
//   },

//   pageContent: {
//     minHeight: "100%",
//     position: "relative",
//     overflow: "hidden",
//   },

//   background: {
//     position: "absolute",
//     width: "100%",
//     height: "100%",
//   },

//   content: {
//     flex: 1,
//     alignItems: "center",
//     paddingHorizontal: 35,
//   },

//   logo: {
//     alignSelf: "center",
//   },

//   teamInfo: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   avatarCircle: {
//     backgroundColor: "#FD9B34",
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: 18,
//   },

//   avatarText: {
//     textAlign: "center",
//   },

//   teamName: {
//     fontFamily: "LondrinaSolid",
//     color: "#FFFFFF",
//   },

//   heartsRow: {
//     width: "100%",
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-between",
//   },

//   heart: {
//     fontFamily: "LondrinaSolid",
//     color: "#FF1308",
//   },

//   brokenHeart: {
//     textAlign: "center",
//   },

//   title: {
//     fontFamily: "LondrinaSolid",
//     color: "#FFFFFF",
//     textAlign: "center",
//   },

//   description: {
//     fontFamily: "LondrinaSolid",
//     color: "#FFFFFF",
//     textAlign: "center",
//   },

//   button: {
//     width: "100%",
//     backgroundColor: "#FD9B34",
//     borderRadius: 20,
//     alignItems: "center",
//     justifyContent: "center",
//   },

//   buttonText: {
//     fontFamily: "LondrinaSolid",
//     color: "#FFFFFF",
//     textAlign: "center",
//   },
// });

// @ts-nocheck

import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";

import Background from "../assets/background.svg";
import CaseCrackersLogo from "../assets/case-crackers-text-logo.svg";
import HeartIcon from "../assets/heart.svg";
import BrokenHeartIcon from "../assets/brokenheart.svg";

export default function WrongAnswerScreen({ setCurrentScreen, team }) {
  const { width, height } = useWindowDimensions();

  const currentTeam = team || {
    name: "Team 1",
    avatar: "🐸",
    lives: 2,
  };

  const lives = Number(currentTeam.lives ?? 3);
  const isSmallScreen = height < 750;

  const logoWidth = width * 0.52;
  const logoHeight = logoWidth * 0.2;

  const heartWidth = isSmallScreen ? width * 0.18 : width * 0.21;
  const heartHeight = heartWidth * 0.91;

  const goNext = () => {
    setCurrentScreen("gameScreen");
    console.log("Terug naar het spel na fout antwoord");
  };

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={[
        styles.pageContent,
        {
          paddingTop: isSmallScreen ? 45 : 65,
          paddingBottom: isSmallScreen ? 35 : 55,
        },
      ]}
      showsVerticalScrollIndicator={false}
    >
      <Background style={styles.background} />

      <View style={styles.content}>
        <CaseCrackersLogo
          style={[
            styles.logo,
            {
              width: logoWidth,
              height: logoHeight,
              marginBottom: isSmallScreen ? 65 : 90,
            },
          ]}
        />

        <View
          style={[
            styles.teamInfo,
            {
              marginBottom: isSmallScreen ? 55 : 75,
            },
          ]}
        >
          <View
            style={[
              styles.avatarCircle,
              {
                width: width * 0.15,
                height: width * 0.15,
                borderRadius: width * 0.075,
              },
            ]}
          >
            <Text
              style={[
                styles.avatarText,
                {
                  fontSize: width * 0.09,
                },
              ]}
            >
              {currentTeam.avatar}
            </Text>
          </View>

          <Text
            style={[
              styles.teamName,
              {
                fontSize: width * 0.105,
                lineHeight: width * 0.12,
              },
            ]}
          >
            {currentTeam.name}
          </Text>
        </View>

        <View
          style={[
            styles.heartsRow,
            {
              marginBottom: isSmallScreen ? 65 : 95,
            },
          ]}
        >
          <LifeHeart filled={lives >= 1} width={heartWidth} height={heartHeight} />
          <LifeHeart filled={lives >= 2} width={heartWidth} height={heartHeight} />
          <LifeHeart filled={lives >= 3} width={heartWidth} height={heartHeight} />
        </View>

        <Text
          style={[
            styles.title,
            {
              fontSize: isSmallScreen ? width * 0.15 : width * 0.18,
              lineHeight: isSmallScreen ? width * 0.17 : width * 0.2,
              marginBottom: isSmallScreen ? 25 : 35,
            },
          ]}
        >
          Helaas!
        </Text>

        <Text
          style={[
            styles.description,
            {
              fontSize: isSmallScreen ? width * 0.07 : width * 0.073,
              lineHeight: isSmallScreen ? width * 0.085 : width * 0.09,
              marginBottom: isSmallScreen ? 35 : 55,
            },
          ]}
        >
          Het antwoord klopt nog niet.{"\n"}
          Probeer verder en verzamel{"\n"}
          meer hints.
        </Text>

        <TouchableOpacity
          style={[
            styles.button,
            {
              height: isSmallScreen ? 58 : 68,
            },
          ]}
          onPress={goNext}
          activeOpacity={0.85}
        >
          <Text
            style={[
              styles.buttonText,
              {
                fontSize: isSmallScreen ? width * 0.09 : width * 0.1,
                lineHeight: isSmallScreen ? width * 0.105 : width * 0.115,
              },
            ]}
          >
            Ga verder
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

function LifeHeart({ filled, width, height }) {
  if (filled) {
    return <HeartIcon width={width} height={height} />;
  }

  return <BrokenHeartIcon width={width} height={height} />;
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
    paddingHorizontal: 35,
  },

  logo: {
    alignSelf: "center",
  },

  teamInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  avatarCircle: {
    backgroundColor: "#FD9B34",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 18,
  },

  avatarText: {
    textAlign: "center",
  },

  teamName: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
  },

  heartsRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    textAlign: "center",
  },

  description: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    textAlign: "center",
  },

  button: {
    width: "100%",
    backgroundColor: "#FD9B34",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    textAlign: "center",
  },
});