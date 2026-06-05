# Case Crackers

Case Crackers is een detectivegame die ik heb gemaakt voor mijn project. In de app maken spelers eerst teams aan en kiezen ze daarna een case. Tijdens het spel proberen de teams de zaak op te lossen door goed na te denken, hints te verzamelen en uiteindelijk een antwoord in te vullen.

De stijl van de app is speels en opvallend. Ik heb veel paars, oranje, roze en blauw gebruikt zodat het past bij het thema van een detective/puzzelspel.

## Wat kun je doen in de app?

In de app kun je:

- een e-mailadres invullen of overslaan;
- het spel starten;
- teams aanmaken;
- een avatar kiezen voor elk team;
- een case kiezen;
- een antwoord invullen;
- levens verliezen bij een fout antwoord;
- doorgaan naar een reflectiescherm als de case is opgelost;
- de spelregels lezen;
- zelf een case inzenden.

## Gebruikte technieken

Dit project is gemaakt met:

- React Native
- Expo
- JavaScript
- React hooks zoals `useState` en `useEffect`
- SVG-bestanden voor logo's en iconen
- Een backend API voor cases en antwoordcontrole

## Installeren

Clone of download het project en open de map in VS Code.

Installeer daarna de packages:

```bash
npm install
```

Start de app met:

```bash
npm start
```

Daarna kun je de app openen met Expo Go of via een simulator.

## Belangrijk

De map `node_modules` hoeft eigenlijk niet mee op GitHub of bij het inleveren. Deze map kan opnieuw worden gemaakt met:

```bash
npm install
```

Daarom staat `node_modules` meestal in `.gitignore`.

## Projectstructuur

De belangrijkste mappen en bestanden zijn:

```text
CaseCrackers-app/
├── App.js
├── screens/
├── services/
├── assets/
├── package.json
└── app.json
```

### App.js

In `App.js` wordt bijgehouden welk scherm op dit moment zichtbaar is. Ik gebruik hiervoor `currentScreen`. Ook worden hier de teams opgeslagen en wordt bijgehouden welk team aan de beurt is.

### screens

In de map `screens` staan alle schermen van de app.

| Bestand | Wat doet het? |
| --- | --- |
| `login.js` | Hier kan de gebruiker een e-mailadres invullen of overslaan. |
| `homescreen.js` | Het beginscherm van de app. Vanaf hier kan je het spel starten, de uitleg openen of een case inzenden. |
| `teamsScreen.js` | Hier maken spelers teams aan en kiezen ze avatars. |
| `chooseCaseScreen.js` | Hier kiest de speler een case uit de backend. |
| `gameScreen.js` | Het scherm waar het spel verdergaat. |
| `guessAnswerScreen.js` | Hier vult een team de oplossing van de case in. |
| `wrongAnswerScreen.js` | Dit scherm verschijnt als het antwoord fout is. |
| `goodAnswerScreen.js` | Dit scherm verschijnt als het antwoord goed is. |
| `reflectionScreen.js` | Hier wordt uitgelegd wat er in de case is gebeurd. |
| `howToPlayScreen.js` | Hier staan de spelregels. |
| `uploadCaseScreen.js` | Hier kan iemand zelf een case insturen. |

### services/api.js

In `services/api.js` staan de functies die contact maken met de backend.

De app gebruikt deze API-functies:

- `getCases()` haalt een case op uit de backend.
- `checkAnswer(answer)` controleert of het ingevulde antwoord klopt.
- `resetGame()` reset het spel in de backend.

De backend URL staat ook in dit bestand:

```js
export const API_BASE_URL = "http://145.137.58.153:8000";
```

Als de backend op een andere plek draait, moet deze URL aangepast worden.

## Hoe loopt het spel?

De flow van de app is ongeveer zo:

1. De speler komt op het login- of startscherm.
2. De speler start het spel.
3. De backend wordt gereset.
4. Spelers maken teams aan.
5. Spelers kiezen een case.
6. Teams spelen het spel.
7. Een team vult een antwoord in.
8. De backend controleert het antwoord.
9. Bij een fout antwoord verliest het team een leven.
10. Bij een goed antwoord gaat de app naar het goed-antwoord scherm.
11. Daarna komt het reflectiescherm met uitleg over de case.

## Assets

In de map `assets` staan alle afbeeldingen, logo's en iconen die in de app worden gebruikt. Bijvoorbeeld:

- het Case Crackers logo;
- de achtergrond;
- hartjes;
- bordvakjes;
- afbeeldingen voor de reflectieslides.

## Lettertype

De app gebruikt het lettertype `LondrinaSolid`. Dit lettertype wordt ingeladen in `App.js` met `useFonts`.

## Opmerking over de code

De code is bewust simpel gehouden. Ik heb vooral gewerkt met duidelijke componenten, normale functies en simpele state. Daardoor is de code makkelijker te begrijpen en aan te passen.

Ook zijn er comments toegevoegd bij belangrijke onderdelen, zodat iemand anders sneller kan zien wat elk scherm doet.

## Mogelijke verbeteringen

Er zijn nog dingen die later verbeterd kunnen worden, zoals:

- betere validatie van e-mailadressen;
- cases echt opslaan bij het inzenden;
- meerdere cases tonen in plaats van één case;
- meer feedback geven bij fout of goed antwoord;
- gameScreen verder afmaken of controleren;
- oude uitgecommentte code opruimen.

## Samenvatting

Case Crackers is een React Native app waarin spelers samenwerken om een digitale case op te lossen. Het project bestaat uit meerdere schermen, een speelse interface en een koppeling met een backend. Het doel van de app is om spelers op een leuke manier te laten nadenken over online veiligheid en digitale incidenten.
