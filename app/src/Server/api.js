var URL = "http://localhost:3001";
if (process.env.NODE_ENV === 'production') {
    URL = 'Prod_URL'
}


// Fetch URL dynamically
export function getDataWithURL(url, data) {
    const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    };

    return new Promise((resolve, reject) => {
        fetch(url, requestOptions)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch(e => { resolve(e); console.log(e); });

    });
}

export async function LogIn(username, password) {

    var data = await postDataWithURL(URL + "/users/", {
        "username": username,
        "password": password
    });

    return data;
}

export async function Convert(convType, unit) {

    let data = await postDataWithURL(URL + "/convert/", { "convType": convType, "unit": unit });
    return data;
}

export function postDataWithURL(url, data) {

    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    };

    return new Promise((resolve, reject) => {
        fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch(e => { resolve(e); console.log(e); });
    });
}

export function checkDataNotNull(data) {
    return "" ? data === null || data === undefined || data === "" : data;
}

export function LogInCheck() {
    var userInfo = JSON.parse(localStorage.getItem('User'));

    if (userInfo !== undefined && userInfo !== null && new Date(userInfo.expiry) > new Date()) {
        return true;
    }
    else {
        return false;
    }
}





