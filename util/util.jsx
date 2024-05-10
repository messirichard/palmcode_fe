export function splitName(data) {
    if(!data){
        return ""
    }
    return data.split(" ")[0];
}

export function objectArray(data, param) {
    if(!data){
        return ""
    }
    return Object.values(data)
}
