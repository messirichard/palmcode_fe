import {usersSubmissionStep1URL, usersSubmissionStep2URL} from "@/helper/api/submission";
import axios from "axios";
import {headers} from "@/helper/auth/token";

export async function postSubmissionStep1API(dataStep1) {
    try {
        const response = await axios.post(usersSubmissionStep1URL, dataStep1);
        return response;
    }
    catch (error) {
        console.error("Error Post submission step 1", error);
    }
}

export async function postSubmissionStep2API(dataStep2) {
    const token = localStorage.getItem('token');
    if (!token) {
        return "Token not found";
    }
    try {
        const response = await axios.patch(usersSubmissionStep2URL, dataStep2, headers(token));
        return response;
    } catch (error) {
        console.error("Error Post submission step 2", error);
    }
}
