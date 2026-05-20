// @ts-nocheck

import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Background from "../assets/background.svg";
import CaseCrackersLogo from "../assets/case-crackers-text-logo.svg";

const screenWidth = Dimensions.get("window").width;

export default function ReflectionScreen({ setCurrentScreen }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "De winactie",
      text:
        "Bart zag een winactie voor een iPhone 16\nen klikte op de link uit enthousiasme.\nDe website leek echt, maar was eigenlijk\nonveilig.",
      image: require("../assets/winactie-slide.png"),
      soort: "image",
    },
    {
      title: "Gegevens",
      text:
        "Hij wilde graag winnen en vulde zijn naam,\nadres, e-mail en bankgegevens. Hij wist\nalleen niet dat zijn informatie misbruikt\nkon worden...",
      image: require("../assets/gegevens-slide.png"),
      soort: "image",
    },
    {
      title: "Neppe actie",
      text:
        "De winactie bleek nep. Doordat Bart zijn\ngegevens had ingevuld, werd er geld van\nzijn rekening gehaald. Zo kreeg hij een\nschuld van €5000.",
      image: require("../assets/neppe-actie-slide.png"),
      soort: "image",
    },
    {
      title: "Wat zou jij\nanders doen?",
      text: "Bespreek dit met elkaar",
      soort: "question",
    },
  ];

  const goBack = () => {
    setCurrentScreen("goodJobScreen");
    console.log("Terug naar goed gedaan scherm");
  };

  const goStart = () => {
    setCurrentScreen("homescreen");
    console.log("Terug naar start");
  };

  const onScroll = (event) => {
    const slideNumber = Math.round(
      event.nativeEvent.contentOffset.x / screenWidth
    );

    setCurrentSlide(slideNumber);
    console.log("Reflectie slide: " + (slideNumber + 1));
  };

  return (
    <View style={styles.page}>
      <Background
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        style={styles.background}
      />

      <TouchableOpacity style={styles.backButton} onPress={goBack}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {slides.map((slide, index) => (
          <View style={styles.slide} key={index}>
            <View style={styles.topContent}>
              <CaseCrackersLogo width={190} height={90} style={styles.logo} />

              {slide.soort === "image" ? (
                <Image
                  source={slide.image}
                  style={styles.slideImage}
                  resizeMode="contain"
                />
              ) : (
                <View style={styles.questionBox}>
                  <Text style={styles.questionMark}>?</Text>
                </View>
              )}
            </View>

            <View style={styles.textContent}>
              <Text style={styles.title}>{slide.title}</Text>
              <Text style={styles.description}>{slide.text}</Text>
            </View>

            <View style={styles.bottomContent}>
              <View style={styles.dots}>
                {slides.map((item, dotIndex) => (
                  <View
                    key={dotIndex}
                    style={[
                      styles.dot,
                      currentSlide === dotIndex && styles.activeDot,
                    ]}
                  />
                ))}
              </View>

              {index === slides.length - 1 && (
                <TouchableOpacity
                  style={styles.startButton}
                  onPress={goStart}
                  activeOpacity={0.85}
                >
                  <Text style={styles.startButtonText}>Terug naar start</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </ScrollView>
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

  backButton: {
    position: "absolute",
    top: 43,
    left: 28,
    zIndex: 10,
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },

  backText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 46,
    lineHeight: 48,
  },

  slide: {
    width: screenWidth,
    height: "100%",
    alignItems: "center",
    paddingHorizontal: 28,
  },

  topContent: {
    alignItems: "center",
    paddingTop: 60,
  },

  logo: {
    marginBottom: 20,
  },

  slideImage: {
    width: 255,
    height: 190,
  },

  questionBox: {
    width: 255,
    height: 190,
    alignItems: "center",
    justifyContent: "center",
  },

  questionMark: {
    fontFamily: "LondrinaSolid",
    color: "#FD9B34",
    fontSize: 125,
    lineHeight: 130,
    textShadowColor: "#FFD36F",
    textShadowOffset: { width: 4, height: 4 },
    textShadowRadius: 0,
  },

  textContent: {
    alignItems: "center",
    marginTop: 28,
  },

  title: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 43,
    lineHeight: 48,
    textAlign: "center",
    marginBottom: 18,
  },

  description: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 15,
    lineHeight: 18,
    textAlign: "center",
  },

  bottomContent: {
    position: "absolute",
    bottom: 36,
    left: 28,
    right: 28,
    alignItems: "center",
  },

  dots: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 22,
  },

  dot: {
    width: 13,
    height: 13,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },

  activeDot: {
    backgroundColor: "#FFFFFF",
  },

  startButton: {
    backgroundColor: "#FD9B34",
    width: "100%",
    height: 51,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  startButtonText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 23,
    lineHeight: 27,
  },
});