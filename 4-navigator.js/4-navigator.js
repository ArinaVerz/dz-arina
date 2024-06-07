const adressLat = 38;
const adressLong = 26;
const positionLat = 64;
const positionLong = 57;

const res = Math.sqrt((adressLat - positionLat)**2 + (adressLong - positionLong)**2);
console.log(res);
