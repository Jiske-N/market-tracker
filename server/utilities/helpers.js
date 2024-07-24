export function getCurrentDateTime() {
    let timestamp = Date.now();

    let date = new Date(timestamp);

    let year = date.getFullYear();
    let month = padNumber(date.getMonth() + 1);
    let day = padNumber(date.getDate());
    let hours = padNumber(date.getHours());
    let minutes = padNumber(date.getMinutes());
    let seconds = padNumber(date.getSeconds());

    // format date and time
    let formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    return formattedDateTime;
}

// helper function to pad numbers with leading zeros
function padNumber(num) {
    return num.toString().padStart(2, "0");
}
