const potatoSeed = [
    {
        type: "Potato",
        height: 32,
        output: 2
    }
]

export const createPotato = () => {
    return potatoSeed.slice()
}