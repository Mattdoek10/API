
export async function API_TM() {
    
    const ticketmasterApi = import.meta.env.TM_KEY;

    const base = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=NL&apikey=" + ticketmasterApi;
    const response = await fetch(base);
    const data = await response.json();

    data._embedded.events.forEach(item => {
        console.log(item);
    })
    // const events = data._embedded?.venues || []; 

    // console.log("Aantal events gevonden:", events.length);
    // events.forEach(event => {
    //     const venue = event._embedded?.venues?.location?.[0];
    //     console.log(event.name, venue?.location);
    //     console.log(event)
    // });
    
    // console.log(events)
    // return events;
    
}



// const endpoint = ""