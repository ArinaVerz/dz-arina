const hasLicence = true; 
const age = 22;
const isDrunk = false; 

const canDrive = hasLicence && (age >=18) && !isDrunk;
console.log(`Может вести машину: ${canDrive ? 'Да' : 'Нет'}`);