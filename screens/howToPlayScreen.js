// @ts-nocheck

import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Svg, { Path } from "react-native-svg";

import Background from "../assets/background.svg";

export default function HowToPlayScreen({ setCurrentScreen }) {
  const goBack = () => {
    setCurrentScreen("homescreen");
  };

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.pageContent}
      showsVerticalScrollIndicator={false}
    >
      <Background style={styles.background} />

      <View style={styles.content}>
        <TouchableOpacity
          onPress={goBack}
          style={styles.backButton}
          activeOpacity={0.8}
        >
          <Text style={styles.backButtonText}>← Terug</Text>
        </TouchableOpacity>

        <CaseCrackersTextLogo style={styles.logo} />

        <View style={styles.introSection}>
          <Text style={styles.introTitle}>Speluitleg</Text>

          <Text style={styles.introText}>
            In Case Crackers speel je als detective.{"\n"}
            Er is iets gebeurd met een slachtoffer.{"\n"}
            Jullie moeten onderzoeken wat er precies{"\n"}
            is gebeurd. Door hints te verzamelen en{"\n"}
            slim samen te werken, proberen jullie als{"\n"}
            eerste de zaak op te lossen.
          </Text>
        </View>

        <Section title="Doel van het spel">
          <Text style={styles.text}>
            Het doel van het spel is om de zaak op te lossen. Je moet ontdekken:
          </Text>
          <Bullet text="Wat is er gebeurd?" />
          <Bullet text="Hoe of door wie kwam dit?" />
          <Bullet text="Welke hints bewijzen dat?" />
          <Text style={styles.text}>
            Het team dat als eerste de juiste oplossing geeft en dit goed kan
            uitleggen met hints, wint het spel.
          </Text>
        </Section>

        <Section title="Wat zit er in de doos?">
          <Bullet text="Spelbord" />
          <Bullet text="Pionnen" />
          <Bullet text="Dobbelsteen" />
          <Bullet text="Zaakkaarten" />
          <Bullet text="Hintkaarten" />
          <Bullet text="Kanskaarten" />
          <Bullet text="Slachtoffer-kaart" />
        </Section>

        <Section title="Hoe speel je het spel?">
          <Text style={styles.text}>
            Teams spelen om de beurt. Als jouw team aan de beurt is:
          </Text>
          <Bullet text="Gooi met de dobbelsteen." />
          <Bullet text="Kijk op welk vakje je terechtkomt." />
          <Bullet text="Voer de actie van dat vakje uit." />
          <Bullet text="Het volgende team is aan de beurt." />
        </Section>

        <Section title="Voorbereiding">
          <Numbered number="1" text="Leg het spelbord op tafel." />
          <Numbered
            number="2"
            text="Schud de hintkaarten en leg ze op de plek ‘Hintkaarten’."
          />
          <Numbered
            number="3"
            text="Schud de kanskaarten en leg ze op de plek ‘Kanskaarten’."
          />
          <Numbered
            number="4"
            text="Kies één zaakkaart. Lees deze hardop voor aan alle spelers."
          />
          <Numbered
            number="5"
            text="Verdeel de spelers in twee teams. Je kunt het met meer teams spelen als er genoeg pionnen zijn."
          />
          <Numbered
            number="6"
            text="Elk team kiest een pion en zet die op START."
          />
        </Section>

        <Section title="Overleggen met je team">
          <Text style={styles.text}>
            Tijdens het spel mag je met je team overleggen. Wanneer gebruik je de
            verkregen hints? Soms kan het handig zijn om nog te wachten of juist
            direct een conclusie te trekken. Luister naar elkaar en probeer samen
            logisch na te denken.
          </Text>
        </Section>

        <Section title="Vakjes op het bord">
          <Text style={styles.subTitle}>Hint-vak</Text>

          <VakImage source={require("../assets/Hint-vak.png")} />

          <Text style={styles.text}>
            Kom je op een Hint-vak? Dan mag je een hintkaart pakken. Een
            hintkaart geeft informatie over de zaak. Dit kan bijvoorbeeld zijn:
          </Text>

          <Bullet text="een naam" />
          <Bullet text="een verdachte e-mail" />
          <Bullet text="een melding" />
          <Bullet text="iets over sites" />
          <Bullet text="informatie over het slachtoffer" />

          <Text style={styles.text}>
            Je leest de hint hardop voor en deze helpt jullie om de zaak op te
            lossen.
          </Text>

          <Text style={styles.subTitle}>Kans-vak</Text>

          <VakImage source={require("../assets/kans-vak.png")} />

          <Text style={styles.text}>
            Kom je op een Kans-vak? Dan pak je een kanskaart. Een kanskaart
            geeft een speciale actie. Bijvoorbeeld:
          </Text>

          <Bullet text="pak een extra hintkaart" />
          <Bullet text="sla een beurt over" />
          <Bullet text="je mag meteen raden" />
          <Bullet text="vraag een hint aan een ander team" />
          <Bullet text="blufkaart" />

          <Text style={styles.text}>
            Lees de kanskaart hardop voor en doe wat erop staat. Als een kaart
            zegt dat je meteen mag raden, mag je jouw team 30 seconden laten
            overleggen.
          </Text>

          <Text style={styles.subTitle}>Vraagteken-vak</Text>

          <VakImage source={require("../assets/vraagteken-vak.png")} />

          <Text style={styles.text}>
            Kom je op een vraagteken-vak? Er gebeurt iets onverwachts. Pak een
            actiekaart of volg de opdracht op het bord. Soms mag je hierdoor
            raden of krijg je een extra opdracht.
          </Text>

          <Text style={styles.subTitle}>Witte vakken</Text>

          <VakImage source={require("../assets/witte-vak.png")} />

          <Text style={styles.text}>
            Kom je op een wit vakje? Dan gebeurt er niets. Je beurt is voorbij
            en het volgende team is aan de beurt.
          </Text>
        </Section>

        <Section title="Hoe los je de zaak op?">
          <Text style={styles.text}>
            Tijdens het spel verzamelen jullie hints. Probeer samen te bedenken
            welke oplossing klopt en waarom. Een goede oplossing gebruikt de
            hints als bewijs.
          </Text>

          <Text style={styles.text}>
            Een speler of team mag raden als ze denken dat ze de zaak kunnen
            oplossen. Vertel wat er volgens jullie is gebeurd en leg uit met
            welke hints je dit kunt bewijzen.
          </Text>
        </Section>

        <Section title="Wanneer mag je raden?">
          <Text style={styles.text}>Je mag de zaak raden als:</Text>

          <Bullet text="je op een vraagteken-vak komt" />
          <Bullet text="een kanskaart zegt dat je mag raden" />
          <Bullet text="het andere team ook mag raden" />

          <Text style={styles.text}>
            Voordat je raadt, mag je team 30 seconden overleggen met de zaak
            erbij. Daarna moet je antwoord geven.
          </Text>
        </Section>

        <Section title="Wat gebeurt er bij een fout antwoord?">
          <Text style={styles.text}>Als je fout raadt:</Text>

          <Bullet text="is jouw team de beurt kwijt" />
          <Bullet text="het spel gaat gewoon verder" />
          <Bullet text="het volgende team is aan de beurt" />

          <Text style={styles.text}>
            Je mag later opnieuw raden als je weer op een vraagteken-vak komt of
            als een kanskaart dat toestaat.
          </Text>
        </Section>

        <Section title="Wanneer win je?">
          <Text style={styles.text}>
            Je wint als jouw team de zaak goed oplost. Dan leggen jullie uit wat
            er is gebeurd, wie verantwoordelijk is en welke hints dit bewijzen.
            Het team met de beste uitleg en bewijs wint.
          </Text>

          <Text style={styles.closing}>
            Klopt het antwoord? Dan wint jouw team.
          </Text>
        </Section>
      </View>
    </ScrollView>
  );
}

