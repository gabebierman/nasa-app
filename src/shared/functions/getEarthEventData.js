import axios from "axios";

// const baseURL = `https://eonet.gsfc.nasa.gov/api/v3/events?start=${date}&end=${date}&status=all`;

export default async function getEarthEvent(date) {
    const response = await axios.get(
        `https://eonet.gsfc.nasa.gov/api/v3/events?start=${date}&end=${date}&status=all`
    );
    const events = response.data.events;
    return events.map((val) => ({
        event_id: val.id,
        event_title: val.title,
        event_link: val.sources[0].url,
        event_type: val.categories[0].title,
    }));
}
