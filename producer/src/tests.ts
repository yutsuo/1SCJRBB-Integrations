const createDrone = () => {
    const droneInfo = {
        id: 'drone-1',
        tracking: true,
        location: {
            lat: 0,
            lng: 0,
        },
        sensors: {
            temperature: 0,
            humidity: 0
        },
    };
    return droneInfo;
};

const humidityGenerator = () => {
    return Math.floor(Math.random() * 100);
};

const temperatureGenerator = () => {
    return Math.floor(Math.random() * (40 - (-30)) + (-25));
};

const coordGenerator = () => {
    return parseFloat(new Intl.NumberFormat('en-US',{
        minimumIntegerDigits: 2,
        minimumFractionDigits: 6,
    }).format(Math.random() * (90 - (-90)) + (-90)));
};

import { v4 as uuidv4 } from 'uuid';

const uuidGenerator = () => {
    return uuidv4();
};

const onOffGenerator = () => {
    return Math.random() > 0.5 ? true : false;
};

// for (let i = 0; i < 20; i++) {
//     const drone = createDrone();
//     drone.id = uuidGenerator();
//     drone.location.lat = coordGenerator();
//     drone.location.lng = coordGenerator();
//     drone.sensors.temperature = temperatureGenerator();
//     drone.sensors.humidity = humidityGenerator();
//     drone.tracking = onOffGenerator();
//     console.log(drone);
// }

// for (let i = 0; i < 20; i++) {
//     console.log(uuidGenerator());
// }

export const getInfo = () => {
    const drone = createDrone();
    drone.id = uuidGenerator();
    drone.location.lat = coordGenerator();
    drone.location.lng = coordGenerator();
    drone.sensors.temperature = temperatureGenerator();
    drone.sensors.humidity = humidityGenerator();
    drone.tracking = onOffGenerator();
    console.log(drone);
    return JSON.stringify(drone);
    // return drone;
};

console.log(getInfo());