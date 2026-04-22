
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

