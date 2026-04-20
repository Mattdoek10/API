
export async function API_TM() {
    
    const ticketmasterApi = import.meta.env.TM_KEY;

    const base = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=NL&apikey=" + ticketmasterApi;
    console.log(base)
    const response = await fetch(base);
    const data = await response.json();

    // data._embedded.events.forEach(item => {
    //     console.log(item);
    // })
    
    
    // Haal de lijst van events op
    // const events = data._embedded.events;

//     events.forEach(event => {
//     console.log(event.name);         // naam van het event
//     console.log(event.dates.start.localDate); // datum
//     console.log(event.url);          // link naar ticketmaster
//     console.log(event._embedded.venues[0].name); // locatie
//     console.log(event._embedded.venues[0].location.longitude); // longitude
//     console.log(event._embedded.venues[0].location.latitude);  // latitude
// });

    const events = data._embedded.events;

    const locaties = events.map(event => {
        return {
            naam: event.name,
            datum: event.dates.start.localDate,
            image: event.images[0].url,
            url: event.url,
            venue: event._embedded.venues[0].name,
            adres: event._embedded.venues[0].address.line1,
            stad: event._embedded.venues[0].city.name,
            lat: event._embedded.venues[0].location.latitude,
            lng: event._embedded.venues[0].location.longitude,
            genre: event.classifications[0].genre.name
        };
    });
    return locaties;
}



