import axios from "axios";

export default async function getEarthPictureData(date) {
    const response = await axios.get(
        `https://api.nasa.gov/EPIC/api/?natural/date${date}&api_key=${process.env.REACT_APP_NASA_API_KEY}`
    );
    const data = response.data;
    return data.map((val) => ({
        picture: val.image,
    }));
}
