const hasLicense = true;
const age = 29;
const isDrunk = true;

const canDrive = hasLicense && age >= 18 && !isDrunk; // так как isDrunk = true, мы инвертируем в выражении его в false, потому что пьяным водить нельзя.
console.log(canDrive ? "Может" : "Не может");
