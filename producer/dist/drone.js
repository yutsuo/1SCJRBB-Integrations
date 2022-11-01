import { v4 as uuidv4 } from 'uuid';
export const createDrone = () => {
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
export const humidityGenerator = () => {
    return Math.floor(Math.random() * 100);
};
export const temperatureGenerator = () => {
    return Math.floor(Math.random() * (40 - (-30)) + (-25));
};
export const latGenerator = () => {
    return parseFloat((Math.random() * (90 - (-90)) + (-90)).toFixed(6));
};
export const lngGenerator = () => {
    return parseFloat((Math.random() * (180 - (-180)) + (-180)).toFixed(6));
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
    drone.location.lat = latGenerator();
    drone.location.lng = lngGenerator();
    drone.sensors.temperature = temperatureGenerator();
    drone.sensors.humidity = humidityGenerator();
    drone.tracking = onOffGenerator();
    console.log(drone);
    // return drone;
    return JSON.stringify(drone);
};
