import { v4 as uuidv4 } from 'uuid';
import { IDrone } from "./types/drone.js";

export const createDrone = () => {
    const droneInfo: IDrone = {
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

export const humidityGenerator = () => {
    return Math.floor(Math.random() * 100);
};

export const temperatureGenerator = () => {
    return Math.floor(Math.random() * (40 - (-30)) + (-25));
};

export const coordGenerator = () => {
    return parseFloat(new Intl.NumberFormat('en-US',{
        minimumIntegerDigits: 2,
        minimumFractionDigits: 6,
    }).format(Math.random() * (90 - (-90)) + (-90)));
};

export const uuidGenerator = () => {
    return uuidv4();
};

export const onOffGenerator = () => {
    return Math.random() > 0.5 ? true : false;
};

export const getInfo = () => {
    const drone = createDrone();
    drone.id = uuidGenerator();
    drone.location.lat = coordGenerator();
    drone.location.lng = coordGenerator();
    drone.sensors.temperature = temperatureGenerator();
    drone.sensors.humidity = humidityGenerator();
    drone.tracking = onOffGenerator();
    console.log(drone);
    // return drone;
    return JSON.stringify(drone);
};
