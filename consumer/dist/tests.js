export const coordGenerator = () => {
    return parseFloat((Math.random() * (180 - (-180)) + (-180)).toFixed(6));
};
let gMapsURL = `https://www.google.com/maps/search/?api=1&query=${(coordGenerator())}%2C${coordGenerator()}`;
console.log(coordGenerator());
setInterval(() => {
    console.log(`https://www.google.com/maps/search/?api=1&query=${(coordGenerator())}%2C${coordGenerator()}`);
}, 1000);
//# sourceMappingURL=tests.js.map