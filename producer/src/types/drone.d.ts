export interface IDrone {
    id: string,
    tracking: Boolean,
    location: {
        lat: number,
        lng: number,
    },
    sensors: {
        temperature: number,
        humidity: number
    }
}