# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

## Daily checkout 1/04/2026/ Weekly checkout.

wat heb ik vandaag gedaan? ik heb vandaag gekeken naar de verchillende api's die ik kan gebruiken en welke idee ik wil gaan uitvoeren. Mijn idee was uiteindelijk: Een webapp waarbij je een random idee kan genereren adv het weer. Dus met een API die je huidige locatie bekijkt, en dan een ander api die naar het weer kijkt op je locatie, word er een idee gegenereerd. Als het regent krijg je dan een idee die je binnehuis kan doen, en als het regent dan het omgekeerde. voor deze ideeen had ik deze api's;
- https://bored-api.appbrewery.com/ dit was voor de random idee
- https://open-meteo.com/ Dit was voor de weather api. dus ik zou dan kunnen kijken naar het weer en adhv het weer een activiteit geven.

wat heb ik geleerd? ik heb geleerd hoe te werken met de framework Astro.

hoe lang duurde het? leren met astro onegveer 1-2 uren. Mijn idee bedenken en dingen opzoeken ook ongeveer 2 uren.

wat ga ik morgen doen. morgen ga ik mijn idee uitleggen en dan van daaruit werken en kijken als mijn APIS goed zijn 

## Daily checkout 8/04/2026/ 

wat heb ik vandaag gedaan? ik heb vandaag mijn idee vastgemaakt. Ik heb namelijk een ander idee, en dit heb ik met de docent besproken en hetblijkt goed te zijn. Mijn idee is dat je met een geaolocation api je huidige locatie kan zien en met een kaart van nederland kan je de verschillende events zien met de ticketmaster api. Daarnaast kan je met local storage de events opslaan en met notification api een melding sturen als de events starten bijvoorbeeld. Ik heb daarnaast de verschillende apis bezocht en prpberen laten werken. ik ben daarna opzoek gegaan naar de api's die ik kan gebruiken. deze waren;

- https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API 
- https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/
- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- https://leafletjs.com/


Nadat ik dit had gedaan, ben ik aan de slag gegaan met regreistreren etc voor key's. Ik had namelijk de api key nodig voor de ticketmaster api. Dus ik had dit gehad. En hierna ben ik gaan vragen hoe ik de key soort van kan beschermen met de dotenv file. En dit heb ik dan toegevoegd in me code.

wat heb ik geleerd? ik heb geleerd hoe ik keys kan gebruiken van de api's. En hoe ik de key zelf kan beschermen met de dotenv file.

hoe lang duurde het? in totaal 2-4 uren ongeveer

wat ga ik morgen doen. morgen ga ik mijn idee uitwerken en me content laten laden

## Daily checkout 15/04/2026/ 

wat heb ik vandaag gedaan; ik heb vandaag mijn api's laten fetchen. ik heb de verschillende evenementen geplaatst op het landkaart en ik heb dit gedaan door de long en lat van de events uit de api te halen. En die dan op het kaart te tonen. Daarna heb ik de pinpoints klikbaar gemaakt en die info laten tonen aan de rechterkant. 

hoelang duurde dit me; het duurde ongeveer 4-5 uren met behulp van de jad.

wat heb ik vadaag geleerd. Ik heb geleerd hoe ik dingen kan fetchen en tonen op de kaart, ik heb ook geleerd dat ik binnen me files van api met punten (.) dieper in de file kan zoeken naar dingen. en Ik heb geleerd hoe ik gegevens op de kaart kan laten tonen met pinpoints. dit is namelijk met dit gedeelte text

``` javascript 

const marker = L.marker([locatie.lat, locatie.lng]).addTo(map);

```

Voor het ophalen van de gegevens gebruikte ik;

``` javascript
export async function API_TM() {

    const ticketmasterApi = import.meta.env.TM_KEY;

    const base = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=NL&apikey=" + ticketmasterApi;
    const response = await fetch(base);
    const data = await response.json();

    // Haal de lijst van events op
    const events = data._embedded.events;

    const locaties = events.map(event => {
        return {
            id: event.id,
            naam: event.name,
            datum: event.dates.start.localDate,
            image: event.images[5].url,
            url: event.url,
            venue: event._embedded.venues[0].name,
            adres: event._embedded.venues[0].address.line1,
            stad: event._embedded.venues[0].city.name,
            lat: event._embedded.venues[0].location.latitude,
            lng: event._embedded.venues[0].location.longitude,
            genre: event.classifications[0].genre.name,
            tijd: event.dates.start.localTime
        };
    });
    return locaties;
}
```
De functie `API_TM()` haalt events op van de Ticketmaster API voor Nederland. Dus ik haalde de data op en zette die in een json. Vervolgens heb ik die in een variable gezet die locaties heet. en met `Return` zeg ik dat ik de data (array) eruit wil halen en die dus gebruiken. De data gegevens roep ik dan weer op in me index.astro bestand, zodat ik het kan gebruiken om info te tonen.

