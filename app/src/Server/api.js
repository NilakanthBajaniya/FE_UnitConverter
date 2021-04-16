
export function LogIn(username, password) {

    if (username != undefined && username != '' && username != " " && password != undefined && password != '' && password != " ")
        return true;


    return false;
}

export function Convert(convType, unit) {

    debugger;

    let res = { status: false, err: "", convertedUnit: null }

    if ((convType == undefined || convType == "" || convType == " ")) {
        
        res.err = "Select Conversion Type!"
        return res;
    }

    if ((unit == undefined || unit == "" || unit == " ")) {
       
        res.err = "Unit can not be empty";
        return res;
    }

    if (isNaN(unit)) {
        
        res.err = "Unit must be a Number.";
        return res;
    }

    if (convType == 1) // convert from feet to meter
    {
        const feets = parseFloat(unit);
        const feetsInMeters = (feets * 0.3048).toFixed(2);

        res.status = true;
        res.convertedUnit = feetsInMeters;
        return res;
    }
    else if (convType == 2) // convert from meter to feet
    {
        let meters = parseFloat(unit)
        const metersInFeets = (meters * 3.28084).toFixed(2);

        res.status = true;
        res.convertedUnit = metersInFeets;
        return res;
    }
    else {

        res.err = "Please select valid conversion type";
        return res;
    }
}