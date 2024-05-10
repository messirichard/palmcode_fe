function getToken(){
    const token = localStorage.getItem('token');
    if (!token) {
        return "Token not found";
    }
    return token
}

export function headersPatch() {
    return {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${getToken()}`
        }
    }
}

export function headersPatchUpload() {
    return {
        headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${getToken()}`
        }
    }
}

export function headersGetToken() {
    return {
        headers: {
            Authorization: `Bearer ${getToken()}`
        }
    }
}