dit is de bron vanwaar ik het heb. Ook werd ik geholpen door jad; https://leafletjs.com/examples/quick-start/

## Weekly Nerd Johan van Accesibility
Hij liet een screenreader alles oplezen en heel snel ook, vervolgens vorge hij ons wat we hoorde etc.

Principe van WCAG
- Perceivable
- Operable
- Understandable
- Robust

Met de toetsenbord kan men snel en makkelijk bewegen, ze gebruiken de letter 'H' om te navigerren binnen secties of stukken van de website. Dus hij gaat niet van rechts naar links zoals wij zien.

Vragen voor mensen met accesibillity problemen als je voor hun ontwerp;
- Wat maakt het voor diegene moeilijk
- Wat heeft die nodig?
- Heb je een proejct van jezelf waar diegene zou afhaken

Bevindingen van persoon 2;
- ze kan niet tegen velle kleuren bij wesbite anders krijgt ze hoofdpijn
- Ze kan ook niet goed mee als er veel info naast mekaar zit en beetje door elkaar.

## Daily checkout 22/04/2026

wat heb ik vandaag gedaan; ik heb vandaag de detail pagina opgeroepen en laten zien op de website's url. Ik zat hier een tijde mee bezig maar Jad hielp me hiermee. Daarna probeerde ik de code opnieuw te fetchen in me detailspagina zelf. Ook heb ik een beetje gewerkt aan de stijl van de sidepanel. Vervolgens heb ik ook de geolocatie api kunnen gebruiken. Ik hbe namelijk dit geschreven, of dit was goed genoeg om de locatie op te halen

``` javascript 
if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition((position) => {
					const lat = position.coords.latitude;
					const lng = position.coords.longitude;

```
bron: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
bron2;https://www.w3schools.com/html/html5_geolocation.asp#:~:text=The%20Geolocation%20API%20is%20accessed,information%20(for%20example%20GPS).

vervolgens heb ik de opgehaalde locatie laten tonen op de kaart met;

``` javascript

const userMarker = L.marker([lat, lng]).addTo(map);
					userMarker.bindPopup("Jij bent hier 📍").openPopup();
					map.setView([lat, lng], 12);

```
		

hoelang duurde dit me; het duurde ongeveer 5-6 uren want ik kon me website niet aan de praat krijgen. Ik kreeg steeds een error en me unieke id kwam niet mee in me url. 

wat heb ik vadaag geleerd. Ik heb geleerd hoe me id kan meesturen binnenin me url en die eruit halen om content te tonen op me website. EN hoe ik de geolocatie kan ophalen en dan laten tonen op de kaart met de ingebouwde pointer van leaflet.


## Daily checkout 23/04/2026

wat heb ik vandaag gedaan; Ik hbe vandaag gezeten aan de detailpagina. Ik heb alle benodigde gegevens gefetch en die dan getoont op de webvsite. Darnaast heb ik die stijl gegevens.

dit duurde me omgeveer 5 uren lang om alles zo goed te krijgen. Ik ben niet helemaal klaar dus daar moet ik nod aan zitten.

Ik heb geleerd hoe ik soort if statment anders kan schrijven;

```javascript

{segment && genre && 
    <small>{segment} · {genre}</small>}
```

Hier word er namelijk gezged dat als 'segment' en 'genre' bestaat, toon dan de article en de gegevesn erin. Want normaliter zou je het als dit opschijrven ;

``` javascript

if (segment && genre) {
    return <small>{segment} · {genre}</small>;
  }

```

Ook heb ik geleerd hoe ik gegevens kan fetchen met de id. En dat ik vraagtekens kan gebruiken om door delen van de files te lezen. Die vraagtekens (?) heten optional chaining. Ze zorgen ervoor dat je veilig door een object heen kunt gaan zonder errors.

## Weekly checkout 22/04/2026 – 23/04/2026

