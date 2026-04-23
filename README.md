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

wat heb ik vandaag gedaan? ik heb vandaag gekeken naar de verchillende api's die ik kan gebruiken en welke idee ik wil gaan uitvoeren. Mijn idee was uiteindelijk: Een webapp waarbij je een random idee kan genereren adv het weer. Dus met een API die je huidige locatie bekijkt, en dan een ander api die naar het weer kijkt op je locatie, word er een idee gegenereerd. Als het regent krijg je dan een idee die je binnehuis kan doen, en als het regent dan het omgekeerde.

wat heb ik geleerd? ik heb geleerd hoe te werken met de framework Astro.

hoe lang duurde het? leren met astro onegveer 1-2 uren. Mijn idee bedenken en dingen opzoeken ook ongeveer 2 uren.

wat ga ik morgen doen. morgen ga ik mijn idee uitleggen en dan van daaruit werken en kijken als mijn APIS goed zijn 

## Daily checkout 8/04/2026/ 

wat heb ik vandaag gedaan? ik heb vandaag mijn idee vastgemaakt. Ik heb namelijk een ander idee, en dit heb ik met de docent besproken en hetblijkt goed te zijn. Mijn idee is dat je met een geaolocation api je huidige locatie kan zien en met een kaart van nederland kan je de verschillende events zien met de ticketmaster api. Daarnaast kan je met local storage de events opslaan en met notification api een melding sturen als de events starten bijvoorbeeld. Ik heb daarnaast de verschillende apis bezocht en prpberen laten werken.

wat heb ik geleerd? ik heb geleerd hoe ik keys kan gebruiken van de api's

hoe lang duurde het? in totaal 2 uren ongeveer

wat ga ik morgen doen. morgen ga ik mijn idee uitwerken en me content laten laden

## Daily checkout 15/04/2026/ 

wat heb ik vandaag gedaan; ik heb vandaag mijn api's goed laten fetchen. ik heb de verschillende evenementen geplaatst op het landkaart en ik heb dit gedaan door de long en lat van de events uit de api te halen. En die dan op het kaart te tonen. Daarna heb ik de pinpoints klikbaar gemaakt en die info laten tonen aan de rechterkant. 

hoelang duurde dit me; het duurde ongeveer 4-5 uren met behulp van de jad.

wat heb ik vadaag geleerd. Ik heb geleerd hoe ik dingen kan fetchen en tonen op de kaart, ik heb ook geleerd dat ik binnen me files van api met punten (.) dieper in de file kan zoeken naar dingen. en Ik heb geleerd hoe ik gegevens op de kaart kan laten tonen met pinpoints. dit is namelijk met dit gedeelte text

``` javascript 

const marker = L.marker([locatie.lat, locatie.lng]).addTo(map);

```

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

wat heb ik vandaag gedaan; ik heb vandaag de detail pagina opgeroepen en laten zien op de website's url. Ik zat hier een tijde mee bezig maar Jad hielp me hiermee. Daarna probeerde ik de code opnieuw te fetchen in me detailspagina zelf. Ook heb ik een beetje gewerkt aan de stijl van de sidepanel.

hoelang duurde dit me; het duurde ongeveer 4-5 uren want ik kon me website niet aan de praat krijgen. Ik kreeg steeds een error en me unieke id kwam niet mee in me url.

wat heb ik vadaag geleerd. Ik heb geleerd hoe me id kan meesturen binnenin me url en die eruit halen om content te tonen op me website.


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
