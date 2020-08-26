// const { createCorn } = require("./seeds/corn");

const field = [];

export const addPlant = (seed) => {
    return field.push(seed);
}

export const usePlants = () => {
    return field;
}

console.log(addPlant())