### Wat heb ik deze week gedaan?

Deze week heb ik voornamelijk gewerkt aan de detailpagina. Ik ben begonnen met het ophalen en tonen van de juiste event via een uniek id in de URL. Daarna heb ik alle benodigde gegevens gefetcht en die gestyled op de pagina. Ook heb ik gewerkt aan de stijl van de sidepanel.

### Hoelang duurde dit?

De week kostte me in totaal ongeveer 9-10 uur. Vooral het meesturen van het id in de URL en het ophalen van de juiste data kostte veel tijd. Ik kreeg regelmatig errors en kon mijn website soms niet aan de praat krijgen. Gelukkig hielp Jad me op een punt verder.

### Wat heb ik deze week geleerd?

**1. Id meesturen in de URL**
Ik heb geleerd hoe ik een uniek id mee kan sturen in de URL en die er weer uit kan halen om de juiste content te tonen op de pagina.

**2. Kortere if-statements in Astro**
In plaats van een gewone if-statement:

```javascript
if (segment && genre) {
    return {segment} · {genre};
}
```

Kan je dit korter schrijven:

```javascript
{segment && genre && (
    <small>
      {segment} · {genre}
    </small>
    )
  }
```

Dit werkt omdat JavaScript stopt met evalueren zodra een waarde `false` of leeg is. Als beide bestaan wordt de JSX getoond.

**3. Optional chaining (?)**
Ik heb geleerd dat je vraagtekens kunt gebruiken om veilig door een object heen te gaan zonder errors. Dit heet optional chaining. Bijvoorbeeld:

```javascript
event._embedded?.venues?.[0]?.city?.name
```

Als één van die onderdelen niet bestaat geeft het `undefined` terug in plaats van een error.

### Wat moet ik nog doen?

De detailpagina is nog niet helemaal af. De stijl en de weergave van de gegevens moeten verder worden afgewerkt.

## Checkout vakantie - 06/05/2026 - 07/05/2026

wat heb ik vandaag gedaan; ik heb vandaag gewerkt aan mijn favorieten pagina. Ik heb namelijk de local storage api gebruikt. Ik heb de 'toevoegen aan favorieten' knop laten werken. dus dat het daadwerkelijk de event opslaat. dit heb ik gedaan met ;

``` javascript
let currentLocatie = null; 
```

dit heb ik gezet zodat er een lijst is die eigenlijk leeg is. Hier komen de opgeslagen favs. Daara heb ik dit gezet, zodat ik het systeem doorgeeft dat waarop je bent dat die de event is.

``` javascript
currentLocatie = locatie;
```

Hierna heb ik de knop klikbaar gemaakt en met de code ervoor gezorgd dat als je erop klikt, gaat het syeteem eerst kijken als me id al in de lijst zit, zoniet voeg het toe 

``` javascript
if (bestaatAl) {
				alert("Dit event is al in je favorieten!");
			} else {
				// Voeg event toe aan favorieten
				favorieten.push(currentLocatie);
				localStorage.setItem("favorieten", JSON.stringify(favorieten));
				alert("Event opgeslagen in favorieten!");
			}
```

Hierna schreef ik dan de html met innerHTML, zodat dit word getoont als je op de website bent.

Vervolgens ben ik aan de slag gegaan met stijlen van de pagina. Ik heb namelijk inspiratie genomen van een vliegtuig ticket, en ik wou dat elke event er ongeveer als dat moest uitzien. dus probeerde ik het na te maken. IK kwam uit eindelijk toch uit.

![foto van favorieten pagina](images/favTicket.png)


Vervolgens ben ik verder gegaan met mijn detailpagina, want dit was eigenlijk niet mooi genoeg. bij de detail pagina heb ik een kleine stuk html erbij geschreven want ik had al veel html , maar de stijl was niet goed. DUs ik heb daarna info opgehaald zoals; toegankelijkheid info, artiesten, verkoopdata, postcode, land, subgenre en tijdzone informatie. Ik ben daarnq aan de slag gegaan met stijlen. Ik hbe de inspiratie genomen van deze website 
https://cdn.dribbble.com/userupload/24387133/file/original-ac99957b129dd2c6d3906658f71455dd.png?resize=1504x1128&vertical=center 

![screenshot van een website](public\images\screenshot.png)

nu ziet het er zo uit na stijlen
![screenshot van detailpagina](public\images\SSDetailpagina.png)


