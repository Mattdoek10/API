
export async function API_TM() {
    return data
}

const ticketmasterApi = import.meta.env.TM_KEY;

const base = "https://app.ticketmaster.com/discovery/v2/events.json?apikey=" + ticketmasterApi;
const response = await fetch(base);
const data = await response.json();

console.log(data);
// const endpoint = ""