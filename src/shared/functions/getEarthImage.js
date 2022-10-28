import axios from "axios";

export default async function getEarthImage(yyyy, mm, dd, fileName) {
    const response = await axios.get(
        `https://api.nasa.gov/EPIC/archive/natural/${yyyy}/${mm}/${dd}/png/${fileName}.png?api_key=${process.env.REACT_APP_NASA_API_KEY}`
    );
    return response;
}

// const { data: imagePicture, error: pictureError } = useGetEarthImageQuery(
//     {
//         yyyy: "2022",
//         mm: "02",
//         dd: "22",
//         fileName: "epic_1b_20220222041237",
//     },
//     { skip: false }
// );