Na dit gedaan te hebben ben ik opzoek gegaan naar hoe ik me pinpointers kan aanpassen, want ik vond de blauwe kleer een beetje verwarrend voor de huidige locatie en event locaties. ik ben dit gaan opzoeken, ik vroeg aan ai hoe ik de marker kan costumizen en kwam hier uit, hij zei dat ik een class moet toevoegen en dit dan stijlen met filter in css.
ik voegde dit dus toe ;

``` javascript 

marker._icon.classList.add("customMarker");

```
En bij me stijling had ik alleen dit gezet;

``` css
.customMarker {
    filter: hue-rotate(150deg);
}
```
 Dit zorgde ervvpor dat mijn marker rood werd.

 Hierna ben ik aan de slag gegaan met kleine details om me websit een beetje mooier te maken. Ik heb de sidebar de stijl aangepast, het ziet er nu zo uit;

 ![Screenshot van sidebar in me website](public\images\sidebarSS.png)

 Het had al veel stijl dus ik had alleen de middenstukje aangepast met een grid. 

 Als laatst was ik vergeten mijn verwijder knop te laten werken in mijn favoriete pagina dus heb ik dit met copilot laten genereren;

 ``` javascript 

//         met ai laten werken bron; dit heb ik, maar waarom werkt het niet?

//            document.querySelectorAll(".verwijder").forEach(verwijderKnop => {
//             verwijderKnop.addEventListener("click", () => {
//                 const id = verwijderKnop.target.dataset.eventId;
//                 let removeFavorieten = localStorage.removeItem("favorieten")
//             })
//         })


        document.querySelectorAll(".verwijder").forEach(verwijderKnop => {
            verwijderKnop.addEventListener("click", () => {
                const id = verwijderKnop.dataset.eventId;
                let favorieten = JSON.parse(localStorage.getItem("favorieten") || "[]");
                favorieten = favorieten.filter(event => event.id !== id);
                localStorage.setItem("favorieten", JSON.stringify(favorieten));
                location.reload();
            })
        })
    </script>

 ```

Wat heb ik geleerd;

Ik heb geleerd hoe ik de localStorage API kan gebruiken om data op te slaan in de browser. Dus dat ik met `localStorage.setItem` iets kan opslaan en met `localStorage.getItem` het weer kan ophalen. Ook heb ik geleerd dat je objecten eerst moet omzetten naar een string met `JSON.stringify` voordat je het kan opslaan, en weer terug met `JSON.parse` als je het ophaalt.

Daarnaast heb ik de Alert API gebruikt om de gebruiker feedback te geven. Met `alert()` kan je een klein popup venster tonen in de browser met een bericht, zoals "Event opgeslagen in favorieten!" of "Dit event is al in je favorieten!". Dit is ingebouwd in de browser en heb je geen extra code voor nodig.

Ook heb ik geleerd hoe ik een marker kan stylen in Leaflet. Je kan namelijk een class toevoegen aan de marker met `marker._icon.classList.add()` en die dan stylen met CSS. Ik gebruikte `filter: hue-rotate(150deg)` om de kleur van de marker aan te passen naar rood.

Als laatste heb ik geleerd hoe de verwijder knop werkt met `data-event-id` en `.filter()`. Met `filter` maak je een nieuwe array zonder het item dat je wil verwijderen, en sla je die nieuwe array weer op in localStorage. Dit is anders dan `removeItem` want die verwijdert de hele lijst in één keer.


## Eind Reflectie

Mijn doel van dit project was om een werkende website te maken en nieuwe dingen te leren, vooral dingen met API. Ik zou zeggen dat dit een succes is. Want ik heb namelijk een goed werkend product gemaakt.

De onderdelen die het best werken zijn het ophalen van de data van de API en deze tonen op de website. Ik vind ook dat het gedeelte van een lang en lat ophalen van de api en tonen op de website heel goed werkt. Beter dan ik had verwacht zelfs, maar uiteindelijk was het toch simpeler. 