/*
  Laat jouw bestaande CaseCrackersTextLogo functie hier staan.
  Die functie had je al in je bestand met alle <Path /> regels.
*/
function CaseCrackersTextLogo({ style }) {
  return (
    <View style={style}>
      <Svg width="219" height="44" viewBox="0 0 219 44" fill="none">
        {/* plak hier jouw bestaande logo paths */}
      </Svg>
    </View>
  );
}

function Section({ title, children }) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function Bullet({ text }) {
  return (
    <View style={styles.bulletRow}>
      <Text style={styles.bullet}>•</Text>
      <Text style={styles.bulletText}>{text}</Text>
    </View>
  );
}

function Numbered({ number, text }) {
  return (
    <View style={styles.numberedRow}>
      <Text style={styles.numberText}>
        {number}. {text}
      </Text>
    </View>
  );
}

function VakImage({ source }) {
  return (
    <Image
      source={source}
      style={styles.vakImage}
      resizeMode="contain"
    />
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
    paddingHorizontal: 31,
    paddingTop: 54,
    paddingBottom: 70,
  },

  backButton: {
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 18,
    backgroundColor: "rgba(255,255,255,0.14)",
    borderRadius: 14,
  },

  backButtonText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 24,
  },

  logo: {
    alignSelf: "center",
    width: 219,
    height: 44,
    marginBottom: 55,
  },

  introSection: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
    paddingBottom: 40,
  },

  introTitle: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 38,
    lineHeight: 60,
    textAlign: "center",
    marginBottom: 18,
  },

  introText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
  },

  section: {
    width: "100%",
    marginBottom: 34,
  },

  sectionTitle: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 31,
    lineHeight: 37,
    marginBottom: 14,
  },

  subTitle: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 25,
    lineHeight: 31,
    marginTop: 8,
    marginBottom: 14,
  },

  text: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 9,
  },

  bulletRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 4,
    paddingRight: 4,
  },

  bullet: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 18,
    lineHeight: 21,
    width: 16,
  },

  bulletText: {
    flex: 1,
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 20,
  },

  numberedRow: {
    marginBottom: 7,
  },

  numberText: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 20,
  },

  vakImage: {
    alignSelf: "center",
    width: 95,
    height: 95,
    marginTop: 4,
    marginBottom: 20,
  },

  closing: {
    fontFamily: "LondrinaSolid",
    color: "#FFFFFF",
    fontSize: 18,
    lineHeight: 22,
    marginTop: 4,
  },
});