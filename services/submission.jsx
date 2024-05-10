import {usersSubmissionStep1URL} from "@/helper/api/submission";
import axios from "axios";

export async function postSubmissionStep1API(dataStep1) {
    try {
        const response = await axios.post(usersSubmissionStep1URL, dataStep1);
        return response.data;
    }
    catch (error) {
        console.error("Error Post submission step 1", error);
    }
}
