import axios from "axios";
import {getVariantURL} from "@/helper/api/variant";
export async function getVariantAPI() {
    try {
        const response = await axios.get(`${getVariantURL}`)
        const data = await response.data;
        return data;
    }
    catch (error) {
        console.error("Error fetching country", error);
    }
}
