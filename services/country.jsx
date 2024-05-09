import {getCountryURL} from "../helper/api/country";
import axios from "axios";
export async function getCountryAPI() {
    try {
        // const response = await axios.get(`${getCountryURL}`)
        const response = await axios.get(`${getCountryURL}`)
        const data = await response.data;
        return data;
    }
    catch (error) {
        console.error("Error fetching country", error);
    }
}
