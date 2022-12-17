
export async function getLocation() {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const req = await fetch(`https://us1.locationiq.com/v1/reverse?key=pk.786f2b4a792440175ac681a0fd3e33bd&lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`);
            const data = await req.json()
            resolve({ position: position, address: data.address })
        });

    })

}


export function filterByLocation(events, coords) {
    return events.filter(event => 10 > compareDistance({ latitude: event.lat, longitude: event.lng }, coords))
}


function degreesToRadians(degrees) {

    if (typeof degrees !== 'number' || isNaN(degrees)) {
        throw new Error('degrees must be a number');
    }
    return (degrees * Math.PI / 180);

} 

export function compareDistance(coord1, coord2) {
    coord1.latitude = typeof (coord1.latitude) === 'string' ? parseFloat(coord1.latitude) : coord1.latitude;
    coord1.longitude = typeof (coord1.longitude) === 'string' ? parseFloat(coord1.longitude) : coord1.longitude;
    coord2.latitude = typeof (coord2.latitude) === 'string' ? parseFloat(coord2.latitude) : coord2.latitude;
    coord2.longitude = typeof (coord2.longitude) === 'string' ? parseFloat(coord2.longitude) : coord2.longitude;
    if (typeof (coord1.latitude) !== 'number' || typeof (coord1.longitude) !== 'number'
        || typeof (coord2.latitude) !== 'number' || typeof (coord2.longitude) !== 'number') {

        throw new Error('coordinates should be a number ');
    }
    // radius varies
    const radius = 6378;

    const latDiffRad = degreesToRadians(coord2.latitude - coord1.latitude);
    const lonDiffRad = degreesToRadians(coord2.longitude - coord1.longitude);

    const a = (Math.sin(latDiffRad / 2) * Math.sin(latDiffRad / 2)) +
        (Math.cos(degreesToRadians(coord1.latitude)) * Math.cos(degreesToRadians(coord2.latitude)) *
            Math.sin(lonDiffRad / 2) * Math.sin(lonDiffRad / 2));

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    //console.log(radius * c)
    return radius * c;
}