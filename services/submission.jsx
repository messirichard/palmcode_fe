import {
    usersGetSubmissionByTokenURL,
    usersSubmissionStep1URL,
    usersSubmissionStep2URL,
    usersSubmissionStep3URL
} from "@/helper/api/submission";
import axios from "axios";
import {headersGetToken, headersPatch, headersPatchUpload} from "@/middleware/auth/token";

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
    try {
        const response = await axios.patch(usersSubmissionStep2URL, dataStep2, headersPatch());
        return response;
    } catch (error) {
        console.error("Error Post submission step 2", error);
    }
}

export async function postSubmissionStep3API(dataStep3) {
    const formData = new FormData();
    formData.append('imageFile', dataStep3[0]);
    try {
        const response = await axios.patch(usersSubmissionStep3URL, formData, headersPatchUpload());
        console.log(response, "response")
        return response;
    } catch (error) {
        console.error("Error Post submission step 3", error);
    }
}

export async function getSubmissionByTokenAPI() {
    try {
        const response = await axios.get(usersGetSubmissionByTokenURL, headersGetToken());
        return response;
    } catch (error) {
        console.error("Error Get submission by token", error);
    }
}