Wat ik het moeilijkst vond was in het begin alls zo'n beetje opneiuw leren en nieuwe dingen leren. Ik kon niet heel veel met Javascript dus ik was in het begin wel langzamer aan het werk. Maar qua code vond ik het lastigste gedeelte het stukje code waarbij ik de data ophaal voor de sidebar en deze laat tonen. Omdat ik het op een moeilijke manier heb gedaan. Ik heb het eerst de data opgehaald en daarna deze in een array laten zetten en die aray dan returnen zodat ik de data kan gebruiken. Die data was ook in een ander map, dus moest ik de map importeren in me index.astro om het werkend te krijgen. Dus ik heb een grote omweg gemaakt om de data binnen te krijgen waar ik dat wou, maar dit kon ik veel makkelijker doen. Hiervan heb ik namelijk geleerd en heb het goed gedaan bij de ander pagina namelijk de detailspagina. Dus deze functie/Code zou ik anders doen als ik opnieuw zou beginnen.

Ik heb namelijk heel veel nieuwe dingen geleerd qua astro en javascrip, in het kort wat ik heb geleerd ;

- Hoe ik met astro moet werken, dus qua installeren en met componenten te werken.
- Hoe ik if else statements anders kan schrijven, dus met JXZ en ook met ? en :.
- Hoe ik api data kan ophalen en tonen op een website.
- Hoe ik verschillende API's kan gebruiken zoals; leaflet api, ticketmaster api, geolocation api, alert api en localstorage api.
- Ik heb daarnaast ook geleerd om meer vragen te stellen aan de docenten als je iets niet snap. Want ik ben iemand die niet graag vragen stelt aan de docdnten en ik probeer het meestal eerst zelf op te lossen en daarna te vragen.

Wat beter ging dan ik had verwacht is hoe ik de code zo snel zou snappen. Als ik in het begin weer zou kijken zonder de kennis naar wat ik nu heb geschrven, zou ik geen idee hebben wat wat is. Maar nu heb ik een beter beeld en snap ik veel beter de code. W

Wat ik nog verder wil uitbreiden of leren is hoe ik met andere frameworks kan werken. Ik wil leren werken met three.js bijvoorbeeld , of frameworks die vaak in de praktijk word gebruikt.

Dit project heeft me veel geholpen om te groeien als eeb ontwikkelaar, omdat ik nu de basis goed kent van javascript en hoef ik niet steeds te bouwen op alleen css en html.


## Bronnen in mijn project

### 1. Leaflet kaartbibliotheek
- Import in index.astro:
  - `import L from "https://esm.sh/leaflet@1.9.4";`
- Documentatie:
  - https://leafletjs.com
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import

### 2. Tile providers / kaarttegels
- ArcGIS Light Gray Base:
  - `https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}`
- Stadia Maps labels:
  - `https://tiles.stadiamaps.com/tiles/stamen_toner_labels/{z}/{x}/{y}{r}.{ext}`
-  https://leaflet-extras.github.io/leaflet-providers/preview/

### 3. Ticketmaster API
- Documentatie Ticketmaster Discovery API:
  - https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/

### 4. Browser geolocatie API
  - https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition
  - https://www.w3schools.com/html/html5_geolocation.asp#:~:text=The%20Geolocation%20API%20is%20accessed,information%20(for%20example%20GPS).

### 5. Browser Web Storage API
- https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

### 6. Browser alert API
- https://developer.mozilla.org/en-US/docs/Web/API/Window/alert

### 7. Fetch API / JSON
  - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

### 8. DOM API
  - https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
  - https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

### 9. JavaScript array en taalfeatures
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
- Arrow functions `=>`
- Template strings / template literals
  - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

### 10. Dotenv file
  - https://vitejs.dev/guide/env-and-mode.html

### Bronnen met AI;
- bron met ai, prompt; hoe kan ik de artiesten die bij een event horen ook laten zien op mijn detailpagina? ik heb al een veld in me api response gevonden dat attractions heet, maar ik weet niet hoe ik die data moet gebruiken en laten zien op me pagina.
- met ai laten werken bron; dit heb ik, maar waarom werkt het niet?

           document.querySelectorAll(".verwijder").forEach(verwijderKnop => {
            verwijderKnop.addEventListener("click", () => {
                const id = verwijderKnop.target.dataset.eventId;
                let removeFavorieten = localStorage.removeItem("favorieten")
            })
        })

- met ai de is:global text bij gedaan want me css ging niet goed in de favorieten pagina, waarschijnlijk omdat ik in de mainlayout een global button had staan en die ook in de css had staan. dus ik heb die global button weggehaald en toen ging het wel goed. maar nu is die css ook weg voor de favorieten pagina dus vandaar dat ik die is:global text erbij heb gedaan.



